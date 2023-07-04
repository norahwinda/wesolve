import React from 'react'
import './DesignPci.css'
import Pci from '../../../../LatestImages/pci.webp'
import Req from '../../../../LatestImages/req.png'
import Header from '../../../Header/Header'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'

function DesignPci() {
  return (
    <div className='designPci'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={Pci} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Designing PCI Inspection Mobile App for Network Security Giant</h1>
            <p>Streamlining the user experience for effective POS data compliance</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>25days</p>
          <h5>Industry</h5>
          <p>Healthcare App Development Services</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Design</p>
          <h5>Year</h5>
          <p>2023</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>Our client is a leading organization operating out of the USA to provide computer and network security solutions. They needed help with their software that helps automate the point-of-sale (POS) device inspection process. It allows merchants to detect skimming attacks on attended and unattended terminals using a quick and reliable smartphone application. The purpose of this application is to provide authorized organizational users to inspect any POS device in a simple, effective, and consistent manner and record the data on the web portal while allowing them to manage the process with greater certainty, clarity, and ease.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>While being a great handy solution, the existing web application had a preliminary UI design. The client required the modification of the entire web app including UI, UX, and a few additional features. Also, the limited exposure of the target audience to the technology required the client to ask for the cleanest and most simple designs. The idea was to design a web application that could be easily understood and used by any layman. It was a design project that needed to be completed forthwith. Hence, we engaged with a fixed scope model that was finished within one month.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After an in-depth discussion with the client that led to a better understanding of the requirements of the project, we assigned this project to a team of one lead designer, one designer, and one account manager. The client further explained their ideas about the UI for the web app.</p>
        <p>Our team began by understanding the existing web app and analyzing user requirements. With a collaborative work approach, our designers began putting in their opinions and ideas that were well received by the client. The target was to enhance the user experience.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={Req} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>Despite the project being spread over a short period, both the client and our team spent substantial time discussing and understanding the client's requirements. The client who came from a technical background also had crucial inputs and a keen interest to understand the design perspective while welcoming new ideas</p>
        <p>Over the discussions, our team gathered that the initial draft of the project would not suffice and we might need additional work for implementing the requirements. This also called for an extension of the estimated timeline at the beginning of the project. The client agreed to accommodate the changes and supported this decision.</p>
        <p>Since the web app is used as a primary tool to help comply with Payment Cards Industry standards, namely Data Security Standard 9.9, there is little to no room for error. Our team ensured the designs included all critical aspects of the process along with keeping the designs minimalistic to help end users better understand the functionalities.</p>
        <p>Figma was selected as the tech stack to create the designs as required. Its support for collaborative teamwork has been instrumental in helping us build better designs. We also synced up daily with the client to discuss the progress of the project and to get the client’s feedback on the designs.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>This project was seemingly one of the simplest projects we have delivered. However, we encountered a few challenges during the course of the engagement. The first is the type of engagement. This project was assigned on a fixed model with strict deadlines to adhere to. Once the work commenced, we realized that we would require more time to cater to the requirements of the client. The client was very considerate and instrumental to agree for the requested extension</p>
          <p>We have gathered that continuous communication with the client throughout the course of the project has led to the successful overcoming of both these challenges. As soon as we noticed any deviations in the project, we ensured that the client was informed and provided with solutions right away.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>We successfully implemented simple designs for non-technical users</li>
          <li> It was initiated as a fixed scope engagement model with changes later on</li>
          <li>The solution helps businesses enhance the PCI DSS 9.9 compliance</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>This project proved to be one of the most uncomplicated and crucial design projects we have undertaken. At the completion of the design process, the client was satisfied with the end result and immensely appreciative of our team’s hard work and responsiveness to the client’s feedback. We look forward to more such engagements with the client in the future.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default DesignPci
