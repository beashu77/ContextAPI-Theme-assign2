import React,{useContext} from 'react';
import {CartContext} from '../Pre-contexts/CartContext';


const Navbar = () => {
    const {cartCount} = useContext(CartContext)
  return (
     
    <div>Cart:{cartCount}</div>
  )
}

export default Navbar;