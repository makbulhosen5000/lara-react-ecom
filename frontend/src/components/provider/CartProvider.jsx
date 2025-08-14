import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product, size = null, quantity = 1) => {
    let updatedCart = [...cartData];

    // Check if the product exists (consider size if provided)
    const existingItemIndex = updatedCart.findIndex(
      (item) =>
        item.product_id === product.id &&
        (size ? item.size === size : true)
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        qty: updatedCart[existingItemIndex].qty + quantity,
      };
    } else {
      // Add new item
      updatedCart.push({
        id: `${product.id}-${Math.floor(Math.random() * 1000)}`,
        product_id: product.id,
        size,
        title: product.title,
        price: product.discount_price ?? product.price,
        qty: quantity,
        image_url: product.image_url,
      });
    }

    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartData, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
