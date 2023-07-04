import React from 'react'
import './Gaming.css'
import Header from '../../../Header/Header'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'
import GamingImg from '../../../../LatestImages/gamImg.webp'
import GamingReg from '../../../../LatestImages/gamReq.png'

function Gaming() {
  return (
    <div className='gaming'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={GamingImg} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Digital gaming solutions for Soccer Manager</h1>
            <p>Improve the digital football experience through interactive digital solutions</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>Ongoing</p>
          <h5>Industry</h5>
          <p>Gaming</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Gaming</p>
          <h5>Year</h5>
          <p>2023</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>Based out of Malta, Soccer Manager is the child company of Autonomous Worlds Ltd. which is a leading engineering company with its main focus on blockchain, blockchain gaming, consultancy and other bespoke projects. Our client offers a multiplayer, community-driven football game where users can choose from countless options. The user can be a manager, agent, club owner, share trader, speculator, or any combination of these. It is an open-ended gaming world for thousands of users which provides an experience of a thriving football economy that uses blockchain technology to give you true realism, asset ownership, and total control.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client came across us on their search for people who could handle the development and design of their web and mobile applications. Their requirements were to improve the user experience and the visuals of the existing web app and revamp it while also designing the mobile app and making it tablet responsive.</p>
        <p>Based on the requirements of the project which needed flexibility to incorporate the needs of the client, we mutually decided to work on the time and material model. The engagement was scheduled to start in June of 2021 and is still ongoing.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After assessing the work which was previously done on the application and charting out a game plan to take the project, the next step on hand was to put together a team which could carry out the design and development for the applications. We roped in three designers for the initial stage of the project which was to revamp the existing application and later on we also put together a team consisting of a testing engineer, two developers to carry out the development requirements. They were spearheaded by a tech load who would ensure that everything was going as planned.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={GamingReg} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>The client’s offering- Soccer Manager Elite is a massive multiplayer online soccer management game with one huge persistent evergreen game world. The initial task on hand was to improve the user experience of the web application which was handled by the in-house design team at Wesolve while also building a mobile application which was the development team’s job.</p>
        <p>We began the engagement with the design phase of the website followed by improving mobile and tablet responsiveness of their application. There was brainstorming and discussion on what the client’s expectations were and then wireframes were presented for the screens based on which the design team would work on improving the user experience. Once that was done, the visuals were built using Figma by our team.</p>
        <p>Once the designs were completed, the second phase began and the development team took over the development of the website. The website was built using Flutter Web as the main tech stack mainly because of its ability to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. The client also provided access to their personal GitHub repository which would allow our tech lead to push stable codes.</p>
        <p>A lot of brainstorming was done internally to understand the functionality of features. Over the course of the project, we worked on design systems for both dark and light themes After researching the nature of the application, our team also implemented the right color palettes, icons, various graphical elements and components to improve the user’s experience. The team also worked on both the read and write modes for the website while integrating various RPCs and making sure they were working fine when pushed to the blockchain. We also worked on making the UI of apps responsive while ensuring that they work exactly the same on all devices. A drag and drop feature to ensure that the on-screen users were movable was also implemented and we are currently working on implementing a chat option for the app.</p>
        <p>One of the strategies followed by the team to ensure that the development phase was going as planned is to have daily standups internally along with weekly interactions with the client where they would provide us a task list which could be followed. Another important aspect which helped us to ensure that the development phase was optimal was to have peer-to-peer reviews along with extensive brainstorming sessions when a new task came up. The task management tool of choice was Jira.</p>
        <p>Testing was critical to ensure that bugs were being kept a check on and that the features which were being implemented were functioning optimally. We also roped in a QA analyst who would perform stringent testing to ensure that the application was up to the mark. We also implemented user acceptance testing as the app was in its Beta phase and implemented changes based on the reviews we received to improve the user experience of the application.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>One of the primary challenges that we faced along the way was working with Flutter Web which was relatively new for the in-house team at Wesolve but they managed to find workable solutions through extensive research about the tech stacks. The next curveball which was thrown at us was working with web3 and blockchain related technologies which are quite new in the tech world which was also handled through research about the topic and experiments which helped us to find the right way ahead. The client also provided us with their personal GitHub repository which played a pivotal role in ensuring that the code which was being pushed was stable.</p>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The progress on the project is currently ongoing with features being implemented by our team, rapidly tested and pushed to the client who would get back to us with his feedback. With the app currently in its Beta stage, our partner is extremely happy with how the application looks at this point and the dedication that the Wesolve team has shown in researching and implementing technologies that are relatively new to them. With everything on track, we are all gearing up for a very successful deployment of the Soccer Manager application in the near future.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Gaming
