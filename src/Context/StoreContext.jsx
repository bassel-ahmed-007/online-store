import React, { createContext, useState } from "react";
import data from "../data";

export const StoreContext = createContext(null);

////////////////////  creating the Cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

//////////////////// the Provider
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //////////////////// adding to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  //////////////////  removing from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  /////////////////// total Amount in cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let product = data.find((product) => product.id === Number(item));
        totalAmount += product.price * cartItems[item];
      }
      return totalAmount;
    }
  };

  ////////////////////////  total Items in cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  /////////////////////// values
  const contextValue = {
    data,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
