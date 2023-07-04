import React from 'react'
import './Featured.css'
import { useNavigate } from 'react-router-dom'

function Featured({image, heading, paragraph, use, nav}) {

  const navigate = useNavigate()
  return (
    <div className='featured' onClick={()=>navigate(nav)}>
      <img src={image} alt=''/>
      <h2>{heading}</h2>
      <p className='paragraph'>{paragraph}</p>
      <p className='use'>{use}</p>
    </div>
  )
}

export default Featured
