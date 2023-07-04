import React from 'react'
import header2 from '../../../Images/header2.svg'
import { Select, MenuItem } from "@material-ui/core"
import {CiSearch} from 'react-icons/ci'
import './CaseStudy.css'
import Latest1 from '../../../LatestImages/latest1.webp'
import Latest2 from '../../../LatestImages/latest2.webp'
import Latest3 from '../../../LatestImages/latest3.webp'
import Latest4 from '../../../LatestImages/latest4.webp'
import Latest5 from '../../../LatestImages/latest5.webp'
import Latest6 from '../../../LatestImages/latest6.webp'
import Latest7 from '../../../LatestImages/latest7.webp'
import Latest8 from '../../../LatestImages/latest8.webp'
import Latest9 from '../../../LatestImages/latest9.webp'
import Latest10 from '../../../LatestImages/latest10.webp'
import Latest11 from '../../../LatestImages/latest11.webp'
import Featured1 from '../../../FeaturedImages/featured1.webp'
import Featured2 from '../../../FeaturedImages/featured2.webp'
import Featured3 from '../../../FeaturedImages/featured3.webp'
import Featured4 from '../../../FeaturedImages/featured4.webp'
import Featured5 from '../../../FeaturedImages/featured5.webp'
import ContactUs from '../../ContactUs/ContactUs'
import Footer from '../../Footer/Footer'
import Latest from './Latest'
import Featured from './Featured'
import Web from './Web'
import Web1 from '../../../WebImages/web1.webp'
import Web2 from '../../../WebImages/web2.webp'
import Web3 from '../../../WebImages/web3.webp'
import Web5 from '../../../WebImages/web5.webp'
import Web6 from '../../../WebImages/web6.webp'
import Web7 from '../../../WebImages/web7.webp'
import Web8 from '../../../WebImages/web8.webp'
import Web11 from '../../../WebImages/web11.webp'
import Web12 from '../../../WebImages/web12.webp'
import Mobile from './Mobile'
import Mobile1 from '../../../MobileImages/mobile1.webp'
import Mobile2 from '../../../MobileImages/mobile2.webp'
import Mobile3 from '../../../MobileImages/mobile3.webp'
import Mobile6 from '../../../MobileImages/mobile6.webp'
import Mobile8 from '../../../MobileImages/mobile8.webp'
import Mobile9 from '../../../MobileImages/mobile9.webp'
import Design from './Design'
import Design1 from '../../../DesignImages/design1.webp'
import Design2 from '../../../DesignImages/design2.webp'
import Design6 from '../../../DesignImages/design6.webp'
import Design7 from '../../../DesignImages/design7.webp'
import Design8 from '../../../DesignImages/design8.webp'
import Design9 from '../../../DesignImages/design9.webp'
import Ecommerse from './Ecommerse'
import Ecommerse1 from '../../../EcomerceImages/ecomerce.webp'
import HC from '../../../HealthcareImages/healthcare2.webp'
import Finance from './Finance'

function CaseStudy() {
  
  const options = [
    {value:'Web', label:'Web'},
    {value:'Mobile', label:'Mobile'},
    {value:'Design', label:'Design'},
    {value:'Back-end', label:'Back-end'},
    {value:'Cyber security', label:'Cyber security'}
  ]

  const industry = [
    {value:'eCommerse', label:'eCommerse'},
    {value:'Finance, Banking and Insurance', label:'Finance, Banking and Insurance'},
    {value:'Manufacturing', label:'Manufacturing'},
    {value:'Healthcare App development solutions', label:'Healthcare App development solutions'},
    {value:'Entertainment', label:'Entertainment'},
    {value:'Education', label:'Education'},
    {value:'Travel and hospitality', label:'Travel and hospitality'},
    {value:'Social Media and communication', label:'Social Media and communication'},
    {value:'Food and Beverages', label:'Food and Beverages'},
    {value:'Marketing', label:'Marketing'},
    {value:'Sports', label:'Sports'},
    {value:'Fintech App Development Services', label:'Fintech App Development Services'}
  ]

  const [btnBg, setBtnBg] = React.useState(true)
  const [selectedValue, setSelectedValue] = React.useState("")

  const handleChange = (event) =>{
    setSelectedValue(event.target.value)
  }

  const handleBtn1Click = () =>{
    setBtnBg(true)
    setSelectedValue("")
  }

  const handleBtn2Click = () =>{
    setBtnBg(false)
    setSelectedValue("")
  }

  const style = {
    control: base => ({
      ...base,
      border: 0,
      // This line disable the blue border
    })
  };
  return (
    <>
    <div className='caseStudy'>
      <div className='csTop'>
        <div className='csTopLeft'>
        <h1>Case Studies</h1>
        <p>Dive deep into our processes and how we helped our clients achieve their goals and dreams through the work that we do. Our case studies are a detailed walkthrough of how we solve problems and create transforming digital solutions on the daily.</p>
        </div>
        <img src={header2} alt=""/>
      </div>
      <div className='csMid'>
      <div className='csMiddle'>
        <div className='csMiddleBtns'>
          <button className='btn1' onClick={handleBtn1Click}
           id={btnBg === true ? "btn1":"latest"}>Latest</button>
          <button className='btn2' onClick={handleBtn2Click}
          id={btnBg === false ? "btn2":""}>Featured</button>
        </div>
        <Select onChange={handleChange} defaultValue="" className="services" value={selectedValue}>
        <MenuItem value="none" disabled>Application Type</MenuItem>
          {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </Select>
        <Select onChange={handleChange} placeholder="Industry" className="industry" options={industry} styles={style}>
        <MenuItem value="none" disabled>Industry</MenuItem>
          {industry.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </Select>
          <div className='txt'>
          <input type='text' placeholder='Search case studies...' />
          <CiSearch className='search'/>
          </div>
      </div>
      </div>
      <div className='middleOut'>
        {
         selectedValue === "" ? (btnBg === true ?
      <div className='middlelatest'>
        <Latest nav="/saasWidget" image={Latest1} heading="Building a rubust Saas Widget For Exceptional Customer Support" paragraph="How Wesolve redefine customer engagement by developing a widget and an application suite for a Saas company" use="Travel & hospitality" />
        <Latest nav="/healthcare" image={Latest2} heading="Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcaret" paragraph="Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application" use="Healthcare App Development Solutions"/>
        <Latest nav="/custiv" image={Latest3} heading="Web app for a Custiv" paragraph="Improving the industrial sector by enhancing the supplier side of the app" use="Manufacturing     Figma"/>
        <Latest nav="/designPci" image={Latest4} heading="Designing PCI Inspection Mobile App for Network Security Giant" paragraph="Streamlining the user experience for effective POS data compliance" use="Design"/>
        <Latest nav="/liviti" image={Latest5} heading="Lifestyle Web App for Liviit" paragraph="Streamlining the lifestyle, planning, and communication experience through a digital solution" use="Social Media and communication"/>
        <Latest nav="/gaming" image={Latest6} heading="Digital gaming solutions for Soccer Manager" paragraph="Improve the digital football experience through interactive digital solutions" use="Gaming     Flutter"/>
        <Latest nav="/petFood" image={Latest7} heading="Web App for Australian Pet Food Giant" paragraph="Improving pet food delivery services by enhancing the web app" use="On-demand booking"/>
        <Latest nav="/foodIndustry" image={Latest8} heading="Web app for a food industry behemoth" paragraph="Improving the food ordering experience by enhancing the web app" use="Food and Beverages     NativeBase"/>
        <Latest nav="/mobileFood" image={Latest9} heading="Mobile app for a food industry behemoth" paragraph="Facilitating easy food ordering by digitising the experience" use="Food and Beverages     NativeBase"/>
        <Latest nav="/musicApp" image={Latest10} heading="Music App For An Indigenous Brand" paragraph="Enabling people to achieve their music goals through a digital solution" use="Entertainment"/>
        <Latest nav="/invest" image={Latest11} heading="Goal-Based Investment Platform For Elever" paragraph="Enhancing investments and portfolio management through an automated platform" use="Finance, banking and insurance"/>
      </div>:
      <div className='middleFeatured'>
        <Featured nav="/banking" image={Featured1} heading="A banking app for a finance giant" paragraph="Developing a banking app to help the youth manage their finances better." use="Finance, banking and insurance"/>
        <Featured nav="/ptop" image={Featured2} heading="P2P App For The @ Company" paragraph="The @ Company has committed itself towards the creation of a more 'human' internet by enabling users to access the goodness of the internet, without sacrificing their privacy online." use="Social Media and communication"/>
        <Featured nav="/gaming" image={Featured3} heading="E-Sports Gaming Platform For MPL" paragraph="Building a robust mobile gaming platform for India's biggest E-sports company to entertain billions of users." use="Gaming    React"/>
        <Featured nav="/foodIndustry" image={Featured4} heading="Asset Management Dashboard For A Railway Giant" paragraph="Making maintenance accurate and immediate with IoT & state-of-the-art mobile technology for a heavy industries giant in the Railway division." use="Manufacturing    Flutter"/>
        <Featured nav="/liviti" image={Featured5} heading="Social Media App For Liviit" paragraph="The Man behind Liviit employed GeekyAnts to shift his web-app to a mobile app in React Native." use="Social Media and communication"/>
      </div>):
      <div>
        {
          selectedValue === 'Web' ? (
            <div className='webDiv'>
               <Web nav="/saasWidget" image={Web1} heading="Building a rubust Saas Widget For Exceptional Customer Support" paragraph="How Wesolve redefined customer's engagement by developing a widget and an application suit for a SaaS company" use="Travel & Hospitality"/>
               <Web nav="/healthcare" image={Web2} heading="Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcare" paragraph="Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application" use="Healthcare App Development solutions"/>
            </div>
          ):
          selectedValue === 'Mobile' ? (
            <div className='mobileDiv'>
              <Mobile nav="/saasWidget" image={Mobile1} heading="Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcare" paragraph="Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application" use="Healthcare App and Development Solutions"/>
              <Mobile nav="/gaming" image={Mobile2} heading="Digital gaming solutions for Soccer Manager" paragraph="Improve the digital football experience through interactive digital solutions" use="Gaming"/>
              <Mobile nav="/invest" image={Mobile3} heading="Goal-Based Investment Platform For Elever" paragraph="Enhancing investments and portfolio management through an automated platform" use="Finance, Banking and Insurance"/>
              <Mobile nav="/ptop" image={Mobile9} heading="P2P App For The @ Company" paragraph="The @ Company has committed itself towards the creation of a more 'human' internet by enabling users to access the goodness of the internet, without sacrificing their privacy online." use="Social Media and Communication"/>
            </div>
          ): 
          
          selectedValue === 'Design' ?(
            <div className='designDiv'>
              <Design nav="/healthcare" image={Design1} heading="Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcare" paragraph="Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application" use="Healthcare App Development and Solutions"/>
              <Design nav="/custiv" image={Design2} heading="Web app for a Custiv" paragraph="Improving the industrial sector by enhancing the supplier side of the app" use="Manufacturing"/>
            </div>
          ): 
          selectedValue === 'Back-end' ?(
            <div className='backEnd'>
              <h1>No Case Studies Found!</h1>
            </div>
          ): 
          selectedValue === 'Cyber security' ?(
            <div className='cyberSecurity'>
              <h1>No Case Studies Found!</h1>
            </div>
          ):
          selectedValue === 'eCommerse' ?(
            <div className='eCommerse'>
              <Ecommerse image={Ecommerse1} heading="Logistics App For PayPoint" paragraph="UK's Largest Billing Service Provider Hired GeekyAnts To Help Expand It's Service Avenues." use="eCommerse"/>
            </div>
          ):
          selectedValue === 'Finance, Banking and Insurance' ?(
            <div className='financeDiv'>
              <Finance image={Mobile3} heading="Goal-Based Investment Platform For Elever" paragraph="Enhancing investments and portfolio management through an automated platform" use="Finance, Banking and Insurance"/>
              <Finance image={Web8} heading="Content Based Web App For Quintype" paragraph="Developing a Finance & Business based web app for content distribution." use="Finance, Banking and Insurance"/>
              <Finance image={Web7} heading="Digital Wealth Management Platform For Bambu" paragraph="Revolutionizing investment banking with Bambu, a leader in the Fintech domain." use="Finance, Banking and Insurance"/>
            </div>
          ):
          selectedValue === 'Manufacturing' ?(
            <div className='Manufacturing'>
              <Design image={Design9} heading="Asset Management Dashboard For A Railway Giant" paragraph="Making maintenance accurate and immediate with IoT & state-of-the-art mobile technology for a heavy industries giant in the Railway division." use="Manufacturing"/>
              <Design image={Design2} heading="Web app for a Custiv" paragraph="Improving the industrial sector by enhancing the supplier side of the app" use="Manufacturing"/>
              <Web image={Web11} heading="Asset Management Dashboard For A Manufacturing Giant" paragraph="Developing an Asset Management Dashboard for a Fortune 500 company" use="Manufacturing     React"/>
            </div>
          ):
          selectedValue === 'Healthcare App development solutions' ?(
            <div className='healthcare'>
              <Latest image={Latest2} heading="Empowering Medically Complex Children and Their Caretakers with Accessible Quality Healthcaret" paragraph="Leading Healthcare Technologies and Services Company brings healthcare services at home for caretakers of medically complex children with an interactive application" use="Healthcare App Development Solutions"/>
              <Design image={Design7} heading="Carbon Footprint Tracker App For Greenr" paragraph="Assisting environmentalists to raise awareness and give the power of preserving the planet to the people through a digital platform." use="Healthcare App Development solutions"/>
              <Design image={HC} heading="Mental Health Platform for IvySky" paragraph="Revolutionising mental health solutions with IvySky, an organisation by teens for teens" use="Healthcare App Development solutions"/>
            </div>
          ):
          selectedValue === 'Entertainment' ?(
            <div className='entertaiment'>
              <Web image={Web3} heading="Video Conferencing App For 100ms" paragraph="Developing video conferencing SDKs to enhance the 100ms application" use="Entertainment"/>
              <Web image={Web12} heading="News App For ScrollNews" paragraph="A brand new platform for users to share and post news related topics" use="Entertainment     Node.js"/>
              <Mobile image={Mobile8} heading="AI Based Assistant App For A Music Industry Giant" paragraph="Building an AI based lifestyle solution for an AI based venture using Flutter." use="Entertainment"/>
              <Design image={Design6} heading="News App For ScrollNewst" paragraph="A brand new platform for users to share and post news related topics" use="Entertainment"/>
            </div>
          ):
          selectedValue === 'Travel and hospitality' ?(
            <div className='hospitality'>
              <Web image={Web1} heading="Building a rubust Saas Widget For Exceptional Customer Support" paragraph="How Wesolve redefined customer's engagement by developing a widget and an application suit for a SaaS company" use="Travel & Hospitality"/>
              <Web image={Web6} heading="Aviation Management Dashboard For Coast To Coast Helicopters" paragraph="Helping an Aviation Company manage processes better with AirOps" use="Travel & Hospitality"/>
            </div>
          ):
          selectedValue === 'Social Media and communication' ?(
            <div className='social'>
              <Mobile image={Mobile6} heading="@arrive For The @Company" paragraph="A secure location sharing and event creation app for the @ company." use="Social Media & communication"/>
              <Mobile image={Mobile9} heading="P2P App For The @ Company" paragraph="The @ Company has committed itself towards the creation of a more 'human' internet by enabling users to access the goodness of the internet, without sacrificing their privacy online." use="Social Media and Communication"/>
              <Design image={Design8} heading="Dating App For A Social Media Giant" paragraph="Extending the experience of the biggest dating app in the region to a mobile app using state-of-the-art technology and expanding their user base multifold." use="Social Media & Communication"/>
            </div>
          ):
          selectedValue === 'Education' ?(
            <div className='education'>
              <Web image={Web5} heading="A Training & Learning Tool For A Tech Giant" paragraph="Developing a web app for training and learning with a Tech Revolutionary in Romania." use="Education"/>
            </div>
          ):
          selectedValue === 'Food and Beverages' ?(
            <div className='food'>
              <h1>No Case Studies Found!</h1>
            </div>
          ):
          selectedValue === 'Marketing' ?(
            <div className='marketing'>
              <h1>No Case Studies Found!</h1>
            </div>
          ):
          selectedValue === 'Sports' ?(
            <div className='sports'>
              <h1>No Case Studies Found!</h1>
            </div>
          ):
          selectedValue === 'Fintech App Development Services' ?(
            <div className='fintech'>
              <h1>No Case Studies Found!</h1>
            </div>
          ):
          (
            <div></div>
          )
        }
      </div>
       }
      </div>
      <ContactUs />
      <Footer />
    </div>
    </>
  )
}

export default CaseStudy
