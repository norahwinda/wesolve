import React from 'react'
import Header from '../../Header/Header'
import ContactUs from '../../ContactUs/ContactUs'
import Footer from '../../Footer/Footer'
import './Graphql.css'

function Graphql() {
  return (
    <div className='designDet'>
      <Header />
      <div className='reactNTop'>
        <h1>GraphQL Development Services</h1>
        <p>As an experimental app development company, we have been a part of the GraphQL tech community since its launch. We’ve been utilizing it to deliver complex, flexible, and scalable apps</p>
        <p>Looking to integrate GraphQL into your app development project? We are here to help.</p>
        <button>TALK TO OUR GRAPHQL EXPERSTS</button>
      </div>
      <div className='aboutReactNativ'>
        <h1>About GraphQL</h1>
        <p>Developed by Facebook to facilitate fast and specific communication with APIs, GraphQL is a query language used to query data from various sources. By making APIs swift, flexible, and developer-friendly, GraphQL speeds up the development of cost-effective modern web and mobile applications.</p>
      </div>
      <div className='reatNBenefits'>
        <h1>Benefits of GraphQL in app development</h1>
        <ul>
          <li>Stable and lightweight</li>
          <li>Prevents over or under-fetching of data</li>
          <li>Inherently graphical, declarative, and strongly typed</li>
          <li>Great fit for micro-services architecture</li>
          <li>Fetches specific data with a single API call</li>
          <li>Autogeneration of API documentation</li>
        </ul>
      </div>
      <div className='whyUsReactN'>
        <h1>Why choose Wesolve as your GraphQL development company?</h1>
        <p>We deliver projects using GraphQL that are easily scalable and perfect for your business cases. Our development team ensures your requirements are met with no lapse in quality.</p>
        <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Experienced GraphQL professionals</h1>
            <p>Our team of expert GraphQL developers has proven experience in designing and developing high-quality, scalable apps using GraphQL.</p>
          </div>
          <div className='why'>
            <h1>Hundreds of apps created</h1>
            <p>At Wesolve, we have been using GraphQL since its launch to create apps satisfying clients from a range of industries worldwide.</p>
          </div>
          <div className='why'>
            <h1>Global app quality standards</h1>
            <p>We maintain global standards while transforming your app development dreams into reality without gaps in quality.</p>
          </div>
          <div className='why'>
            <h1>Affordable applications</h1>
            <p>GraphQL makes APIs quick, efficient, and scalable, reducing development costs and time for your product requirements.</p>
          </div>
        </div>
      </div>
      <div className='whatWeOffer'>
          <h1>What GraphQL API development services do we provide?</h1>
          <p>We provide a wide scope of GraphQL app development services spanning industries and requirements. Our team of certified GraphQL developers are skilled in using GraphQL for any requirement and business case.</p>
        </div>
        <div className='ourServices'>
          <h1>Our services</h1>
          <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>API architecture and its design</h1>
            <p>We are adept in designing custom and personalized APIs based on business requirements. Our experienced developers ensure that each API design does the job flawlessly.</p>
          </div>
          <div className='why'>
            <h1>UI/ UX design considering GraphQL APIs</h1>
            <p>We can create UI/UX interfaces using GraphQL in innovative formats. Our experienced developers can handle any project requirements with ease.</p>
          </div>
          <div className='why'>
            <h1>Migrating existing backend to GraphQL</h1>
            <p>We help you migrate the existing backend to GraphQL. We ensure the transition is simple and easy to implement</p>
          </div>
          <div className='why'>
            <h1>Integrating GraphQL to existing backend</h1>
            <p>We assist in integrating GraphQL to current projects. Our development team handles the process end-to-end.</p>
          </div>
        </div>
        </div>
        <div className='reactNCommunity'>
          <h1>Hire Our GraphQL App Development Experts.</h1>
          <p>Book a Free Discovery Session.</p>
          <button>START YOUR GRAPHQL PROJECT</button>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Graphql
