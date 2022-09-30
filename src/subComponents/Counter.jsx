import React ,{useState} from 'react'
import Allcounters from './Allcounter/Allcounters'

function Counter() {
 
    // let [Tushar, setTushar] = useState(0)
 

    // setInterval(()=>{

    //     // setTushar(++Tushar)
        
    // }, 1000)

    

  return (
    <div className='counter'>
        <Allcounters limit = {4} content = 'Years of Experience' />
        
        {/* <div className="count">
            <h1>250 +</h1>
            <p></p>
        </div>
        <div className="count">
            <h1>45 +</h1>
            <p>Running Projects</p>
        </div>
        <div className="count">
            <h1>25 +</h1>
            <p>Professional Team</p>
        </div> */}
        
    </div>
  )
}

export default Counter