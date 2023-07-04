import React from 'react'
import './WhyUs.css'
import pSolving from '../../Images/problemSolving.png'
import custo from '../../Images/custo.jpg'
import techguru from '../../Images/techguru.png'
import oneStop from '../../Images/oneStop.jpg'
import future from '../../Images/future.jpg'
import exellenc from '../../Images/exellenc.jpg'
import WhyUsCard from './WhyUsCard'

function WhyUs() {
  return (
    <div className='whyUs'>
      <p>Why chose us</p>
      <h1>REASONS TO CHOOSE <span>WESOLVE</span></h1>
      <div className='whyUsCards'>
        <WhyUsCard image={pSolving} heading="We are the problem-solvers" body="Our team consists of highly skilled professionals who are committed to providing innovative solutions for all your IT needs. We take on challenges that other companies shy away from and turn them into opportunities." />
      <WhyUsCard image={custo} heading="We are customer-centric" body="Our focus is on building strong relationships with our clients. We understand that each business is unique, and we tailor our services to meet the specific needs of each client. We pride ourselves on delivering exceptional customer service that exceeds expectations." />
      <WhyUsCard image={techguru} heading="We are the tech gurus" body="With a deep understanding of the latest technological advancements, we ensure that your business stays ahead of the competition. Our team is constantly updating their skills and knowledge, staying abreast of the latest trends and technologies." />
      <WhyUsCard image={oneStop} heading="We are a one-stop-shop" body="Wesolves offers a comprehensive range of IT services, from cybersecurity to cloud solutions. We eliminate the need for multiple vendors, making it easy for businesses to streamline their operations and focus on what they do best."/>
      <WhyUsCard image={future} heading="We are future-focused" body="We are constantly looking ahead to anticipate the changing needs of businesses. We provide scalable solutions that can adapt to the evolving technological landscape, ensuring that our clients stay ahead of the curve."/>
      <WhyUsCard image={exellenc} heading="We are committed to excellence" body="Our dedication to delivering exceptional results is at the core of everything we do. We take pride in our work and strive for excellence in every project we undertake. Overall, Wesolves is the go-to IT services company for businesses that want to stay ahead of the curve and maximize their potential."/>
      </div>
      </div>
  )
}

export default WhyUs
