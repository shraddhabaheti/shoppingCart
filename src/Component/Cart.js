import React, { useContext } from 'react'
import { cartContext } from './Items';

const Cart = ({ description,title,img,price,quantity,id}) => {
  const {removeItem,increment,decrement} =useContext(cartContext);
  return (
    <div>
      <div className='items-info'>
        <div className='product-img'>
          <img src={img} alt='' />
        </div>
        <div className='title'>
          <h2>{title}</h2>
          <p>{ description}</p>
        </div>
        <div className='add-minus-quantity'>
          <i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={()=>increment(id)}></i>
        </div>
        <div className='price'>
          <h3>{price}</h3>
        </div>
        <div className='remove-item'>
          <i className="fas fa-trash remove" onClick={()=>removeItem(id)}></i>
        </div>
       </div>
      <hr />
    </div>
  )
}

export default Cart;