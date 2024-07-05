import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import './ServicesStyles.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='serviceTop'>
            <TbTruckDelivery />
            <p>Super fast and Free Delivery</p>
        </div>
        <div className='serviceMiddle'>
           <div className='serviceMiddleTop'>
              <PiShieldCheckeredFill />
              <span>Non-contact Shipping</span>
           </div>
           <div className='serviceMiddleBottom'>
              <GiReceiveMoney />
              <span>Money-back Guaranteed</span>
           </div>
        </div>
        <div className='serviceBottom'>
             <RiSecurePaymentLine />
             <p>Super Secure Payment System</p>
        </div>
    </div>
  )
}

export default Services