
import { Navbar } from "../atomic-components/Navbar";
// import { Footer } from "../atomic-components/Footer";
import React from "react";

export const Page = (props) => {
    return (
    <div>
        {props.user &&  <Navbar />}
        
   
         {/* {props.children}
    <Footer /> */}
    </div>
    )
}