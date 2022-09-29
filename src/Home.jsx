import React from "react";
import Offering from "./subComponents/Offering";
import StevieSection from "./subComponents/StevieSection";
import ThreeBoxes from "./subComponents/ThreeBoxes";

function Home(props) {
  const style = {
    height: "100vh",
    backgroundImage: `url(${props.Images.Home})`,
    backgroundSize: "cover",
    color: "white",
  };

  return (
    <div>
      <div id="FirstDiv" style={style}>
        <div className="title">
          <h1>SITE TITLLE</h1>
          <a href="">VIEW PORTFOLIO</a>
        </div>
      </div>
        <ThreeBoxes/>
        <StevieSection/>
        <Offering/>
    </div>
  );
}

export default Home;
