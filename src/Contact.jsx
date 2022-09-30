 import React from 'react'

function Contact(props) {
  const style ={
    height: "100vh",
    backgroundImage: `url(${props.Images.Contact})` ,
    backgroundSize: "cover"
  }
  return (
    <div style={style}>Contact</div>
  )
}

export default Contact