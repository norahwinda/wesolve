import React from 'react'
import './HealthCare.css'
import Health from '../../../../HealthcareImages/health.webp'
import Requirements from '../../../../HealthcareImages/health2.png'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'
import Header from '../../../Header/Header'

function HealthCare() {
  return (
    <div className='healthCare'>
      <Header />
      <div className='healthCareCompany'>
        <div className='healthCareCompanyTop'>
          <div className='healthCareCompanyTopImg'>
          <img src={Health} alt=''/>
          </div>
          <div className='healthCareCompanyTopRight'>
            <h1>Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcare</h1>
            <p>Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application</p>
          </div>
        </div>
        <div className='healthCareCompanyMiddle'>
          <h5>Industry</h5>
          <p>Healthcare App Development Services</p>
        </div>
        <div className='healthCareCompanyBottom'>
          <h5>Year</h5>
          <p>2023</p>
        </div>
      </div>
      <div className='aboutCl'>
        <h1>About the Client</h1>
        <p>Based in the USA, the client is a leading technology and services company in the healthcare industry. They specialize in building cutting-edge software that helps bridge the gap between patients and an unparalleled clinical experience. Using an AI-powered data science platform, the company leverages advanced visualization approaches like enhanced graphics and the latest cloud-based technology stack to redefine healthcare technology.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client wanted us to contribute functionalities and screens for their application catering to families with medically complex children. The goal was to solve the numerous challenges faced by caregivers and families when it came to accessing quality healthcare facilities for their children with special needs.</p>
        <p>With the application, the client wanted to address the following user challenges:</p>
        <ul>
          <li>Unnecessary and time-consuming hospital trips</li>
          <li>Lack of access to proper medical support, education, and counselling</li>
          <li>High costs associated with healthcare and medical facilities</li>
          <li>Longer waiting times in sharing vital patient medical information with healthcare providers</li>
        </ul>
        <p>Keeping these challenges in mind, our client wanted to develop a single application that would be a one-stop solution for everything healthcare. It would enable timely access to quality healthcare, easy appointment bookings, and record maintenance from the convenience of home.</p>
      </div>
      <div className='requirements'>
        <h1>Requirements</h1>
        <img src={Requirements} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>The project was implemented in a Time and Material Model. We designed everything from scratch, utilizing the NativeBase UI library. By using the NativeBase UI library, we were able to cut down the development time by almost half. The APIs for the backend were provided by the client’s in-house developers. We communicated our requirements clearly with the client's teams and finalized the tech stacks and methodologies mentioned below to ensure the smooth execution of the project.</p>
        <p><b>Build Process</b></p>
        <p>Manual using Xcode and Android Studio</p>
        <p><b>Methodology Used</b></p>
        <p>Time and Material (T&M) for better flexibility and collaboration</p>
        <p><b>Tech Stack/Frameworks</b></p>
        <ul>
          <li>React-Native</li>
          <li>Typescript</li>
        </ul>
        <p><b>Code Formatting Tools</b></p>
        <ul>
          <li>ESlint</li>
          <li>Prettier</li>
        </ul>
        <p><b>Project Management</b></p>
        <ul>
          <li>JIRA</li>
        </ul>
        <p><b>Version Control</b></p>
        <ul>
          <li>Git</li>
          <li>AWS CodeCommit</li>
        </ul>
        <p><b>Checking Code Quality and Vulnerabilities</b></p>
        <ul>
          <li>Snyk</li>
        </ul>
        <p><b>Services/libraries Used</b></p>
        <ul>
          <li>TwilioFor chat, SMS text messaging, and video calls.</li>
          <li>OktaFor authentication and authorization.</li>
          <li>Firebase messagingFor sending push notifications</li>
          <li>NativeBaseFor creating the user interface</li>
        </ul>
      </div>
      <div className='development'>
        <h1>Overcoming Challenges</h1>
        <p><b>Challenge 1</b></p>
        <p>Following the security guidelines for user details storage.</p>
        <p>It was vital to ensure user consent was given for storing details. Since the data was also highly sensitive, all the mobile app security guidelines needed to be met.</p>
        <p><b>Solution</b></p>
        <p>We used only those third-party solutions that did not break security rules. For example, we encrypted the redux store using MMKV storage.</p>
        <p><b>Challenge 2</b></p>
        <p>Utilizing Okta as an authentication service due to HIPAA compliance.</p>
        <p><b>Solution</b></p>
        <p>Okta had its own shortcomings based on the requirements. The team experimented with Okta service for authentication & authorization. The initial analysis helped to better understand the service and work accordingly.</p>
        <p><b>Challenge 3</b></p>
        <p>Following OWASP-MASTG guidelines where ever possible for better application security.</p>
        <p><b>Solution</b></p>
        <p>We implemented features like SSL certificate pinning, disabling custom keyboards, removing app storage after excessive unsuccessful login attempts and biometric authentication to follow those guidelines.</p>
        <p><b>Challenge 4</b></p>
        <p>Ensuring a seamless chat experience and a proper indication of network failures while chatting.</p>
        <p><b>Solution</b></p>
        <p>We used React Native's netinfo package to listen to network reachability and cutoffs, and then re-initiating chat instance.</p>
        <p><b>Challenge 5</b></p>
        <p>The client wanted to use separate app IDs, app icons, app names and other assets according to different test environments and make separate test streams.</p>
        <p><b>Solution</b></p>
        <p>We used build scheme for iOS and product flavours for android. After this, we were able to test the same app in different environments at the same time.</p>
        <p><b>Challenge 6</b></p>
        <p>Keeping the video call active even if the video window is minified or if the device is locked without using the VOIP kit.</p>
        <p><b>Solution</b></p>
        <p>We used native libraries wrapper with React Native library to keep the call active and audio flag was used in the info settings of Xocde.</p>
      </div>
      <div className='development'>
        <h1>In bird's eye view</h1>
        <p>The client wanted us to work on the front-end of an application that provides a holistic healthcare solution. The app needed to provide 24/7 virtual pediatric care whenever and wherever the child or parents needed it.</p>
        <p>From the initial stages, the client wanted a team, along with a Project Manager, to work on a PoC for the project. The PoC was conducted to test video calling and chat functionality implementation using Twilio. The PoC was successful; after it, our team started working full-time on the application.</p>
        </div>
        <div className='development'>
        <h1>Final Impression</h1>
        <p>The client got a robust healthcare application that ticked all their checkboxes. The app was intuitive and contained all the essential features needed by the client. The deployment timeline was also met.</p>
        </div>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HealthCare
