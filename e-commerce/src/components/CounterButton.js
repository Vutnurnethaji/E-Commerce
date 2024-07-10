import React, { useContext, useState } from 'react';
import './CounterButtonStyles.css'
import { NavLink } from 'react-router-dom';
import { cartContext } from '../context/cartContext';

const CounterButton = ({stock, singleProduct, color}) => {
  const {addingToCart}=useContext(cartContext)
    const [count, setCount]=useState(1);

    const {id}=singleProduct

    const increment=()=>{
        if(stock >0 && count<stock){
            setCount(count=>count+1)
        }
    }
    const decrement=()=>{
        if(stock >0 && count<=stock && count>1){
            setCount(count=>count-1)
        }
    }
  return (
    <div className='counterButton'>
        <span className='counterSpan'>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        </span>
        <NavLink to={'/cart'} onClick={()=>addingToCart({singleProduct, color, count, id:id+color})}>
          <button>ADD TO CART</button>
        </NavLink>
    </div>
  )
}

export default CounterButton