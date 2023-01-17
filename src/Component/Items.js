
import './cart.css'
import { products } from './Products';

import { createContext, useEffect, useReducer, useState } from 'react';
import Contextcart from './Contextcart';
import {reducer} from './reducer'
export const cartContext=createContext();
const initalState={
    item:products,
    totalAmount:0,
    totalItem:0
}
const Items = () => {
    const [state,dispatch]=useReducer(reducer,initalState)
    const removeItem=(id)=>{
       return dispatch({
            type:"REMOVE_ITEM",
            payload:id
        })
    }
    const clearCart=()=>{
       return dispatch({
            type:"CLEAR_ITEM"
        });
    }
   const increment=(id)=>{
       return dispatch({
           type :"INCREMENT",
           payload:id
       })
   }
   const decrement=(id)=>{
       return dispatch({
           type:"DECREMENT",
           payload:id
       })
   }
   useEffect(()=>{
        dispatch({
            type:"GET_TOTAL"
           
        })
   
   },[state.item])
    return (
        <div>
            <cartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
            <Contextcart/>
            </cartContext.Provider>
           
        </div>
    )
}
export default Items;