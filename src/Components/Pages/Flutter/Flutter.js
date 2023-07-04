import React from 'react'
import Footer from '../../Footer/Footer'
import ContactUs from '../../ContactUs/ContactUs'
import Header from '../../Header/Header'
import Railway from './FlutterImages/railway.webp'
import Support from './FlutterImages/support.webp'
import Link from './FlutterImages/link.webp'
import Dating from './FlutterImages/dating.webp'
import Twirl from './FlutterImages/twirl.webp'
import Carbon from './FlutterImages/carbon.webp'
import './Flutter.css'

function Flutter() {
  return (
    <div className='flutterApp'>
      <Header />
      <div className='reactNTop'>
        <h1>Flutter App Development Services</h1>
        <p>We have been Google suppliers since 2017 and are authors of Flutter’s official documentation. Our Flutter app development services are industry agnostic and the team is skilled in using the framework to build applications for any domain.</p>
        <p>Partner with the expert Flutter app developers who are core contributors to the Flutter framework and documentation.</p>
        <button>TALK TO OUR FLUTTER EXPERSTS</button>
      </div>
      <div className='aboutReactNativ'>
        <h1>Why we recommend Flutter for app development</h1>
        <p>Flutter makes it possible to create cross-platform applications that behave naturally with a single codebase. Its UI toolkit, built with Dart, Material Design, and Cupertino widgets, eliminates the need to create a JavaScript bridge to bring responsiveness.</p>
      </div>
      <div className='reatNBenefits'>
        <h1>Benefits of Flutter app development</h1>
        <ul>
          <li>Good performance</li>
          <li>Widget-based technology</li>
          <li>Rich libraries</li>
          <li>Single codebase</li>
          <li>Easy integration</li>
          <li>Easy maintenance</li>
        </ul>
      </div>
      <div className='whyUsReactN'>
        <h1>Why choose Wesolve as your Flutter development company?</h1>
        <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Early adopters of Flutter</h1>
            <p>Wesolve adopted Flutter early after its launch. By 2017, we wrote a part of the Flutter documentation, and in 2018, launched StartFlutter (OSS) and FlutterMarket.</p>
          </div>
          <div className='why'>
            <h1>Google Suppliers since 2017</h1>
            <p>We have been suppliers of services to Google since 2017. This expands our knowledge of the framework.</p>
          </div>
          <div className='why'>
            <h1>Community contributors</h1>
            <p>Our flutter app development experts include core contributors to the Flutter project. We also regularly contribute to various open-source projects. Our first Flutter meetup was in 2018.</p>
          </div>
          <div className='why'>
            <h1>Over 100+ Flutter apps delivered</h1>
            <p>Our Flutter app developers have created over 100 Flutter applications for various industries — retail, finance, e-commerce, etc.</p>
          </div>
        </div>
      </div>
      <div className='whatWeOffer'>
          <h1>What Flutter app development services does Wesolve provide?</h1>
          <p>We provide Flutter app development services centered around your requirement, augmented by our expertise. Our team is skilled in the nuances of Flutter and are adept at delivering projects on time, without compromising on quality.</p>
        </div>
        <div className='ourServices'>
          <h1>Our services</h1>
          <div className='whyUsReactNBottom'>
          <div className='why'>
            <h1>Cross-platform development</h1>
            <p>We develop Flutter apps that run seamlessly on multiple platforms, including iOS and Android, by leveraging the power of Flutter.</p>
          </div>
          <div className='why'>
            <h1>Flutter app design</h1>
            <p>We develop visually appealing, user-friendly interfaces for Flutter apps.</p>
          </div>
          <div className='why'>
            <h1>App maintenance & support</h1>
            <p>We provide maintenance for our Flutter app development services, including upgrades of Flutter versions & dependencies, allowing you to keep up with the evolving needs of your business.</p>
          </div>
          <div className='why'>
            <h1>App optimization</h1>
            <p>We optimize the performance and user experience of your Flutter apps to improve the overall user experience and engagement.</p>
          </div>
          <div className='why'>
            <h1>Third-party integration</h1>
            <p>We integrate Flutter apps with various third-party services, such as social media, payment gateways, and analytics.</p>
          </div>
          <div className='why'>
            <h1>Quality Assurance</h1>
            <p>We ensure the Flutter apps built by us are of high quality and are engineered according to industry standards.</p>
          </div>
        </div>
        </div>
        <div className='reactNCommunity'>
          <h1>Our Flutter community</h1>
          <p>We have a Flutter app development community that loves to tinker with the language and support one another’s growth. Members contribute to various open-source projects, and some are core contributors to Flutter. We also regularly hold meetups and webinars to foster interaction between Flutter enthusiasts.</p>
          <p>The community is the perfect starting point for new Flutter enthusiasts to learn and for seasoned professionals to experiment with the tech.</p>
          <button>EXPLORE FLUTTER COMMUNITY</button>
        </div>
        <div className='reactNSuccesStoies'>
          <h1>Flutter Success Stories</h1>
          <p>We are proud of the clients we partnered with and the solutions we engineered. Each project we work on is special to us, and every app we ship expands our capabilities. Check out specific details below.</p>
          <div className='sampleWork'>
            <div className='sampleWorkDiv'>
              <img src={Railway} alt=''/>
              <h1>Asset Management Dashboard For A Railway Giant</h1>
              <p>Making maintenance accurate and immediate with IoT & state-of-the-art mobile technology for a heavy industries giant in the Railway division.</p>
            </div>
             <div className='sampleWorkDiv'>
              <img src={Support} alt=''/>
              <h1>Support Group Therapy App For Marigold Health</h1>
              <p>Helping a healthcare organization promote mental health with their concept of text-based support groups for people with mental ailments.
              </p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Link} alt=''/>
              <h1>Subscription Based Delivery App For Link</h1>
              <p>Revolutionizing on-demand services with a combination of subscription based models and cutting-edge technology.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Dating} alt=''/>
              <h1>Dating App For A Social Media Giant</h1>
              <p>Extending the experience of the biggest dating app in the region to a mobile app using state-of-the-art technology and expanding their user base multifold.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Twirl} alt=''/>
              <h1>Video Dating App For Twirl</h1>
              <p>Making finding love, friends, and maintaining self well-being come together in a video-based Social Interaction App.</p>
            </div>
            <div className='sampleWorkDiv'>
              <img src={Carbon} alt=''/>
              <h1>Carbon Footprint Tracker App For Greenr</h1>
              <p>Assisting environmentalists to raise awareness and give the power of preserving the planet to the people through a digital platform.</p>
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Flutter
