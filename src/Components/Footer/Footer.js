import React from 'react'
import wesolves from '../../Images/wesolves-w.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerTop'>
        <div className='footerContact'>
          <img src={wesolves} alt=""/>
          <p>contact: +917004396620 , +917091010016</p>
          <p>Mail: info@wesolves.com</p>
        </div>
        <div className='footerServices'>
          <h3>Services</h3>
          <a href='/mobile'>Mobile App Development</a>
          <a href='/website'>Website Development</a>
          <a href='/uiDesign'>UI/UX Design</a>
          <a href='/game'>Game App Development</a>
          <a href='/digitalMarketting'>Digital Marketing</a>
          <a href='/cyber'>Cyber Security</a>
        </div>
        <div className='footerCompany'>
          <h3>Company</h3>
          <a href='/aboutUs'>About us</a>
        </div>
        <div className='footerSupport'>
          <h3>Support</h3>
          <a href='/blogs'>Blogs</a>
          <a href='/contactUs'>Contact us</a>
          <a href='/privacy'>Privacy and policy</a>
        </div>
        <div className='footerSocial'>
          <h3>Follow us</h3>
          <a href='/facebook'>facebook</a>
          <a href='/linkedIn'>LinkedIn</a>
        </div>
      </div>
      <div className='footerBottop'>
        <p>Copyright © 2023 wesolve Technologies</p>
      </div>
    </div>
  )
}

export default Footer
