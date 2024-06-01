import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context-copy';
import './shop.css'

export const Product = (props) => {
    const {id, productName, price, productImg} = props.data;
    const { cartItems, addToCart } = useContext(ShopContext);

    const cartAmount = cartItems[id];
  return (
    <div className="product">
      <img src={ productImg } alt='img'/>
      <div className='description'>
        <p>
            <b>{ productName }</b>
        </p>
        <p>{price}$</p>
        <button className='AddToCart' onClick={() => addToCart(id)}>
        Add To Cart
        {cartAmount > 0 && <>({cartAmount})</>}</button>
      </div>
    </div>
  )
}