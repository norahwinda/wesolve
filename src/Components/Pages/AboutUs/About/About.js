import React from 'react'
import people from '../../../../Images/people.svg'
import web from '../../../../Images/web.svg'
import established from '../../../../Images/established.svg'
import globe from '../../../../Images/globe.svg'
import Typewriter from "typewriter-effect"
import WhyUs from '../../../WhyUs/WhyUs'
import Blogs from '../../../Blogs/Blogs'
import Footer from '../../../Footer/Footer'
import ContactUs from '../../../ContactUs/ContactUs'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutLeft'>
        <h1>About us</h1>
        <p>Wesolves Pvt. Ltd. is an IT service company providing a wide range of solutions on several IT domains and technologies. We started back in 2016 as a Website Development, Mobile App Development, and Digital Marketing Company by time extended our services in Game App Development and Cyber Security Services.</p>
        <p>Our Head office is based in Gurgaon near to the capital city Delhi, we are empowered by our Development Centres based in three locations which are Bengaluru (Silicon city of India), Chandigarh, and Indore. </p>
      </div>
      <div className='geeks'>
        <h1>Who are we?</h1>
        <div className='geeksBottom'>
          <div className='people'>
            <div className='peopleImg'>
              <img src={people} alt=""/>
            </div>
            <p>Like minded people who share a passion for technology</p>
          </div>
          <div className='webAus'>
            <div className='webImg'>
              <img src={web} alt=""/>
            </div>
            <p>Web and mobile solution experts</p>
          </div>
          <div className='established'>
            <div className='establishedImg'>
            <img src={established} alt=""/>
            </div>
            <p>Established in 2016, we aim to lead digital transformation through innovation</p>
          </div>
          <div className='globe'>
            <div className='globeImg'>
            <img src={globe} alt=""/>
            </div>
            <p>Community-driven evolution in Mobility and Technology</p>
          </div>
        </div>
      </div>
      <div className='ourMissionVission'>
        <div className='ourMission'>
          <h1>COMPANY MISSION</h1>
          <p>Disrupt Mobile App, Game App Development And Cyber Security Industry By Offering Value Driven Customized Products. Motivated And Passionate Employees Aligned With Shared Vision Of Serving The Customers. Our Mission Is To Add Constant Values To Our Stakeholders</p>
          <h2>Mission Statement</h2>
          <ul>
            <li>Motivated And Passionate Employees Aligned With Shared Vision Of Serving The Customer</li>
            <li>Disrupt Mobile App, Gaming App Development And Cyber Security Industry</li>
          </ul>
        </div>
        <div className='ourVision'>
          <h1>COMPANY VISION</h1>
          <p>Provide best-in-class products & services to our partners and thereby providing the ultimate experience to users to add value to their life. For the employees, establishing wesolves as the best platform to serve customers with a culture of fun, team building, safety, freedom, Innovation, And value addition as core values, along with unmatched value to all our stakeholders</p>
          <h2>Vision Statement</h2>
          <ul>
            <li>For partners: Provide best in class products and services to our partners.</li>
            <li>For users: Provide ultimate experience to users with the objective of adding value to their life</li>
          </ul>
        </div>
      </div>
      <div className='values'>
        <h3>Our Values</h3>
          <h1><Typewriter options={{
          autoStart: true, 
          loop: true,
          delay: 40,
          strings:[
            "COMMITMENT",
            "REPUTATION",
            "EXELLENCE"
          ]}}></Typewriter></h1>
        <p>These values give us the foundations we need.</p>
      </div>
      <WhyUs />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default About
