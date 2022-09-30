import React from 'react'
import { GlobalValues  } from "../context/context"



function StevieSection() {
    const value = React.useContext(GlobalValues)
    
  return (
    <div className='StevieSection'>
        <div className='Left'>
            <h1>STEVIE SOLUTIONS LIMITED</h1>
            <p>We provide solutions for business by creative design, 
            scalable development and interactive digital engagement .
            Our design team helps you in translating your services and 
            products into powerful business . Check below for
             some of our key services and solutions.</p>
            <a href="">About Us</a>
        </div>
        <div className="Right">
            <img src={value.Home} alt="" />
        </div>
    </div>
  )
}

export default StevieSection