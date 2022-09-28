import React from 'react'

function Home(props) {


  const style ={
    height: "100vh",
    backgroundImage: `url(${props.Images.Home})` ,
    backgroundSize: "cover",
    color : "white"
  }

  return (
    <div>
       <div style={style}>
        <div className="title">
          <h1>SITE TITLLE</h1>
          <a href="">VIEW PORTFOLIO</a>
        </div>
        
       </div>

       <div className="overlap">
        <div className="one">
          <div className="icon">

          </div>
          <h3></h3>
          <p></p>

        </div>
        <div className="two">
        <div className="icon">
            
            </div>
            <h3></h3>
            <p></p>

        </div>
        <div className="three">
        <div className="icon">
            
            </div>
            <h3></h3>
            <p></p>
        </div>
       </div>
      
    </div>
  )
}

export default Home