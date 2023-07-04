import React from 'react'
import './PartnerCard.css'

function PartnerCard({image}) {
  return (
    <div className='partnerCard'>
      <img src={image} alt=''/>
    </div>
  )
}

export default PartnerCard
