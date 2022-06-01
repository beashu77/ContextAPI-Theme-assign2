import React, { useContext } from 'react';

import { CartContext } from '../Class-contexts/CartContext';

const Cart = () => {
    const {addToCart} =useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default Cart;