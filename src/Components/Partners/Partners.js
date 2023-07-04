import React from 'react'
import darden from '../../Images/darden.webp'
import google from '../../Images/google.webp'
import icici from '../../Images/icici-bank.webp'
import ips from '../../Images/ips-verlang.webp'
import mpl from '../../Images/mpl.webp'
import paypoint from '../../Images/paypoint.webp'
import pepperfry from '../../Images/pepperfry.webp'
import thyrocare from '../../Images/thyrocare.webp'
import "animate.css/animate.min.css";
import './Partners.css'
import PartnerCard from './PartnerCard'

function Partners({id}) {
  return (
    <div className='partners' id={id}>
      <h1>We work with global brands</h1>
      <p>Our verticall solution expertise allows your business to streamline workflow, and increase productivity. No matter the business, wesolve has you covered with industry compliant solution</p>
      <div className='partnersImages'>
        <PartnerCard image={darden}/>
        <PartnerCard image={google}/>
        <PartnerCard image={icici}/>
        <PartnerCard image={ips}/>
        <PartnerCard image={mpl}/>
        <PartnerCard image={paypoint}/>
        <PartnerCard image={pepperfry}/>
        <PartnerCard image={thyrocare}/>
      </div>
    </div>
  )
}

export default Partners
