import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
