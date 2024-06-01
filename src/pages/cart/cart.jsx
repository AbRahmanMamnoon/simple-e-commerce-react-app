import React, {useContext} from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {

  const { cartItem, getTotalCartAmout } = useContext(ShopContext);
  const totalAmout = getTotalCartAmout();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cartTitle'>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>{PRODUCTS.map( product => {
          if(cartItem[product.id] !== 0) {
            return <CartItem data={product} />
          }
      })}</div>

      {totalAmout > 0 ? <div className='checkout'>
        <p>subTotal: ${totalAmout}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout </button>
      </div> : <h1>Your Cart is Empty</h1>}
    </div>
  )
}