import React, { createContext } from "react";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { TuneSharp } from "@mui/icons-material";

let background = {
  Home: "h1.jpg",
  Services: "h2.jpg",
  Contact: "h3.jpg",
};
export const GlobalValues = createContext();

function App() {
  return (
    <GlobalValues.Provider value={background} >
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
    </GlobalValues.Provider>
  );
}
// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>

//   )

export default App;
