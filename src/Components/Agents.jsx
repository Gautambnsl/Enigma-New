import React from "react";
import AgentBox from "./AgentBox";
import ag1 from "../images/a1.png";
import ag2 from "../images/a2.png";
import ag3 from "../images/a3.png";
function Agents(){
    return(
        <div className="agent">
         <div className="b-container">
          <AgentBox image={ag1} name="Choose the right light"/>
          <AgentBox image={ag2} name="Unplug Charges"/>
          <AgentBox image={ag3} name="Turn Off your lights"/>
         </div>
         <button><a href="#">Back to Top</a></button>
        </div>
    )
}

export default Agents;