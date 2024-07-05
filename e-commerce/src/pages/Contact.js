import React from 'react';
import './ContactStyles.css'

const Contact = () => {
  return (
     <div className='contact'>
         <h1>Contact Page</h1>

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2200772267215!2d78.3332761239087!3d17.49700474964056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb928908194565%3A0xdbbd2625c6556649!2sGsm%20Mall%2C%20Miyapur%20Main%20Rd%2C%20ICRISAT%20Colony%2C%20Madeenaguda%2C%20Hyderabad%2C%20Telangana%20500050!5e0!3m2!1sen!2sin!4v1720200431585!5m2!1sen!2sin" width="100%" height="50%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

         <form>
             <input type='text' placeholder='Name' name='name' required />
             <input type='text' placeholder='Email' name='email' required/>
             <textarea rows='5' cols='30' placeholder='Enter message' name='message'>

             </textarea>
             <button type='submit'>SEND</button>
         </form>
     </div>
  )
}

export default Contact