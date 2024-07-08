import React, { useContext, useEffect } from 'react'
import { appContext } from '../context/productContext'
import { useParams } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import FormatPrice from '../helper/Format';
import { CiDeliveryTruck } from "react-icons/ci";
import { TbReplace } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldHalf } from "react-icons/io5";
import './SingleProductStyles.css'
import Image from '../components/Image';
import Star from '../components/Star';
import { FaCheck } from "react-icons/fa6";


const API='https://api.pujakaitem.com/api/products'

const SingleProduct = () => {

  const{state, getSingleProduct}=useContext(appContext);

  const{id}=useParams();

  const {id:alias, name, company, price, description, category, stock, stars, reviews, image, colors}=state.singleProduct

  useEffect(()=>{
    getSingleProduct(`${API}/?id=${id}`)
  },[])

  console.log(state.singleProduct)
  return (
    <div className='singleProduct'>
        <div className='singleProTop'>
            <HeaderNav title={name}/>
        </div>
        <div className='singleProMain'>
            <div className='singleProMainLeft'>
                <Image img={image} />
             </div>
            <div className='singleProMainRight'>
                <p>{reviews}</p>
                <Star stars={stars} reviews={reviews}/>
                <span>MRP:<del><FormatPrice price={price+250000}/></del></span>
                <p>Deal of the Day: {price}</p>
                <p>{description}</p>
                <div style={{display:'flex',alignItems:'center', justifyContent:'space-evenly', gap:'5px'}}>
                  <div>
                     <CiDeliveryTruck />
                     <p>Free Delivery</p>
                  </div>
                  <div>
                     <TbReplace />
                     <p>30 days replacement</p>
                  </div>
                  <div>
                     <TbTruckDelivery />
                     <p>Amazon Delivered</p>
                  </div>
                  <div>
                     <IoShieldHalf />
                     <p>2 years+ warranty</p>
                  </div>
                </div>
                <hr style={{width:'100%'}}/>
                <p>Available: <b>{stock>0 ?'In Stock': 'Out of Stock'}</b></p>
                <p>Id:<b>{alias}</b></p>
                <p>Brand:<b>{company}</b></p>
                <hr style={{color:'black', border:'1px solid black'}}/>
                <div style={{display:'flex', gap:'5px'}}>
                {
                   colors && colors.map((color)=>{
                      return <button style={{backgroundColor:color, border:'0', borderRadius:'50%'}}>
                        <FaCheck style={{color:'white'}}/>
                        </button>
                  })
                 }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct