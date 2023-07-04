import React from 'react'
import Latest1 from '../../../../LatestImages/latest1.webp'
import ProductD from '../../../../LatestImages/product.png'
import Journey from '../../../../LatestImages/jn.webp'
import GenFlow from '../../../../LatestImages/genFlow.webp'
import UserFlow from '../../../../LatestImages/userflow.png'
import ContactUs from '../../../../Components/ContactUs/ContactUs'
import Footer from '../../../../Components/Footer/Footer'
import Agent from '../../../../LatestImages/agent.png'
import Admin from '../../../../LatestImages/admin.png'
import './SaasWidget.css'
import Header from '../../../Header/Header'

function SaasWidget() {
  return (
    <div className='saasWidget'>
      <Header />
      <h1>Building a Robust SaaS Widget for Exceptional Customer Support</h1>
      <img src={Latest1} alt=''/>
      <div className='overView'>
        <h1>Overview</h1>
        <div className='overViewBottom'>
        <div className='overViewType'>
          <p>Type</p>
          <h3>Web App - Widget</h3>
        </div>
        <div className='overViewIndustry'>
          <p>Industry</p>
          <h3>Travel & Hospitality</h3>
        </div>
        <div className='overViewTech'>
          <p>TechStack</p>
          <h3>100ms  React RnD     PubNub</h3>
        </div>
        </div>
      </div>
      <div className='keyResults'>
      <h1 className='keyResultsHead'>Key Results</h1>
      <div className='keyBottomyResults'>
        <div className='userCapacity'>
          <h1>1 Million</h1>
          <p>concurrent user capacity</p>
        </div>
        <div className='potentialDev'>
          <h1>5000+ hours</h1>
          <p>of potential development time savings</p>
        </div>
        <div className='potentialDev'>
          <h1>30 mins</h1>
          <p>integration and installation of widget</p>
        </div>
        </div>
      </div>
      <div className='productDesign'>
        <h1>Product Design</h1>
        <img src={ProductD} alt=''/>
      </div>
      <div className='aboutClient'>
        <h5>ABOUT THE CLIENT</h5>
        <div className='aboutC'>
          <h1>SaaS Company Offering Customer-centric Solutions</h1>
          <h5>San Francisco, CA</h5>
          <p>Their specialty lies in offering innovative solutions that cater to the unique needs of businesses across various industries. The company operates on a global scale.</p>
        </div>
      </div>
        <div className='productVision'>
          <h1>PRODUCT VISION</h1>
          <div className='productVisionRight'>
          <div className='visionRight'>
            <h2>A SaaS Widget for Exceptional Customer Support</h2>
            <p>The client wanted us to create a widget for customers to communicate with service agents through various channels, such as text and video. They wanted the app to be dependable and robust enough to surpass industry benchmarks.</p>
            </div>
            <div className='objectivs'>
              <h3>Key Objectives to Achieve</h3>
              <ul>
                <li>Create a software-as-a-service (SaaS) suite for customer support.</li>
                <li>Build an iframe widget capable of being placed on any site using a few lines of JavaScript.</li>
                <li>Flow similar to Intercom, and customers could interact with this widget to contact support</li>
              </ul>
            </div>
            </div>
            </div>
            <div className='executionJourney'>
              <h3>Execution Journey</h3>
              <img src={Journey} alt=''/>
            </div>
            <div className='technicalArchitecture'>
              <h5>TECHNICAL ARCHITECTURE</h5>
              <h2>Integrated Tech Stacks with User-centric Design</h2>
              <p>From the get-go, we understood that there needs to be good integration between the tech stacks used in the project. Through this realization, we chose tools to deliver the best results together.</p>
            </div>
            <div className='communicationFlow'>
              <img src={GenFlow} alt=''/>
            </div>
            <div className='projectExecution'>
              <h2>Agile Development. Time and Material Method. Strict Quality Tests.</h2>
              <p>Our team utilized a Time and Material engagement model to foster better collaboration. Additionally, we prioritized quality assessment (QA) at every stage of the development process, with a dedicated QA check for most steps.</p>
              <h5>Features Built</h5>
              <ul>
                <li>A widget for communication with agents via various channels</li>
                <li>Video/voice call integration using 100ms</li>
                <li>Screen share integration</li>
                <li>Multi-person video chat with a dynamic layout</li>
                <li>Notifications flow for real-time events, calls, and status updates</li>
                <li>Real-time event for call notification and call status</li>
                <li>PIP flow for video/voice call when not present in video call screen</li>
              </ul>
            </div>
            <div className='userFlow'>
              <h3>User Flow Created</h3>
              <div className='consumerFlow'>
              <h4>Consumer Flow</h4>
              <p>The flow for consumers was designed to be intuitive and self-explanatory. They would get multiple sign-in options and get notifications when an agent joined. Agent assignment would happen according to the topic selected.</p>
              <img src={UserFlow} alt=''/>
              </div>
              <div className='agentFlow'>
                <h4>Agent Flow</h4>
                <p>When a room is created by the consumer, the agent gets a notification to enter the room. On entry, the agent will receive all the sign-in info the consumer shares, along with a unique ID. The agent can then follow a predefined flow for interaction.</p>
                <img src={Agent} alt=''/>
              </div>
              <div className='adminFlow'>
                <h4>Admin flow</h4>
                <p>Admins have the same options as agents for user interaction. Admins are also given extra privileges to add or remove agents and manage topics.</p>
                <img src={Admin} alt=''/>
              </div>
            </div>
            <ContactUs />
            <Footer />
      </div>
  )
}

export default SaasWidget
