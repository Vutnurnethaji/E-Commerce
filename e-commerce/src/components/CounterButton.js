import React, { useState } from 'react';
import './CounterButtonStyles.css'
import { NavLink } from 'react-router-dom';

const CounterButton = ({stock}) => {
    const [count, setCount]=useState(1);

    const increment=()=>{
        if(stock >0 && count<5){
            setCount(count=>count+1)
        }
    }
    const decrement=()=>{
        if(stock >0 && count<=5 && count>1){
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
        <NavLink to={'/cart'}>
          <button>ADD TO CART</button>
        </NavLink>
    </div>
  )
}

export default CounterButton