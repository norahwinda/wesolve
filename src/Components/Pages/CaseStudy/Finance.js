import React from 'react'
import './Finance.css'

function Finance({image, heading, paragraph, use}) {
  return (
    <div className='finance'>
      <img src={image} alt=''/>
      <h2>{heading}</h2>
      <p className='paragraph'>{paragraph}</p>
      <p className='use'>{use}</p>
    </div>
  )
}

export default Finance
