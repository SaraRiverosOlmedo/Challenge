import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartContext;
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.precio, 0);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
