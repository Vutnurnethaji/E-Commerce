import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'100%' , gap:'40px'}}>
      <Hero name='Amazon Store'/>
      <Services />
      <Trusted />
    </div>
  )
}

export default Home