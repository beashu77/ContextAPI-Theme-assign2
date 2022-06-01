import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Class-contexts/CartContext';

const Wishlist = () => {
  const {count}=useContext(CartContext)
  return (
    <div>Wishlist:{count}</div>
  )
}

export default Wishlist;