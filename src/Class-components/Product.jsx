import React, { useContext } from 'react';
import Cart from './Cart';
import { AuthContext } from '../Class-contexts/AuthContext';

const Product = () => {
    const {isAuthorized}=useContext(AuthContext);
  return (
    <div>Product:{isAuthorized?"LoggedIN":"LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product