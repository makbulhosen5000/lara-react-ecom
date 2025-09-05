import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartData(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product, size = null, quantity = 1) => {
    let updatedCart = [...cartData];

    // Check if product exists (consider size if provided)
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
  const subTotal = cartData.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 10; // Fixed shipping cost
  const grandTotal = subTotal + shipping;

  // Update quantity of an item
  const updateCartItem = (itemId, newQty) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId ? { ...item, qty: newQty } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Get total quantity of items
  const getQty = () => {
    return cartData.reduce((total, item) => total + parseInt(item.qty, 10), 0);
  };

  // Remove one item
  const handleCartItemDelete = (itemId) => {
    const updatedCart = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear all cart items
  const clearCart = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        shipping,
        subTotal,
        grandTotal,
        addToCart,
        updateCartItem,
        handleCartItemDelete,
        getQty,
        clearCart, // ✅ expose clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
