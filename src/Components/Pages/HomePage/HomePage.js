import React from 'react'
import './HomePage.css'
import Header from '../../Header/Header'
import HeroSection from '../../HeroSection/HeroSection'
import CardComponent from '../../CardComponents/CardComponent'
import Partners from '../../Partners/Partners'
import Blogs from '../../Blogs/Blogs'
import WhyUs from '../../WhyUs/WhyUs'
import ContactUs from '../../ContactUs/ContactUs'
import Footer from '../../Footer/Footer'
import Technology from '../../Technology/Technology'
function HomePage() {
  return (
    <div className='homePage'>
         {//<SideBar />
         }
          <div>
          <Header />
          <HeroSection id="heroSection" />
          <CardComponent />
          {
            //<More />
            }
          <Partners />
          <Blogs id = "blogs" />
          <Technology id = "technology" />
          <WhyUs />
          <ContactUs />
          <Footer />
        </div>
    </div>
  )
}

export default HomePage
