import React from 'react';
import Wishlist from './Wishlist';
import { useContext } from 'react';
import { AuthContext } from '../Class-contexts/AuthContext';
import { CartContext } from '../Class-contexts/CartContext';
import { ThemeContext } from '../Class-contexts/ThemContext';


const Navbar = () => {
    const {isAuthorized,login,logout}=useContext(AuthContext);
     const {buy}=useContext(CartContext);
     const{isLight,toggleTheme}=useContext(ThemeContext)
  return (
    <div>Navbar
        <button
        onClick={()=>{
            if(isAuthorized) logout();
            else login("R","Z");

        }}
        >
          {isAuthorized? "Logout":"Login"}
        </button>
        <button onClick={buy}>buy</button>
        <button onClick={toggleTheme}>{`Make ${isLight ? "Dark":"Light"}`}</button>
       {isAuthorized && <Wishlist/>}
    </div>
  )
}

export default Navbar