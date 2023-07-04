import React from 'react'
import './PetFood.css'
import PetF from '../../../../LatestImages/petF.webp'
import PetReq from '../../../../LatestImages/pfReq.png'
import Header from '../../../Header/Header'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'

function PetFood() {
  return (
    <div className='petFood'>
      <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={PetF} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>Web App for Australian Pet Food Giant</h1>
            <p>Improving pet food delivery services by enhancing the web app</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>Ongoing</p>
          <h5>Industry</h5>
          <p>On-demand booking</p>
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
        <p>The client who is based out of Australia has an offering in the form of a web app that is touted to be the healthiest food subscription service that makes fresh food for users’ dogs on demand. They provide customized meals which makes it a seamless experience for users to design their pets’ diets and find the right nutrition for them through wholesome freshly cooked food. They came across the idea when they saw the hassles pet parents had to go through as a result of the onset of the pandemic and realized what the market needs was a platform that could help pet parents to get these essentials with a tap on their phones.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The client had already worked with us on a couple of renowned projects before and on seeing the expertise that the Wesolve’s team displayed, they reached out to us for the revamping of the existing web application. The client’s primary concern was that he wanted us to re-build the existing app using NuxtJS to make it more responsive across all platforms as well as implement the required screens.</p>
        <p>After careful consideration, we decided that the best way to go forward was to engage with the partner using the fixed scope model before moving on to the time and material model which allowed for the flexibility that was necessary to implement the required features. The entire project was split into two phases with the first phase having six milestones and the second having one.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>After determining the requirements, we put together a team in collaboration with our client. This project required the skills of an experienced web developer and Girish Gaba was the right expert to be called for this project. After discussing and agreeing upon a development plan, we started working on the Liviit web app in April of 2020.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={PetReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>After setting together the team that could take the project forward and with the team set in place, the next task on hand was to decide on the tech stack and finalize them in order to carry on to the development phase. </p>
        <p>NuxtJS was the tech stack of choice used for the application's Frontend because it improved performance, SEO, and accessibility. It is a framework built on top of Vue JS and it uses server-side rendering to resolve all the issues related to SEO. To complement this decision, Bootstrap 5 was chosen as the Frontend library to make the web application responsive and user-friendly on browsers like Google Chrome, Safari, Firefox and on all Android and iOS devices that use this web browser. NuxtJS also has a sound layout system for re-usability because of which the coding time for the developers is reduced as the layout system is created in one go. We used Storybook to build UI components and pages along with CSS to improve the structure of the pages. We also used docker containers for AWS and ECS while finalising the deployment platforms to be AWS, ECR and ECS fargate.</p>
        <p>We have revamped the existing web application using NuxtJS, Bootstrap and CSS, having rebuilt almost 20 -25 pages as of now. The first phase of the project was split into six milestones based on the fixed scope model and here were the features that were implemented in the process:</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>As with any project of this scale, challenges were inevitable but constant research and the team’s proactiveness helped us to get past this. The main intention of the app is to improvise its performance and improve its SEO and the team had to figure out a few techniques to achieve these parameters. We used Cloudinary which is platform that can store the images of the app in the cloud which we can use to optimise it according to our needs. It provides the CDN service that helps to improvise the image performance and it auto-detects the best image format for the browser. Since the rendering time is very less here because of better compression, this eventually played a part in improvising the performance of the application. The second challenge was to avoid nesting in order to improve the SEO score because of which our team has ensured that nesting is minimal in the HTML templates by using all the necessary attributes required by the Google crawler so that it can index all the necessary information.</p>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The web app is currently live and the client is ecstatic looking at the progress that has been made. While the project is currently in progress, they think that the app has come a long way since the beginning of the engagement. New features and functionalities are constantly being experimented with and implemented to ensure that the experience that the app offers to its customers is nothing short of perfect.</p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default PetFood
