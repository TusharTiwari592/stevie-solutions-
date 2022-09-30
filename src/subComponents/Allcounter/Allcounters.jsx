import React, { useState , useEffect } from 'react'


function Allcounters(props) {
    console.log(props.limit)
    let [value , setValue] = useState(0);
    // let [finalval , finalValue] = useState({});
    // useEffect(() => {
        
    //     setValue( [value, props.value])
    // }, [])
    // console.log(value)
            // setValue([...value , props.value])
     let interval = setInterval(()=>{
        if(value === props.limit){
            clearInterval(interval)
            setValue(props.limit)
        }
        else    
          setValue(value+ 1)
      
        //   console.log(value)
          }, 1000)


    
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