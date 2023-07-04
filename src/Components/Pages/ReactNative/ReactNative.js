import React from 'react'
import './ReactNative.css'
import Logistics from './ReactNativeImages/logistic.webp'
import Tori from './ReactNativeImages/tori.webp'
import Mortgage from './ReactNativeImages/mortgage.webp'
import Saas from './ReactNativeImages/latest1.webp'
import Conferencing from './ReactNativeImages/conference.webp'
import ContactUs from '../../ContactUs/ContactUs'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'

function ReactNative() {
  return (
    <div className='reactN'>
      <Header />
      <div className='reactNTop'>
        <h1>React Native App Development Services</h1>
        <p>We’ve been part of React Native’s growth and community since 2016. Our 16+ years of cross-platform app development experience ensures we deliver the best React Native apps for your goals.</p>
        <p>Looking for the best React Native development company? We are here to help.</p>
        <button>TALK TO OUR REACT NATIVE EXPERSTS</button>
      </div>
      <div className='aboutReactNativ'>
        <h1>About React Native</h1>
        <p>React Native is an open-source application development framework based on JavaScript, built with the reusability of code in mind. It allows the creation of iOS and Android apps with one single codebase. Applications built with React Native perform closely to native applications. The framework is also constantly evolving thanks to an active community of developers.</p>
      </div>
      <div className='reatNBenefits'>
        <h1>Benefits of React Native App Development</h1>
        <ul>
          <li>Multiple teams are not required</li>
          <li>Cross-platform support</li>
          <li>Wide-acceptance</li>
          <li>Community-driven</li>
          <li>Reusable codebase</li>
          <li>Native appearance and feel</li>
        </ul>
      </div>
      <div className='whyUsReactN'>
        <h1>Why choose Wesolve as your React Native app development company?</h1>
        <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>150+ Clients</h1>
            <p>Our team consists of core contributors to React Native and has delivered 200+ React Native app development solutions to clients worldwide. Mobile Premier League, Rituals, and Noon are some of our proudest projects.</p>
          </div>
          <div className='why'>
            <h1>Creators of NativeBase</h1>
            <p>The NativeBase library is the most popular React Native UI library built to date, with 18.9k stars on GitHub and 4,000+ followers on Twitter. We also get regular contributions to the project from React Native enthusiasts.</p>
          </div>
          <div className='why'>
            <h1>Top open-source contributors</h1>
            <p>We have contributed over 10+ open-source products in React Native. The products range from component-based UI libraries to ready-to-use templates for developers and designers.</p>
          </div>
          <div className='why'>
            <h1>Core contributors of React Native</h1>
            <p>Our React Native app developers include core contributors to the React Native code and experts with the tech. Their project contribution is now being used by dev teams worldwide.</p>
          </div>
          <div className='why'>
            <h1>Community-driven</h1>
            <p>We regularly host community-centric meetups and mini conferences to foster better collaboration in the React Native community. Our React Native meetup group is the largest in the world.</p>
          </div>
        </div>
      </div>
      <div className='whatWeOffer'>
          <h1>What React Native App Development Services Does Wesolve Provide?</h1>
          <p>We provide React Native app development services centered around your requirement, augmented by our expertise. Our React Native app development experts are skilled in the nuances of React Native and adept at delivering React Native app development projects on time without compromising on quality.</p>
        </div>
        <div className='ourServices'>
          <h1>Our services</h1>
          <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Cross-platform app development</h1>
            <p>We create React Native apps that run seamlessly on multiple platforms, including iOS and Android, by leveraging the power of React Native.</p>
          </div>
          <div className='why'>
            <h1>React Native app design</h1>
            <p>We develop visually appealing, user-friendly interfaces for React Native apps.</p>
          </div>
          <div className='why'>
            <h1>App maintenance & support</h1>
            <p>We provide maintenance and support for our react native app development services, including upgrades of React Native versions and dependencies, allowing you to keep up with the evolving needs of your business.</p>
          </div>
          <div className='why'>
            <h1>App optimization</h1>
            <p>We optimize the performance and user experience of your React Native apps to improve the overall user experience and engagement.</p>
          </div>
          <div className='why'>
            <h1>Third-party integration</h1>
            <p>We integrate React Native apps with various third-party services, such as social media, payment gateways, and analytics.</p>
          </div>
          <div className='why'>
            <h1>Quality Assurance</h1>
            <p>We ensure the React Native apps built by us are of high quality and are engineered according to industry standards.</p>
          </div>
        </div>
        </div>
        <div className='reactNCommunity'>
          <h1>Our React Native community</h1>
          <p>We have an active community of React Native enthusiasts that experiment with the latest updates and help one another grow. The community is a great place for beginners to learn and seasoned experts to better themselves.</p>
          <button>EXPLORE REACT NATIVE COMMUNITY</button>
        </div>
        <div className='reactNSuccesStoies'>
          <h1>React Native Success Stories</h1>
          <p>We are proud of the clients we partnered with and the solutions we engineered. Each project we work on is special to us, and every app we ship expands our capabilities. Check out specific details below.</p>
          <div className='sampleWork'>
            <div className='sampleWorkDiv'>
              <img src={Logistics} alt=''/>
              <h1>Logistic App For Paypoint</h1>
              <p>UK's Largest Billing Service Provider Hired Wesolve To Help Expand It's Service Avenues.</p>
            </div>
             <div className='sampleWorkDiv'>
              <img src={Tori} alt=''/>
              <h1>Real-Estate App For Tori</h1>
              <p>Making house hunting a simpler and seamles experience for clients of a real-estate giant in Carlifornia and Massachussetts</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Mortgage} alt=''/>
              <h1>Mortgage Planner For Sprive</h1>
              <p>Developing a loan optimizer and mortgage planner a leading fintech company in the UK</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Conferencing} alt=''/>
              <h1>Video Conferencing App For 100ms</h1>
              <p>Developing video conferencing SDKs to enhance the 100ms application</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Saas} alt=''/>
              <h1>Building a Robust SaaS Widget for Exceptional Customer Support</h1>
              <p>How Wesolve redefined customer engagement by developing a widget and an application suite for a Saas company</p>
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default ReactNative
