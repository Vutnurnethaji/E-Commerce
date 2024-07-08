import React, { useContext } from 'react';
import './ProductsNavStyles.css'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FilterContext } from '../context/filterContext';

const ProductsNav = () => {
  const {gridView, filter_products,gridViewFunc, listViewFunc, sortValueFunc }=useContext(FilterContext);
  return (
    <>
      <div className='productsNavTop'>
           <button className={gridView?'active navButton':'navButton'} onClick={()=>gridViewFunc()}>
               <BsFillGridFill />
           </button>
           <button className={gridView?'navButton': 'active navButton'} onClick={()=>listViewFunc()}>
                <BsList />
           </button>
      </div>
      <div>
          {filter_products.length} products available
      </div>
      <div>
         <select id='sort' onClick={()=>sortValueFunc()}>
             <option value='asc'>Price low to high</option>
             <option value='desc'>Price high to low </option>
             <option value='a-z'>a-z</option>
             <option value='z-a'>z-a</option>
         </select>
      </div>
     
    </>
  )
}

export default ProductsNav