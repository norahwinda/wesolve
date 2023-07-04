import React from 'react'
import './Liviti.css'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'
import LivitImg from '../../../../LatestImages/liviti.webp'
import LivitiReq from '../../../../LatestImages/livitiReq.png'
import Header from '../../../Header/Header'

function Liviti() {
  return (
    <div className='liviti'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={LivitImg} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Lifestyle Web App for Liviit</h1>
            <p>Streamlining the lifestyle, planning, and communication experience through a digital solution</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>Ongoing</p>
          <h5>Industry</h5>
          <p>Social Media & Communication</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Design and development</p>
          <h5>Year</h5>
          <p>2023</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>Matt Robertson, the founder of Liviit, managed the social media and community building app on a simple web platform for eight years. Liviit was designed and developed to provide a safe and secure platform for people from all walks of life to connect and share their daily lives. It was then time for some innovation to reach a larger client base while maintaining the initial vision as the core. Matt required the new Liviit web app to enable its users to share calendars, lists, files, music, vaults, etc., and support private hubs and community networks.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>With the changing definitions of social media presence and features provided on those platforms, our client wanted to introduce users to a web app that incorporated the features of all leading social media websites and allowed using them in a more private manner. There had to be a team efficient enough to turn this vision into reality.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After determining the requirements, we put together a team in collaboration with our client. This project required the skills of an experienced web developer and Girish Gaba was the right expert to be called for this project. After discussing and agreeing upon a development plan, we started working on the Liviit web app in April of 2020.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={LivitiReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>Our choice of tech stacks for creating the frontend included React, Redux, SASS, Bootstrap, and Styled-Components. React has time and again proved its importance and benefits in designing UI for social media applications. Given its eminence for faster development and scalability, we selected React as our framework for designing the frontend. Next came the decision of selecting the state management library, which was compatible with React. This choice was easier as Redux, by far, stands as the most popular state management library to help create a unidirectional data flow and allow “time-travel” debugging. React’s flexibility to work with any UI layer made it the appropriate choice for our Liviit social media web app.</p>
        <p>SASS, Bootstrap, and Styled-Components were selected as the styling frameworks. This private community-building website required us to take a step ahead of simple CSS. We opted for SASS to make our web app more maintainable. Combined with Bootstrap, it opened new avenues for fulfilling the requirements of allowing users to manage their daily lives using features such as custom dashboards.</p>
        <p>As for the backend, Laravel and MySql were chosen to provide a seamless development, database management, and deployment experience. All these technologies have time and again proved their efficiency in the social media domain with many leading platforms designed and developed using them.</p>
        <p>The pre-existing Liviit website was developed keeping in mind the necessities of streamlining their daily activities and providing them with a hassle-free tool to make the tasks easier. But after operating with the same features for a while, there was a requirement to provide users with more features. Some of these new features included providing 'Private Hubs' and 'Community Networks', chats, and provisions to manage and share calendars, lists, files, vaults, and music. Apart from these primary requirements, the Liviit web app would also have many other features and futuristic ideas.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>The challenges faced along the course of this project were mainly related to the task management and communication aspects. There was no standard tool or mechanism to assign, monitor, and manage tasks or communicate with the team. After discussions between the team and the client, these challenges were overcome by using Excel Sheets, Trello Board, and Scrum calls to track activities and monitor the progress of assigned tasks.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>Trello Board is being used for task management.</li>
          <li>Subscription-based web application to provide users with the ability to access information in real-time.</li>
          <li>This Web app reduces the dependency on the OS of a device.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>This project is currently in progress with the development going as per the schedule. Developing the Liviit web app is proving to be a perfect and seamless collaboration with our client. We are working on making it the best social media and daily planning platform for people who want to connect while keeping it a private business.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Liviti
