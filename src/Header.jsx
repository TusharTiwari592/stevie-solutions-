import React from 'react'

function Header() {
  return (
    <div className='banner'>
      <div className='addBar'>
         <p>987654321</p>   
      </div> <hr />
      <div className='NavBar'>
        <h1>Stevie Limited Solutions</h1>
        <ul className='menu'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
        </ul>
      </div>  
    </div>
  )
}

export default Header
