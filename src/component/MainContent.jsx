import React from 'react'
import "./maincontent.css"

const MainContent = (props) => {
  return (
    <div className='content'>
      <div className='imgwala'>
        <img src={props.img} alt="nothing" />
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default MainContent
