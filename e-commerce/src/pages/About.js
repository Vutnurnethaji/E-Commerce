import React, { useContext } from 'react'
import Hero from '../components/Hero'
import { appContext } from '../context/productContext'

const About = () => {
  const {state, dispatch}=useContext(appContext)
  console.log(state)
  return (
    <>
       <Hero name='Amazon Ecommerce'/>
       
    </>
  )
}

export default About