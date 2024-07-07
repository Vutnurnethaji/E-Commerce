import React from 'react';
import './ProductStyles.css'
import { NavLink } from 'react-router-dom';

const Product = ({name,price,id,category,image}) => {
  return (
   <>
      <NavLink to={`/singleProduct/${id}`}>
        <div className='card'>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className='cardBottom'>
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
        </div>
    </NavLink>
   </>
  )
}

export default Product