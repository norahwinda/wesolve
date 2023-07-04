import React from 'react'
import './WhyUsCard.css'

function WhyUsCard({heading, body, image}) {
  return (
    <div className='whyUsCard'>
      <img src={image} alt=''/>
      <div className='cardLeft'>
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default WhyUsCard
