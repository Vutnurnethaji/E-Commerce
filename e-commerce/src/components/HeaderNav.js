import React from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderNavStyles.css'

const HeaderNav = ({title}) => {
  return (
    <div className='headerNav'>
       <NavLink to={'/'}>HOME</NavLink>/<span>{title}</span>
    </div>
  )
}

export default HeaderNav