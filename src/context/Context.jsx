import {createContext} from "react"

export const GlobalValues = createContext();


let background = {
    Home: "h1.jpg",
    Services: "h2.jpg",
    Contact: "h3.jpg",
  };


  export function ContextDiv({children}){
        console.log(children)
    return(
    <GlobalValues.Provider value={background} >
        {children}
    </GlobalValues.Provider>
)
}
