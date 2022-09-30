import React from 'react'
import { GlobalValues } from "../context/context" 



function Offering() {
   const value = React.useContext(GlobalValues)
  //  console.log()
   let style = {
        backgroundImage : `url(${value.Services})`,
        height : "500px",
        color : "white",
        backgroundSize :"cover",
        margin:"5rem 0",
        
   }
  return (
    <div style={style}>
        <div className='Offering'>
            <h2>Servives</h2>
            <h1>WHAT WE OFFER</h1>
            <p>We are the Web & Digital Automation System experts</p>
        </div>   
    </div>
  )
}

export default Offering