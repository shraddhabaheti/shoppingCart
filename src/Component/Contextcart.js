import React, { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Cart from './Cart';
import {cartContext}  from './Items';

const Contextcart = () => {
    const {item,clearCart,totalItem,totalAmount}=useContext(cartContext)
    
    return (
        <>
            <header>
                <div className='continue-shopping '>
                    <img src='../image/arrow.svg' alt='arrow' className='arrow-icon' />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src='../image/cart.png' alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className='main-cart-section'>
                <h1>Shooping cart</h1>
                <h3 className='total-item'>you Have<span className='total-item-count'>{totalItem}</span>items in shopping Cart</h3>
                <div className='cart-items'>

                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item?.map((curItem) => {
                                    return <Cart key={curItem?.id}{...curItem} />
                                })
                            }
                      </Scrollbars>

                    </div>

                </div>
                <div className='card-total'>
                    <h3>Card total:-<span>{totalAmount}₹</span></h3>
                    <button>Checkout</button>
                    <button className='clear-cart ' onClick={clearCart}>ClearCart</button>
                </div>
            </section>


        </>
    )
}

export default Contextcart
