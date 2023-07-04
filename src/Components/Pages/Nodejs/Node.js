import React from 'react'
import './Node.css'
import Footer from '../../Footer/Footer'
import ContactUs from '../../ContactUs/ContactUs'
import Header from '../../Header/Header'

function Node() {
  return (
    <div className='nodejs'>
      <Header />
      <div className='reactNTop'>
        <h1>Node.js Development Services</h1>
        <p>As part of the Node.js community since the start, we have the right expertise to make your app development dreams come true.</p>
        <p>Looking for the best Node.js App development services company? We are here to help.</p>
        <button>TALK TO OUR NODE.JS EXPERSTS</button>
      </div>
      <div className='aboutReactNativ'>
        <h1>Why we recommend Node.js for app development</h1>
        <p>Built on top of JavaScript, Node.js is a back-end runtime environment used to run web apps outside the client’s browser. It is open-source, cross-platform, and used for server-side programming. It runs on the Chrome V8 JavaScript engine, and was created by Ryan Dahl in 2009.</p>
      </div>
      <div className='reatNBenefits'>
        <h1>Benefits of Node.js development</h1>
        <ul>
          <li>Easy to learn and adapt</li>
          <li>Great for building cross</li>
          <li>Easily scalable for microservices</li>
          <li>Asynchronous processing and non-blocking I/O</li>
          <li>Rich Node.js ecosystem of tools</li>
          <li>Extensible and highly customizable</li>
        </ul>
      </div>
      <div className='whyUsReactN'>
        <h1>Why choose Wesolve as your Node.js development company?</h1>
        <p>Choosing us for your app development project means faster go-to-market timelines and better-quality applications. You face lesser iterations during the entire cycle.</p>
        <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>17+ years of experience in web and mobile app development</h1>
            <p>Our portfolio includes a rich list of dynamic digital solutions. We have always experimented with new technology, allowing us to become leaders in the app development service space.</p>
          </div>
          <div className='why'>
            <h1>Hundreds of apps created</h1>
            <p>At Wesolve, we have been using GraphQL since its launch to create apps satisfying clients from a range of industries worldwide.</p>
          </div>
          <div className='why'>
            <h1>Dedicated and skilled Node.js developers</h1>
            <p>We have a dedicated team of Node.js app developers experienced in the nuances of application development. They can help you with every unique project requirement.</p>
          </div>
          <div className='why'>
            <h1>Quick and cost-effective app development solutions</h1>
            <p>Our Node.js development solutions are designed to give you results fast, without the need to break the bank. We have proven expertise with the tech and can develop highly scalable apps for you.</p>
          </div>
        </div>
      </div>
        <div className='whatWeOffer'>
          <h1>What Node.js app development services does Wesolve provide?</h1>
          <p>We have a wide range of services for our portfolio. From product development to consultancy services, there are multiple offerings and services we provide.</p>
        </div>
        <div className='ourServices'>
          <h1>Our services</h1>
          <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Web and mobile app development</h1>
            <p>We turn ideas for web and mobile apps into reality using Node.js services.</p>
          </div>
          <div className='why'>
            <h1>Node.js integration</h1>
            <p>We assist you to add Node.js to your existing project without minimum hassle.</p>
          </div>
          <div className='why'>
            <h1>Consulting, development, and maintenance</h1>
            <p>We help you chart out how to use Node.js through expert consultation services.</p>
          </div>
          <div className='why'>
            <h1>Node.js API development</h1>
            <p>We have proven expertise in creating APIs for use — custom and modified</p>
          </div>
          <div className='why'>
            <h1>Node.js microservices</h1>
            <p>We simplify the creation of large, complex applications through microservices.</p>
          </div>
        </div>
        </div>
        <div className='reactNCommunity'>
          <h1>Hire Our Node.js App Development Experts.</h1>
          <p>Book a Free Discovery Session.</p>
          <button>START YOUR NODE.JS PROJECT</button>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Node
