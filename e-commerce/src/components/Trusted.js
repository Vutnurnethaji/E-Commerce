import React from 'react';
import trusted1 from './../assets/trusted1.jpg';
import trusted2 from './../assets/trusted2.jpg';
import trusted3 from './../assets/trusted3.png';
import trusted4 from './../assets/trusted4.jpg';
import trusted5 from './../assets/trusted5.png';
import './TrustedStyles.css'

const Trusted = () => {
  return (
    <div className='trusted'>
        <div className='trustedTop'>
             <p>Trusted by 1000+ Companies</p>
        </div>
        <div className='trustedBottom'>
            <img src={trusted1} alt='trustedPic' />
            <img src={trusted2} alt='trustedPic' />
            <img src={trusted3} alt='trustedPic' />
            <img src={trusted4} alt='trustedPic' />
            <img src={trusted5} alt='trustedPic' />
        </div>
    </div>
  )
}

export default Trusted