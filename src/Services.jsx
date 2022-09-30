import React from "react";
import {GlobalValues} from "./context/context"

function Services(props) {
  let  value = React.useContext(GlobalValues)
  // console.log(value)


  const style = {
    height: "100vh",
    backgroundImage: `url(${props.Images.Services})`,
    backgroundSize: "cover",
    color : "white"
  };
  return (
    <div style={style}>
      
    </div>
  );
}

export default Services;
