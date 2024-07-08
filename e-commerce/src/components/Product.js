import React from 'react';
import './ProductStyles.css'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/Format';

const Product = ({name,price,id,category,image}) => {
  return (
   <>
      <NavLink to={`/singleProduct/${id}`}>
        <div className='card'>
            <figure>
                <div className='imgDiv'>
                   <img src={image} alt={name}/>
                </div>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className='cardBottom'>
                <h4>{name}</h4>
                <p><FormatPrice price={price}/></p>
            </div>
        </div>
    </NavLink>
   </>
  )
}

export default Product