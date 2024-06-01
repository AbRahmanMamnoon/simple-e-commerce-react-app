import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
  }
  return cart;
}

export const ShopcontextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());

  const getTotalCartAmout = () => {
    let totalAmout = 0;
    for(const item in cartItems) {
      if( cartItems[item] > 0 ) {
        const cartInfo = PRODUCTS.find(product => product.id === Number(item));
        totalAmout += cartItems[item] * cartInfo.price;
      }
    }

    return totalAmout;
  }
  const addToCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItem = (newAmount, itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: newAmount}));
  }

  const contextValue = {cartItems,addToCart,removeFromCart,updateCartItem,getTotalCartAmout};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
};