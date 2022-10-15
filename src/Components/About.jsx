import React from "react";
import abtimg from "../images/b1.png"
function About(){
    return(
        <div className="about">
         <div className="about-model">
            <img src={abtimg}></img>
         </div>
         <div className="about-text">
            <h1><span>S</span>ee how much energy you have Saved and Consumed</h1>
           
         </div>
        </div>
    )
}

export default About;