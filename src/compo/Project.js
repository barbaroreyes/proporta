import React from 'react';

const Project = (props) => {
    console.log('props in project',props.name)
  return (
    <div>
      {props.name}
    </div>
  );
}

export default Project;
