import React from 'react'
import Header from '../../../Header/Header'
import Cus from '../../../../LatestImages/custiv.webp'
import CustivReq from '../../../../LatestImages/custivReq.png'
import './Custiv.css'
import Footer from '../../../Footer/Footer'
import ContactUs from '../../../ContactUs/ContactUs'

function Custiv() {
  return (
    <div className='custiv'>
      <Header />
      <div className='custivCompany'>
        <div className='custivCompanyTop'>
          <div className='custivCompanyTopImg'>
          <img src={Cus} alt=''/>
          </div>
          <div className='custivCompanyTopRight'>
            <h1>Web app for a Custiv</h1>
            <p>Improving the industrial sector by enhancing the supplier side of the app</p>
          </div>
        </div>
        <div className='custivCompanyMiddle'>
          <h5>Industry</h5>
          <p>Manufacturing</p>
        </div>
        <div className='custivCompanyMiddle'>
          <h5>project</h5>
          <p>Design</p>
        </div>
        <div className='custivCompanyBottom'>
          <h5>Year</h5>
          <p>2022</p>
        </div>
      </div>
      <div className='aboutCustiv'>
        <h1>About the Client</h1>
        <p>Our client is a one-stop partner who services all industrial segments by helping companies to transfer their manufacturing value chain by implementing holistic manufacturing and engineering solutions; their offerings range from prototyping to production. The company was founded by a team of inventors and engineers who faced challenges in the highly scattered manufacturing industry which lacked streamlining and transparency. They wanted to solve this by effective digitization because of which they took on this endeavor to take manufacturing processes a step ahead of the era. They are working on moving the industry forward to a future that is automated and technology-based.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The CTO of the company wanted to work on the web application for the supplier side of their platform and decided that we had the expertise to carry forth their vision upon looking at our design projects. The main goal of the project is to revamp their existing website and align it to the patterns of the manufacturing industry to make the experience much more enjoyable for their potential audience.</p>
        <p>The project is majorly design based wherein our in-house designers revamped their website over a collaboration that was spread over a period of five weeks. The engagement was based on the agile model wherein we collaborated with the client to understand their requirements and implemented the necessary changes.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After understanding the requirements that the project would consist of, we roped in one designer and an account manager to handle the project as directed by the client. Considering the project is quite different from what we usually do at Wesolve's, the team had to spend quite some time catching the drift of what the client wanted and coming up with ideas that matched their requisites.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={CustivReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>After the team was introduced to the client, we spent the initial few days brainstorming and researching how things need to be done based on the requirements and planning the way forward. The project was purely design-based where our in-house designers worked on the existing application to revamp it and enhance the experience according to the standards of the manufacturing industry.</p>
        <p>The client provided us with a source file and a notion document stating the details of what they wanted and how they envisioned the website to look upon completion. Post this, our design team took charge and researched extensively to come up with ideas to enhance the website.</p>
        <p>We also worked on implementing features that would improve the functionality of the web application. The whole idea behind the project was to create an end-to-end supply chain design model where the supplier could enter their requirements and view the required components as well as request a quote and accept it or reject it based on the same.</p>
        <p>Over the course of the five weeks that the project entailed, our designers implemented various additional features to ensure a smooth and streamlined process for suppliers to request a quote. We also integrated a centralized dashboard as well as a component viewer which would provide a structured view of what client’s offerings. Lastly, a chatbox was also implemented to make it easier for suppliers to get in touch with the partner for their services.</p>
        <p>The designs were formulated using Figma to enable the design team to ship the changes in a streamlined way. We coordinated with the client on a regular basis and the entire progress of the project was managed by the client using Clickup, an efficient project management tool.</p>
        </div>
        <div className='overComing'>
        <h1>Overcoming Challenges</h1>
        <p>One of the major hassles that we faced along the way was the constraint of time as the engagement period was quite short. Our team handled this by holding daily meetings along with standup calls with the client where we discussed what needs to be done to take the project forward. Another challenge that we faced was in implementing the necessary changes as the client required it to be industry-specific. However, our team conducted extensive studies and researched the niche industry and the client's competitors which helped them to come up with creative ideas. We coordinated with them proactively to understand what they required and took the necessary feedback and implemented the changes one screen at a time before moving on to the next one.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>The designs were created using Figma.</li>
          <li>Clickup was the tool of choice for project management.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>While the engagement on the project was quite a short one, the client was extremely happy with the deliverables and how the Wesolve team managed to execute the design phase in a timely manner despite the time constraints. They also reviewed us on clutch wherein they commended us on the overall engagement experience and awarded us a 5-star rating for the exemplary work that was done by the team.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Custiv
