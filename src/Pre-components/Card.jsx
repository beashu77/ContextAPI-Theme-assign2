
import React,{useContext} from 'react';
import {CartContext} from '../Pre-contexts/CartContext';

const Card = () => {
    const {handleCartUpdte} = useContext(CartContext)
  return (
    <div>
        <button onClick={()=>{
            handleCartUpdte(1)
        }}>But now!</button>
    </div>
  )
}

export default Card