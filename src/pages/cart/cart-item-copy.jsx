import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context-copy";

export const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);
    const {id, productName, price, productImg} = props.data;

    return (
        <div className='cartItem'>
            <img src={productImg} alt='img'/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='ediat'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItem( Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
            
        </div>
    )
}