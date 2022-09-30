import React from "react";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContextDiv} from "./context/context"
import "./App.css";





let background = {
  Home: "h1.jpg",
  Services: "h2.jpg",
  Contact: "h3.jpg",
};

function App() {
  return (
    <ContextDiv >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header Images={background} />}>
            <Route path="/" element={<Home Images={background} />} />
            <Route
              path="/Services"
              element={<Services Images={background} />}
            />
            <Route path="/Contact" element={<Contact Images={background} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextDiv>
    
  );
}
// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>

//   )

export default App;
