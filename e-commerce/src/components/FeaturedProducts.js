import React, { useContext } from 'react'
import './FeturedProductsStyles.css'
import Product from './Product'
import { appContext } from '../context/productContext'

const FeaturedProducts = () => {

    const {state}=useContext(appContext)
    console.log(state)

    if(state.isLoading){
        return <div>Loading</div>
    }
  return (
    <div className='feaProducts'>
        <div style={{height:'100%', width:'70%', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div className='feaProductsTop'>
           <h6>CHECK NOW</h6>
           <h2>Our Feature Service</h2>
        </div>
        <div className='feaProductsBottom'>
            {
              state.featuredProducts.map((el)=>{
                   return <Product key={el.id} {...el}/>
              })
            }
        </div>
        </div>
    </div>
  )
}

export default FeaturedProducts