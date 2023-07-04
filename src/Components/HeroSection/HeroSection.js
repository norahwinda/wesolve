import React from 'react'
import Typewriter from "typewriter-effect"
import Hero from '../../Images/wesolves-w.png'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

function HeroSection({id}) {

  const navigate = useNavigate()
  const [state] = React.useState({
    title: "Research.",
    titleTwo: "Collaborate.",
    titleThree: "Build."
  })
  return (
    <div className='heroSection' id={id}>
      <div className='heroLeft'>
        <h1>
          <div className='title'>{state.title}</div>
          <div className='titleTwo'>{state.titleTwo}</div>
          <div className='titleThree'>{state.titleThree}</div>
        </h1>
        <h1 className='heroBottom'>Design & Development studio, Turning ideas into: <span><Typewriter options={{
          autoStart: true, 
          loop: true,
          delay: 40,
          strings:[
            "Web App",
            "Mobile App",
            "Reality"
          ]}}></Typewriter></span></h1>
          <button className='btn' onClick={()=>navigate('/contactUsPage')}>Let's talk</button>
          </div>
          <div className='heroImage'>
            <img src={Hero} alt='' />
          </div>
    </div>
  )
}

export default HeroSection
