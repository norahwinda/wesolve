import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Latest.css'

function Latest({image, heading, paragraph, use, nav}) {

  const navigate = useNavigate()
  return (
    <div className='latest' onClick={()=>navigate(nav)}>
      <img src={image} alt=''/>
      <h2>{heading}</h2>
      <p className='paragraph'>{paragraph}</p>
      <p className='use'>{use}</p>
    </div>
  )
}

export default Latest
