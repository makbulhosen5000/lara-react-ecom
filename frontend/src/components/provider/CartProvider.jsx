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
  // Calculate subtotal and grand total
  const subTotal = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = 10; // Fixed shipping cost
  const grandTotal = subTotal + shipping;
  
  // Function to update quantity of an item in the cart
  // This function can be used to handle quantity changes in the cart
  const updateCartItem = (itemId, newQty) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId ? { ...item, qty: newQty } : item
    );

    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

    // get quantity of items in the cart
    const getQty = () => {
      let qty = 0;
      cartData.map(item =>{
        qty +=  parseInt(item.qty)
      });
      return qty;
    };

    // This function removes an item from the cart and updates localStorage
   const handleCartItemDelete = (itemId) => {
    const updatedCart = cartData.filter(item => item.id !== itemId);

    // Update state
    setCartData(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartData,shipping, subTotal,grandTotal, addToCart,updateCartItem,handleCartItemDelete, getQty }}>
      {children}
    </CartContext.Provider>
  );
};
