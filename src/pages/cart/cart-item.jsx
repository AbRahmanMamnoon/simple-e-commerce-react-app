import React, {useContext} from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { cartItem, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);
  const{id, productName, price, productImg} = props.data;

  return (
    <div className="cartItem">
      <img src={productImg} alt="IMG" />
      <div className="description">
        <div>
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
        </div>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItem[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)}/>
          <button  onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}
