import React from 'react'
import Music from '../../../../LatestImages/music.webp'
import Musicapp from '../../../../LatestImages/musicApp.png'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'
import Header from '../../../Header/Header'
import './MusicApp.css'

function MusicApp() {
  return (
    <div className='musicApp'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={Music} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Music App For An Indigenous Brand</h1>
            <p>Enabling people to achieve their music goals through a digital solution</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>Ongoing</p>
          <h5>Industry</h5>
          <p>Entertainment</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Design and development</p>
          <h5>Year</h5>
          <p>2022</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>When the man behind the success of the company returned to India after making a mark in the US, Asia and Europe as a concert pianist, he wanted his musical accomplishments and profundity of western classical genre to resonate in his hometown too. After working closely and performing with acclaimed musicians in the world, he had launched the SOTA Resonance 2018 Music Festival in Hyderabad, the first of many concerts and musical events that he takes pride in organising, before the official launch of his academy. Making music at a high level is a dream for many and it is also very simple, given the right resources and he wanted to make a creative impact by the provision of an application which could propagate people to achieve their musical goals.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>After an extended search for React Native developers, who could bring the application idea to life, the client reached out to us this year after reading about our quality work in the field online. The end goal was to develop an iOS application that helps you to finish tasks by setting accountability partners where teachers, students and parents of students can monitor the learning progress of classes and assignments. Later on, the project was extended to involve a web application as well.</p>
        <p>After thorough discussions, we entered into the partnership which was decided to be based on the fixed cost model as per the client’s requirements. The client who had significant experience in the music industry provided us with the required feedback, customization options  and feature enhancements that were required to translate the idea into a fully functional application.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>We consulted with our client partner and after thorough discussions, we formed an expert team spearheaded by a tech lead and a QA Developer. The team consisted of three React Native Developers who would work on every aspect of the application while the client provided the detailing required for the UI/UX aspect. </p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={Musicapp} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>After the official introduction, the team got the ball rolling and got started with the development of the application. The entire project was split into eight milestones as the client required both a web application as well as its mobile (iOS) counterpart to support it with the end goal of ensuring learning efficiency for students who are passionate about music.</p>
        <p>The next step was to implement the recording screen UI, audio recording integration, home screen UI Task statuses, sentry setup, home screen integration for mobile application along with the web dashboard. Lastly, we designed the whole screen and the homepage which enabled the user to start taking lessons and recording them for teachers to review online and save as required so they could monitor the performance of the students depending upon their consistency and progress which was tracked on the app. A feature was also created where students can save and share recordings of their videos to teachers anytime so that their progress could be fast-tracked.</p>
        <p>At the end of each sprint, extensive QA testing was done manually to ensure the quality was up to the mark and to fix bugs before proceeding to the next step where it would be pushed to the master branch. Throughout the run of the project, we adopted a process of User Acceptance Testing where the client was kept in loop at the end of each sprint. Alongside QA testing, the client would also put the application under rigorous testing and would revert back with any bugs they would encounter which would be fixed by the GeekyAnts team before the next delivery.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>A project of such nature comes with its own set of challenges but nothing that couldn't be solved through research, constant development and experimenting with various tech stacks. One of the roadblocks we faced was during the last stage of the development when the client wanted the app to have a faster refresh rate because of which we needed to switch to Node which led to unforeseen expenses. We spoke to a client and after  extensive discussions, we mutually came to the decision that if the user base is very high then, it would be beneficial to change it from firebase to Node. As the client did not foresee much footfall for the app in the initial months, he decided to delay the plans to a later point where the app has gained traction in the market. We also had problems with implementing account access delays as each new login required the client to provide an OTP but we streamlined the entire process to ensure the development phase is not delayed.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li> React and React Native were chosen for the Frontend of the music learning application.</li>
          <li>Firebase was the tech stack of choice for the deployment of the app.</li>
          <li>We followed the user acceptance method to test the app for its quality.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The work on the applications has been almost completed apart from the UI/UX implementation as the client is testing the app. Once this has been completed, we expect them to come back with changes and feature requirements based on the results of the QA tests which we will implement accordingly. The client has had an amazing run with us and has lauded us for our professionalism and dedication towards the set tasks. He especially commended the GeekyAnts community for its ability to perceive problems and the solutions that were experimented. Our commitment and zeal towards the project impressed our partner so much that the client has assured us that he will be coming along with some other assignments as well and we’re happy to have a chance to re-engage with them in the future.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default MusicApp
