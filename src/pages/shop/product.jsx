import React, { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";

export const Product = ( props ) => {
    const {id, productName, price, productImg} = props.data;
    const { AddToCart, cartItem } = useContext(ShopContext);
    
    const cartAmount = cartItem[id];
    return <div className='product'>
            <img src={productImg} alt='img'/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
                <button className='AddToCart' onClick={() => AddToCart(id)}>
                Add To Cart {cartAmount > 0 && <>({cartAmount})</>}</button>
            </div>
        </div>
}