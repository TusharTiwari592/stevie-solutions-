import React from 'react'
<<<<<<< HEAD
import { useState } from 'react'
import {Outlet , Link} from "react-router-dom";

function Header(props) {

  let [img ,setImg]= useState("Home")

// console.log(img)

const style ={
    // height: "80vh",
    // backgroundImage: `url(${props.Images[img]})` ,
    // backgroundSize: "cover"
    position : "fixed",
    top : "0",
    width : "100%",
    color : "black"
}
// console.log(img)

    function Click(e){
        e.preventDefault()
        setImg(e.target.innerText)

    }



  return (
    <div> 
    <div style={style}>
        <div className="AddBar">
             <p>98765432221</p>   
        </div><hr />
        <div className="Nav">
            <h1>Stive Solutions <br />Limited</h1>
            <ul className='menu'>
                <li><Link  to="/Home">Home</Link></li>
                <li><Link  to="/Services">Services</Link></li>
                <li><Link  to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    <Outlet/>
=======

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
>>>>>>> 0d2254a518136f398125b48f4a5122d9524cb034
    </div>
  )
}

<<<<<<< HEAD
export default Header
=======
export default Header
>>>>>>> 0d2254a518136f398125b48f4a5122d9524cb034
