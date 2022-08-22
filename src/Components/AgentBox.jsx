import React from "react";
function AgentBox(props){
    return(
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} />
            </div>
            <div className="a-b-text">
              <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default AgentBox;