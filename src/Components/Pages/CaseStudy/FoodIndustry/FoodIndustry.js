import React from 'react'
import FoodInd from '../../../../LatestImages/foodreq.webp'
import foodReq from '../../../../LatestImages/foodReq.png'
import './FoodIndustry.css'
import Footer from '../../../Footer/Footer'
import ContactUs from '../../../ContactUs/ContactUs'
import Header from '../../../Header/Header'

function FoodIndustry() {
  return (
    <div className='foodIndustry'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={FoodInd} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Web app for a food industry behemoth</h1>
            <p>Improving the food ordering experience by enhancing the web app</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>5months</p>
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
        <p>Based out of Orlando, our client is a multi-brand restaurant operator who runs some of the most distinguishable and successful restaurants in full-service dining. They own and operate more than 1,800 restaurants and employ around 175,000 team members, making them one of the 50 largest private employers in America and the world's largest full-service restaurant company. They are now serving more than 320 million guests annually in hundreds of communities across North America and their restaurants include some of the country’s most recognized franchises.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client was on the lookout for an organization that has the skills to enhance their digital solution and they came across us on their mission to revamp and develop their app. The client was already impressed by our open-source contribution- NativeBase. The main problem here was that they needed the same code to be implemented for all their brands along with their individualistic styles on the app and they also required it to run across platforms.</p>
        <p>They were searching for organizations to implement new features and continue the development of their online food ordering website. We decided to follow the agile methodology pattern as it allowed for dynamic sprints. The entire project was divided into six sprints for eighteen weeks, and daily scrum meetings were held to facilitate the planning and to implement the required changes.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>Once the problem was defined, we put together a highly competitive team that could take the project forward. Considering the vast scope and comprehensiveness of the project, we created a team of a tech lead, eight developers and a tester who would work on developing the application.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={foodReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>Once the team and the requirements were set into place, it was time to get cracking and start work on the project. Considering the client wanted us to implement the same codebase across all platforms, we decided that the best way to forward is to use NativeBase 3.0, a UI component library which is our in-house creation to enable cross-platform development. To support this choice, we also used React and React Native Web for the application's frontend along with Next.js for SSG and SSR page support.</p>
        <p>We also created multiple APIs as per the project requirement to stage environments for the backend and this was done in three stages. Since we were using reusable code for both mobile and web platforms, we used MobX as the central store provider. Meanwhile, we structured the code using Monorepo which allowed us to use a single repository for the entire project.</p>
        <p>Once we finalized the tech stacks and the wireframes for the project, we implemented the various features and functionalities as specified by the client. One of the first features that were created was the menu listing page where all the items on the menu would be displayed for users to browse through along with a scrolling navigation menu for them to look through the various categories. We also provided a menu detail page so that users could customize their orders along with details of time, date, and the amount they would be spending on an order. An Our Picks screen was also created where recommendations and popular items would be displayed to the customer along with a cart section and a reorder screen to repeat orders. Finally, we implemented an orders settings section for users to set their pickup and delivery by type and time and a location search option to enable them to search for restaurants.</p>
        <p>We used ALM and Azure Boards to govern the applications' lifecycle management and Git for task management. We automated the testing and deployment of the apps through a stringent CI/CD process wherein the builds were merged through a central repository to speed up the process while ensuring that the product was up to the mark.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>One of the major roadblocks that we faced along the way is maintaining a good structure across platforms. We achieved this by using NativeBase considering the apps were originally built on the React ecosystem. We also created a Monorepository to manage the code base which is essentially a standard code repo for projects with a modular approach for saving reusable components. All of the reusable components and the relevant code were saved here under different modules. Another challenge that we faced along the way was to integrate code in both platforms. Looking at the complexity involved, the team updated and committed the code in a secondary codebase, following which the team lead would check the quality of the code before pushing it further.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li>CI/CD was done using Azure DevOps</li>
          <li>Tasks were handled using Azure and Git.</li>
          <li>All communication was done through MS teams, email and daily scrum meetings.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The client had reached out to us for the second phase of the project and they were thrilled looking at the work done by the team and the efficiency displayed. Being quite impressed with both the experience of the collaboration and the work delivered, they have decided to engage with us for the subsequent seven phases of the current project and additional ones, making us one of their leading tech partners. </p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default FoodIndustry
