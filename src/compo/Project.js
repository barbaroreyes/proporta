import React from 'react';

const Project = (props) => {
    return (
        <div className="front">
            {props.name}
            <a href ={props.github}>Git</a>
            <a href ={props.app}>App</a>
            </div>
      )
  
}

export default Project;
