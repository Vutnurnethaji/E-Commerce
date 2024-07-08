import React, { useContext } from 'react';
import './ProductsStyles.css'
import ProductsFilter from '../components/ProductsFilter'
import ProductsNav from '../components/ProductsNav'
import ProductsView from '../components/ProductsView'
import { FilterContext } from '../context/filterContext';

const Products = () => {

  const mainState=useContext(FilterContext);

  return (
    <div className='products'>
        <div className='productsLeft'>
            <ProductsFilter />
        </div>
        <div className='productsRight'>
             <div className='prodRightTop'>
                <ProductsNav />
             </div>
             <div className='prodRightBottom'>
                <ProductsView mainState={mainState}/>
             </div>
        </div>
    </div>
  )
}

export default Products