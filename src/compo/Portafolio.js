import React from 'react'
import  Project from '../compo/Project'
const Portafolio = (props) => {
    console.log(props.product,'prop.ps in portafolio')
  return (
    <div className='portafolio'>
    {props.product.map((item,i)=>{
        return (
            <Project
            {...item}
            />
        )
    })}
           
    </div>
  )
}

export default Portafolio
