import React, { useContext } from 'react'
import Hero from '../components/Hero'
import { appContext } from '../context/productContext'

const About = () => {
  const {name}=useContext(appContext)
  return (
    <>
       <Hero name='Amazon Ecommerce'/>
       {name}
    </>
  )
}

export default About