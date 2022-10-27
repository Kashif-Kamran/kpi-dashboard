import React from "react";
function Project(props)
{
    return (
        <div className="project-div">
            <h2>Name: {props.name}</h2>
            <h3>Type: {props.type}  </h3>
            <h3>Latest Version: {props.version}  </h3>
            <h3>Size : {props.size} </h3>
        </div>
    )
}
export default Project