import React, { useState , useEffect } from 'react'


function Allcounters(props) {
    console.log(props.limit)
    let [value , setValue] = useState(0);
    useEffect(()=>{
      let interval = setInterval(()=>{
         if(value === props.limit){
             clearInterval(interval)
            //  setValue(props.limit)
         }
         else    
           setValue(value + 1)
       
         //   console.log(value)
           }, 50) ;
           return ()=>clearInterval(interval)
    })


    
    // console.log(props.value)



  return (
    <div>
        <div className="count">
            <h1 >{value}+</h1>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Allcounters