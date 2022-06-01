import { createContext, useState } from "react";

export const CartContext =createContext();

export const PreCartContextProvider =({children})=>{
    const [cartCount,setCartCount]=useState(0);

    const handleCartUpdte=(value)=>{
        setCartCount(cartCount+value);
    }
   //we are saving key as cartCount=CartCount and handleCartCount as handleCartCount function
    return <CartContext.Provider value={{cartCount,handleCartUpdte}}>{children}</CartContext.Provider>;
}