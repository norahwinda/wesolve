import React from 'react'
import FoodInd from '../../../../LatestImages/foodreq.webp'
import foodReq from '../../../../LatestImages/foodReq.png'
import Footer from '../../../Footer/Footer'
import ContactUs from '../../../ContactUs/ContactUs'
import Header from '../../../Header/Header'
import './MobileFood.css'

function MobileFood() {
  return (
    <div className='mobileFood'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={FoodInd} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Mobile app for a food industry behemoth</h1>
            <p>Facilitating easy food ordering by digitising the experience</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>4months</p>
          <h5>Industry</h5>
          <p>Food and Beverages</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Development</p>
          <h5>Year</h5>
          <p>2022</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>The partner owns a chain of restaurants that features some of the most recognizable and successful brands for full-service dining in the USA. They own and operate more than 1,800 restaurants and are proud to employ nearly 160,000 team members, making them one of the 50 largest private employers in the States. This is the second engagement with the client for the third phase of their project where the mission was to create a digital mobile solution using which they can create memorable experiences for their guests. </p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client, who had already collaborated with us for the second phase of their project, which comprised the web development for their app, decided to re-engage us to build the mobile version on seeing our developers' expertise. The goal of the third phase of this project was to develop a guest-facing mobile app using which the client’s target audience could place their food delivery orders. </p>
        <p>After discussing the project's requirements and the scope that it would entail, we mutually decided that the best way to move forward was an agile methodology to ensure that the development phase was flexible.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After going through the details of what the client wanted and assessing the end goal of the engagement, we put together a team that could handle the development of the mobile application. The team was to comprise of tech lead, two senior developers, five Junior developers and a QA analyst ft who would see that the result was up to the mark.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={foodReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>After assessing the clients' requirements and defining the functionalities to be implemented, we put together the team to take the project forward. The next task on hand was to get started with developing the mobile application. We had daily sprint calls with the client to understand their requirements and assess how to implement them for a smooth user experience. Before each sprint, there was a planning call along with the developers where the client would provide the entire walkthrough of the tasks planned.</p>
        <p>We also held daily scrum calls with the client,  where we discussed three main queries regarding what was done, what remains to be done and discussed solutions to impediments which were in the way, if any, as well as the status of the above-mentioned queries were discussed with the client. We also had sprint review calls with the client each evening, where they discussed the sprint progress in detail, in case of any blockers. As a part of the sprint review, we shared an executive summary with the client on a monthly basis and reviewed the burndown chart in order to understand the team velocity.</p>
        <p>Since the client wanted us to develop the Frontend of the mobile application using the same codebase for the nine apps they already had, we decided that the best way to take this forward is to use NativeBase components. The third version of NativeBase had reusable UI components built on top of React Native, which supported the client’s decision to implement the same codebase. The client handled the design phase and they provided us with the Figma designs for the screens and tickets were generated using the Azure board. Since the project required us to communicate extensively with the client to understand their requirements, we decided to use MS teams as the communication platform for the project.</p>
        <p>After the successful completion of each sprint, we also conducted hour long sprint retrospective sessions, along with the client and in the call, we discussed what went well (to keep doing these things), what could be improved (went OK, but could be better), and what to avoid (to make the necessary changes). We considered this feedback and started implementing them for the next sprints.</p>
        <p>It was pertinent to see that the development phase was progressing without any glitches that would hamper the project's quality. We employed a QA analyst who conducted extensive tests for every feature using BugSee, a bug tracking tool that could detect any crashes in live apps. Since the platform was built on top of React Native and NativeBase, the QA analyst also conducted checks for iOS and Android platforms by setting priorities for end-to-end testing and specifying the test cases using ALM. We also used MobX as the state management tool of choice to decouple the code and manage the application's state outside of the UI framework</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>Challenges are a part of any project and overcoming them through research and development is essential for the success of any venture. After completing each sprint, we conducted a thorough retrospection along with the client to discuss what went well, what did not, and what could be improved. One of the major challenges that we faced along the way is recreating the application's experience as per the web app. We handled this by using NativeBase, which provided for the reusability of the components. We also had frequent discussions with the web team to understand the code flow and structure they were following and implemented the same while conducting developer lever testing in tandem. We further stabilized the flow for both mobile and web platforms by adding platform-specific codes as and when required.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>NativeBase was used to design the UI across multiple platforms.</li>
          <li>We used the Azure board to ensure smooth development.</li>
          <li>Figma was the choice of tool for designing the wireframes.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The work on the project is currently in progress, with three completed sprints and the fourth one soon reaching its end. The client is thrilled looking at the job done and the progress of the day-to-day deliverables. We have been commended on the efforts put in by the development team and the overall experience of the engagement because of which they have planned future projects.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default MobileFood
