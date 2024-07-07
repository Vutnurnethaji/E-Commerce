import React from 'react';
import './FooterStyles.css'
import { NavLink } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerTop'>
            <div style={{width:'60%'}}>
                <h4>Ready to get started</h4>
                <h4>Talk to us today</h4>
            </div>
            <div style={{width:'38%', display:'flex', justifyContent:'flex-end'}}>
                <NavLink to={'/contact'}>
                    <button>Get Started</button>
                </NavLink>
            </div>
        </div>
        <div className='footerMiddle'>
            <div>
                <h6>Amazon Store</h6>
                <h6>Amazon Store is located in hyd</h6>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
                <h6>Subscribe to get important updates</h6>
                <form style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                    <input type='text' placeholder='YOUR EMAIL' name='email'/>
                    <input type='submit' value='SUBSCRIBE'/>
                </form>
            </div>
            <div>
                <h6 style={{textAlign:'center', marginBottom:'5px'}}>Follow Us</h6>
                 <div style={{display:'flex',justifyContent:'space-evenly'}}>
                 <FaDiscord />
                 <FaInstagramSquare />
                 <IoLogoYoutube />
                 </div>
            </div>
            <div>
                <h6>Call Us</h6>
                <a href='tel:123456789' style={{textDecoration:'none', color:'white'}}>+91 123456789</a>
            </div>
        </div>
        <hr style={{width:'100%', color:'white'}}/>
        <div className='footerBottom'>
            <div>
                <p>@{new Date().getFullYear()} AmazonTechnical. All Rights Reserved</p>
            </div>
            <div>
                <h6>PRIVACY POLICY</h6>
                <h6>TERMS & CONDITIONS</h6>
            </div>
        </div>
    </div>
  )
}

export default Footer