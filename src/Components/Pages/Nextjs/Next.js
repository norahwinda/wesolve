import React from 'react'
import Healcare from './NextImages/healtcare.webp'
import Asset from './NextImages/asset.webp'
import Support from './NextImages/support.webp'
import Link from './NextImages/link.webp'
import Tori from './NextImages/tori.webp'
import Manufacturing from './NextImages/manufacturing.webp'
import './Next.css'
import Footer from '../../Footer/Footer'
import ContactUs from '../../ContactUs/ContactUs'
import Header from '../../Header/Header'

function Next() {
  return (
    <div className='nextjs'>
      <Header />
      <div className='reactNTop'>
        <h1>Next.js Development Services</h1>
        <p>We are the creators of popular React open-source products and UI libraries. Our expertise in Next.js development ensures we create web apps that meet your requirements fast.</p>
        <p>Looking to create trendy web apps? Our Next.js Web App development services will be perfect for you.</p>
        <button>TALK TO OUR NEXT.JS EXPERSTS</button>
      </div>
      <div className='aboutReactNativ'>
        <h1>About Next.js development</h1>
        <p>Next.js is a JavaScript framework for building server-rendered React applications. It provides features for building high-performance, production-ready web apps, such as automatic code splitting, server-side rendering, and static site generation.</p>
      </div>
      <div className='reatNBenefits'>
        <h1>Benefits of using Next.js for web development</h1>
        <ul>
          <li>Server-side rendering</li>
          <li>Automatic code splitting</li>
          <li>Static site generation</li>
          <li>Easy development</li>
          <li>Built-in CSS support</li>
          <li>Flexible and customizable</li>
        </ul>
      </div>
      <div className='whyUsReactN'>
        <h1>Why choose Wesolve as your Next.js web development company?</h1>
        <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Early adopters of React and Next</h1>
            <p>We adopted both React and Next.js since inception, making us one of the most skilled users of the frameworks. Vercel, made by Next.js creators, recognizes us as an expert in Next.js.</p>
          </div>
          <div className='why'>
            <h1>Open-source contributors</h1>
            <p>We regularly contribute to open-source projects and are core contributors to leading frameworks. Start React is one of our most popular highlights.</p>
          </div>
          <div className='why'>
            <h1>Over 200+ React/Next.js apps delivered</h1>
            <p>To date, we have delivered more than 200 apps that use React and Next.js for various industry leaders spanning geographies.</p>
          </div>
          <div className='why'>
            <h1>10+ years of experience in web app development service</h1>
            <p>We have a decade-plus of experience in providing web app development services. Our consultations services are also highly regarding by leading enterprises.</p>
          </div>
        </div>
      </div>
      <div className='whatWeOffer'>
          <h1>What Next.js web development services does Wesolve provide?</h1>
          <p>We provide Next.js web app development services centered around your requirement, augmented by our expertise. Our team is skilled in the nuances of Next.js and is adept at delivering projects on time without compromising on quality.</p>
        </div>
        <div className='ourServices'>
          <h1>Our services</h1>
          <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Cross-platform development</h1>
            <p>We create apps that run seamlessly on multiple platforms, including iOS and Android, by leveraging the power of Next.js.</p>
          </div>
          <div className='why'>
            <h1>Next.js app design</h1>
            <p>We develop visually appealing, user-friendly interfaces for Next.js apps.</p>
          </div>
          <div className='why'>
            <h1>App maintenance & support</h1>
            <p>We provide maintenance and support services, including upgrades of Next.js versions and dependencies, allowing you to keep up with the evolving needs of your business.</p>
          </div>
          <div className='why'>
            <h1>App optimization</h1>
            <p>We optimize the performance and user experience of your Next.js apps to improve the overall user experience and engagement.</p>
          </div>
          <div className='why'>
            <h1>Third-party integration</h1>
            <p>We integrate Next.js apps with various third-party services, such as social media, payment gateways, and analytics.</p>
          </div>
          <div className='why'>
            <h1>Quality Assurance</h1>
            <p>We ensure the Next.js apps built by us are of high quality and are engineered according to industry standards.</p>
          </div>
        </div>
        </div>
        <div className='reactNCommunity'>
          <h1>Our Next.js community</h1>
          <p>We have a healthy community of Next.js web app developers who constantly explore the nuances of Next.js. Most are experienced in contributing to open-source projects, and many use the community to do the same. It is a great place to learn and grow as developers.</p>
          <button>EXPLORE NEXT.JS COMMUNITY</button>
        </div>
        <div className='reactNSuccesStoies'>
          <h1>Next.js Success Stories</h1>
          <p>We are proud of the clients we partnered with and the solutions we engineered. Each project we work on is special to us, and every app we ship expands our capabilities. Check out specific details below.</p>
          <div className='sampleWork'>
            <div className='sampleWorkDiv'>
              <img src={Asset} alt=''/>
              <h1>Asset Management Dashboard For A Railway Giant</h1>
              <p>Making maintenance accurate and immediate with IoT & state-of-the-art mobile technology for a heavy industries giant in the Railway division.</p>
            </div>
             <div className='sampleWorkDiv'>
              <img src={Healcare} alt=''/>
              <h1>Support Group Therapy App For Marigold Health</h1>
              <p>Helping a healthcare organization promote mental health with their concept of text-based support groups for people with mental ailments.
              </p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Support} alt=''/>
              <h1>Support Group Therapy App For Marigold Health</h1>
              <p>Helping a healthcare organization promote mental health with their concept of text-based support groups for people with mental ailments.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Link} alt=''/>
              <h1>Subscription Based Delivery App For Link</h1>
              <p>Revolutionizing on-demand services with a combination of subscription based models and cutting-edge technology.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Tori} alt=''/>
              <h1>Real-Estate App for Torii</h1>
              <p>Making house hunting a simpler and seamless experience for clients of a real-estate giant in California and Massachusetts.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Manufacturing} alt=''/>
              <h1>Asset Management Dashboard For A Manufacturing Giant</h1>
              <p>Developing an Asset Management Dashboard for a Fortune 500 company</p>
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Next
