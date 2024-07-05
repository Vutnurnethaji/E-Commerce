import React from 'react';
import './HeaderStyles.css'
import logo from './../assets/AmazaonPic.webp'
import Nav from './Nav';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTop'>
           <img src={logo} alt='logoPic' height={40} width={80}/>
        </div>
        <Nav />
    </div>
  )
}

export default Header