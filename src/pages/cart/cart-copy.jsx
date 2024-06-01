import React, {useContext} from 'react'
import { PRODUCTS } from "../../products";
import { ShopContext } from '../../context/shop-context-copy';
import { CartItem } from "./cart-item-copy";
import { useNavigate } from 'react-router-dom';
import './cart.css'


export const Cart = () => {
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);

  const totalAmout = getTotalCartAmout();
  const usenavigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cartTitle'>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if( cartItems[product.id] !== 0 ) {
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className='checkout'>
        
        {(totalAmout > 0 ) ? <>
          <p>Total Amount: {totalAmout}</p>
          <button onClick={() => usenavigate('/')}>continue Shopping</button>
          <button>checkout</button> </> : 
          <h1>Your Cart is Empty</h1>
        }
        
      </div>
    </div>
  )
}
