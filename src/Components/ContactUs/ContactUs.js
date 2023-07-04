import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ContactUs.css'

function ContactUs() {

  const navigate = useNavigate()
  return (
    <div className='contactUs'>
      <div className='contactUsLeft'>
        <p>Let's get started</p>
        <h1>We will help you overcome your technology challenges</h1>
        <p>Call us on +91 7004396620 , +917091010016. email us at info@wesolves.com or fill out the following form to start the conversation.</p>
        <button onClick={()=>navigate('/contactUsPage')}>LET'S TALK</button>
      </div>
    </div>
  )
}

export default ContactUs
