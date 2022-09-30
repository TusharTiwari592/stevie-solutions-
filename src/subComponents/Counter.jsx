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
        <Allcounters limit = {250} content = 'Handled Projects' />
        <Allcounters limit = {45} content = 'Running Projects' />
        <Allcounters limit = {25} content = 'Professional Team' />
    </div>
  )
}

export default Counter