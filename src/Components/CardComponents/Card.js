import React from 'react'
import './Card.css'

function Card({title, vid, info}) {
  return (
    <div className='card'>
      <img src={vid} alt='' />
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  )
}

export default Card
