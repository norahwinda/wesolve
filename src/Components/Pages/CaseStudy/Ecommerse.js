import React from 'react'
import './Ecommerse.css'

function Ecommerse({image, heading, paragraph, use}) {
  return (
    <div className='eCom'>
      <img src={image} alt=''/>
      <h2>{heading}</h2>
      <p className='paragraph'>{paragraph}</p>
      <p className='use'>{use}</p>
    </div>
  )
}

export default Ecommerse
