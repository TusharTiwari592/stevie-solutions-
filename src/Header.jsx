import React from 'react'
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
    </div>

  )
}


export default Header


