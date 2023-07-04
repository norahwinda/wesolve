import React from 'react'
import P2P from '../../../../LatestImages/ptop.webp'
import PtopReq from '../../../../LatestImages/ptop.png'
import Header from '../../../Header/Header'
import ContactUs from '../../../ContactUs/ContactUs'
import Footer from '../../../Footer/Footer'
import './Ptop.css'

function Ptop() {
  return (
    <div className='ptop'>
       <Header />
      <div className='designPciCompany'>
        <div className='designPciCompanyTop'>
          <div className='designPciCompanyTopImg'>
            <img src={P2P} alt=''/>
          </div>
          <div className='designPciCompanyTopRight'>
            <h1>P2P App For The @ Company</h1>
            <p>The @ Company has committed itself towards the creation of a more 'human' internet by enabling users to access the goodness of the internet, without sacrificing their privacy online.</p>
          </div>
        </div>
        <div className='designPciCompanyMiddle'>
          <h5>Timeline</h5>
          <p>12weeks</p>
          <h5>Industry</h5>
          <p>Social Media & Communication</p>
        </div>
        <div className='designPciCompanyBottom'>
          <h5>Project</h5>
          <p>Development</p>
          <h5>Year</h5>
          <p>2021</p>
        </div>
      </div>
      <div className='aboutPci'>
        <h1>About the Client</h1>
        <p>As a bunch of enthusiasts who like to call themselves 'internet optimists', The @ Company has committed itself towards the creation of a more 'human' internet by enabling users to access the goodness of the internet, without sacrificing their privacy online. Founded in California, The @ Company is driving a revolution on the internet with their open-source products that create a safe environment for users, developers, creators and more on the Internet by creating digital identities for them which can be used to access all services on the web, without the need of divulging personal data or information publicly.</p>
      </div>
      <div className='theProblem'>
        <h1>The Problem</h1>
        <p>The people at The @ Company were looking for App templates on the internet when they came across the templates built by us on the Flutter Market and got in touch with us straightaway. In pursuit of their vision and mission, they had come up with a massive catalog of apps that they wanted us to help them build, which would change the way people look at and use apps on the daily by giving them a security and privacy angle. They wanted us to use their privacy protocol and implement them in the numerous apps that were planned.</p>
        <p>Out of the many apps in queue, we decided on a timeline of 12 weeks to design, develop and deploy two main apps, out of which, 4 weeks were dedicated to the MVP of @tmosphere and 8 weeks to @atmosphere pro and @rrive. All the engagements were decided on a fixed price model, that was spread over a single phase.</p>
        </div>
        <div className='teamOnCall'>
        <h1>Team On-Call</h1>
        <p>The protocol libraries that would direct this project were already based in Dart and the project required experts of Flutter to give it the attention it deserves. With design and development queued from scratch for two different apps, we initiated a team of 6 Flutter experts, led by a tech lead, in the project that was spearheaded by an Engineering/Project Manager. Two design experts were also employed to build an impeccable UI/UX for the app and one QA engineer to make sure everything is cohesive and works well together.</p>
        </div>
        <div className='requirements'>
          <h1>Requirements</h1>
          <img src={PtopReq} alt=''/>
      </div>
      <div className='development'>
        <h1>Development</h1>
        <p>This project was a new concept for the team. Although the process of integrating libraries and protocols were done before, in this case, the protocol itself was unique and groundbreaking. The idea was to use the existing and constantly improving @protocol to power apps that are built for daily usage but with a new perspective on security. The client had already taken the liberty of developing an SDK that we needed to use and build upon to create the ecosystem that they envisioned</p>
        <p>Since the SDK was built in Dart and was provided as a package, the obvious choice for the app development framework was Flutter. The idea behind the @ protocol was to use a unique identifier called AtSign as the users identities on the platform to enable multiple features that can be used securely, which would require a lot of understanding and research. As the project was a single POC spanning over 4 weeks, the first week was dedicated to design the UI/UX of the app and implement it. The next two weeks were spent on conceptualizing the logic behind the app and implementing it in Flutter and the final week was dedicated to fixing issues and bugs as well as deployment of the app.</p>
        <p>The designs were conceptualized in a way that the flow would seem natural to the user. The design team worked hard to ensure that the designs stay true to the brand voice and finalized the designs with the client, which were then sent to the development team for implementation.</p>
        <p>Flutter being one of the best Frontend frameworks in the world today, handles the designs with ease and the developers made sure that the screens were pixel perfect replicas of what was designed and finalized. Within a week, the UI screens were complete and the next step was to design and implement the business logic.</p>
        <p>The very first thing to do was to understand the SDK and the protocol that was to be integrated. Then this SDK was to be enabled for authentication, which was the main feature of the app that made it stand out. Since the SDK was written in Dart, it could easily be used as a package and declared as a dependency, which would enable the app to use it for services. Along with authentication, other features like contact management and a peer-to-peer file transfer system was integrated.</p>
        <p>The SDK allowed the app to authenticate a new AtSign and also facilitated the entire flow pertaining to the authentication. The rest of the features involved simple encryption and decryption associated with the AtSign used to authenticate. The entire business logic was built around this concept and was put in to leverage the security that the SDK offered for a good user experience. The peer-to-peer file sharing system was integrated using stream execution that was supported by the SDK.</p>
        <p>QA & testing was done at the end of each developed feature. The QA engineer indulged in manual testing for the features of the app, testing them under all possible scenarios whenever ready and re-iterating tests over already tested features around every turn. After every feature test, the build was shared with the client and verified, with any bugs or discrepancies reported, fixed and tested again for stability.</p>
        </div>
        <div className='overComing'>
          <h1>Overcoming Challenges</h1>
          <p>The biggest challenge in this project was the exposure to a custom SDK that was built by the client and its integration. As compared to conventional APIs, this concept was relatively new and a good understanding of the functional knowledge of the SDK was paramount. The developers went deep into how the SDK worked with the help of the documentation that was provided with the SDK as well as assistance from the team that developed the SDK in the first place. Another challenge was to plan and deliver the app within the stipulated time but it was cut in half, thanks to the brilliant designs by the design team which were mostly reused for the other apps that were built with this project.</p>
        </div>
        <div className='birdView'>
        <h1>In bird's eye view</h1>
        <ul>
          <li> Git was used for versioning and code management.</li>
          <li>Trello was the tool of choice for task management.</li>
        </ul>
        </div>
        <div className='final'>
          <h1>Final Impression</h1>
          <p>The clients have had an amazing run with us in this project. We were able to deliver and deploy two applications within the deadlines decided with ease and the client was mighty impressed with that. They also commended our professionalism and ability to plan the project well. The applications will be live & available to download and use soon and the client has explicitly expressed their interest in working with us in the future again. We are ecstatic to have gained a long-term partner in The @ Company, which is proven by the numerous collaborations they have done with us in our events. We're lucky to have them be a part of the family.
          </p>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Ptop
