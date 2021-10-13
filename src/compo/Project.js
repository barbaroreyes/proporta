import React,{useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Project = (props) => {
    const [isFlipped,setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="front"
        //   onClick={handleClick}
          >
            {props.name}
            <a href ={props.github}>Git</a>
            <a href ={props.app}>App</a>
            
          </div>
  
          <div div className="back"
          onClick={handleClick}>
            {props.skills}
            

          </div>
        </ReactCardFlip>
      )
}

export default Project;
