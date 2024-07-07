import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorStyles.css'

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h3>UH OH! You're lost</h3>
      <p>The page you are looking for does not exist. How you get here is a mystery. But you can click the button below to go back to home page</p>
      <NavLink><button>Home</button></NavLink>
    </div>
  )
}

export default Error