import React from 'react'
import './Invest.css'
import Inv from '../../../../LatestImages/invest.webp'
import InvReq from '../../../../LatestImages/InvestRequirements.png'
import Footer from '../../../Footer/Footer'
import ContactUs from '../../../ContactUs/ContactUs'
import Header from '../../../Header/Header'

function Invest() {
  return (
    <div className='invest'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={Inv} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Goal-Based Investment Platform For Elever</h1>
            <p>Enhancing investments and portfolio management through an automated platform</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>Ongoing</p>
          <h5>Industry</h5>
          <p>Finance, Banking and Insurance</p>
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
        <p>Based out of India, Elever was founded by visionaries who wanted to explore the nuances of the investment industry. Their offering- the Elever application, is a one-of-a-kind, fully personalised, goal-based investing platform where users can have measurable investment targets and smartly achieve their goals through strategic planning. Using this application, users can take a step forward to their financial goals in a far more convenient way while also keeping themselves aware of changing investment trends. </p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client was on the lookout for tech partners who could develop their app and update certain components as necessary to align with the changing trends as well as implement a CMS for the platform. The Elever application allows users to set financial goals and leverage the app’s functionalities to achieve their investments.</p>
        <p>After an extensive search for the right people who could take the project forward, the partner found us via LinkedIn and decided to collaborate with us after examining our portfolio. The project is set across an incremental and iterative scrum model which allows us to implement changes wherein we consult with the client at regular two week intervals which allows for changes to be implemented along with the necessary iterations.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>Once the requirements had been set in place, we discussed with the client and put together a team that could take the project forward. The project needed three developers spearheaded by a tech lead. The tech lead role becomes very important here since they are responsible for setting the right architecture & ensuring perfect collaboration between the client & Wesolve development team. </p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={InvReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>After putting the team together and explaining the requirements to them, the next step was to strategise a game plan and finalise the technologies to take the project forward. As the client required changes to be implemented iteratively, we decided the best option would be to follow a Model–view–ViewModel (MVVM) approach which allowed us to cleanly separate the user interface from the logic of the application to make its development easier. This approach massively reduces the risk of technological obsolescence while also streamlining the maintenance for the app. </p>
        <p>After extensive discussions with the partner, the decision of finalising Flutter as tech stack of choice was made as it is currently one of the best cross-platform mobile app development SDKs available in the market which can generate an IOS app build as well as Android app build from a single source code. Meanwhile, Vue.js was chosen as the desired framework for the Frontend to support this choice for its versatility which provides for it to be used in multiple use cases while Node.js was chosen for the Backend. Firebase, a platform developed by Google, was used to scan real-time data, push notifications and implement authorisations along with Rest API to pull the required data from the codebase.</p>
        <p>The primary feature which was implemented was a content management system for the investment platform which streamlined the way that the app stores user’s data. Once this was done a functionality was implemented wherein user users can sign up on the app and create their financial goals to measure investments. After this another functionality was implemented wherein the users can choose their own goals and take advantage of the app’s benefits to win attractive offers along with an additional feature where the app would automatically generate the investment portfolio. As it is a FinTech app, security was of prime concern because of which the team devised ways to maintain standard security structure while also covering all edge cases to ensure the app does not break in production.</p>
        <p>It was pertinent that every aspect of the app was functioning as it was programmed to be and we automated testing using Flutter Driver to test UI elements while using Gitlab for code management. We also used Kubernetes, an open-source system for automating deployment, scaling, and management of containerized applications, to maintain server instances along with Code Magic for deployment.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>One of the primary challenges that arose during the course of the project was in managing timelines and understanding the client’s culture and the way they work. The team handled this by aligning their work schedules and their internal culture with the client’s to ensure that the project was a success. As this was a project for the investment sector, implementing security structures and protocols was critical to ensure that the app was secure. While covering all edge cases was a challenge, the team researched and found a way to integrate KYC flow while also handling the security constraints involved in this procedure.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>The project was managed using the Gitlab Project Board.</li>
          <li>Google Cloud Platform was used for server deployment.</li>
          <li>The tool used to automate the testing process was Gitlab.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The project is currently in progress with the development and implementation of new features going as planned. The app has currently reached beta stage and our partner’s satisfaction with the progress is exemplified through the two 5 star reviews that we received on Clutch for the team’s dedication towards the project and their effort to meet the stringent deadlines. We are delighted to have collaborated with Elever and witnessing the current progress, we foresee a long term visibility of the project which we hope to execute in collaboration with our partner.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Invest
