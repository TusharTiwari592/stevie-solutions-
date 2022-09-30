import React, { useContext } from 'react'
import {GlobalValues} from "../context/context"


function OurServices() {
    const value = useContext(GlobalValues)
    console.log(value)
  return (
    <div className="ServiceDiv">
    <div className='OurServices'>
        <div className="Service">
            <div className="images">
                <img src={value.Home} alt="" />
            </div>
            <h2>Website Design/Web Design and development</h2>
            <p>Our web developers have worked with various successful startups
                 , medium and large scale enterprises to produce web graphics and 
                 interactive interfaces.</p>
            <a href="">Read More...</a>
        </div>
        <div className="Service">
            <div className="images">
                <img src={value.Contact} alt="" />
            </div>
            <h2>Software Development</h2>
            <p>Our innovatively developed and designed softwares creates oppurtunities empowering business to make an impact globally .And identity through our creativity and expertise</p>
            <a href="">Read More...</a>
        </div>
        <div className="Service">
            <div className="images">
                <img src={value.Services} alt="" />
            </div>
            <h2>saas Developer</h2>
            <p>We have solutions for most dynamic applications through continuous working and testing .We emphasize on our customer and amplify your brand and identity.</p>
            <a href="">Read More...</a>
        </div>
    </div>
    </div>
  )
}

export default OurServices