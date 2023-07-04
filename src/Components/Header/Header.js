import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {TiSocialLinkedin} from 'react-icons/ti'
import {CgFacebook} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import {GrClose} from 'react-icons/gr'
import Logo from '../../Images/wesolves-w.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = React.useState(true)
  const [showCompany, setShowCompany] = React.useState(true)
  const [showServices, setShowServices] = React.useState(true)
  const [showTech, setShowTech] = React.useState(true)

  const handleMenuIcon = () =>{
    setShowMenu(!showMenu)
  }

  const handleCompany = () =>{
    setShowCompany(!showCompany)
  }

  const handleServices = () =>{
    setShowServices(!showServices)
  }

  const handleTech = () =>{
    setShowTech(!showTech)
  }
  return (
    <div className='headerOut'>
    <div className='header'>
      <img src={Logo} alt="" className="logo" onClick={()=>navigate('/')}/>
      <AiOutlineMenu className='menuIcon' onClick={handleMenuIcon} id={showMenu ? "menuIcon":""}/>
      <GrClose className='closeIcon' onClick={handleMenuIcon} id={showMenu ? "":"closeIcon"} />
      <div className='links'>
        <p onClick={()=> navigate('/about')}>About us</p>
        <p onClick={()=> navigate('/caseStudy')}>Case studies</p>
        <HashLink className='hLink' smooth to='/#technology' ><p>Technology</p></HashLink>
        <HashLink className='hLink' smooth to='/#blogs' ><p>Blog</p></HashLink>
        <p onClick={()=> navigate('/contactUsPage')}>Contact</p>
      </div>
    </div>
    <div className='headerSidebar' id={showMenu ? "":"headerSidebar"}>
        <div className='headerHome'>
          <a href='/home'>Home</a>
        </div>
        <div className='company'>
          <div className='companyTop'>
            <a href='/company'>Company</a>
            <div className='companyFoward' id={showCompany ? "":"companyFoward"}   onClick={handleCompany}>
              <IoIosArrowForward className='icon'/>
            </div>
            <div className='companyDown' id={showCompany ? "":"companyDown"} onClick={handleCompany}>
              <IoIosArrowDown className='icon' />
            </div>
          </div>
          <div className='companyBottom' id={showCompany ? "":"companyBottom"}>
            <p onClick={()=>navigate('/about')}>About us</p>
            <p onClick={()=>navigate('/contactUsPage')}>Contact us</p>
          </div>
        </div>
        <div className='services'>
          <div className='servicesTop'>
            <a href='/services'>Services</a>
            <div className='serviceFoward' id={showServices ? "":"serviceFoward"} onClick={handleServices}>
              <IoIosArrowForward className='icon' />
            </div>
            <div className='serviceDown' id={showServices ? "":"serviceDown"} onClick={handleServices}>
              <IoIosArrowDown className='icon'/>
            </div>
          </div>
          <div className='servicesBottom' id={showServices ? "":"servicesBottom"}>
            <p>Mobile App Development</p>
            <p>Website Development</p>
            <p>UI/UX Design</p>
            <p>Game App Development</p>
            <p>Digital Marketing</p>
            <p>Cyber Security</p>
          </div>
        </div>
        <div className='techStack'>
          <div className='techStackTop'>
            <a href='/techStack'>Tech stack</a>
            <div className='techFoward' id={showTech ? "":"techFoward"} onClick={handleTech}>
              <IoIosArrowForward className='icon'/>
            </div>
            <div className='techDown' id={showTech ? "":"techDown"} onClick={handleTech}>
              <IoIosArrowDown className='icon'/>
            </div>
          </div>
          <div className='techStackBottom' id={showTech ? "":"techStackBottom"}>
            <p onClick={()=>navigate('/reactNative')}>React Native</p>
            <p onClick={()=>navigate('/next')}>Next.js</p>
            <p onClick={()=>navigate('/flutter')}>Flutter</p>
            <p onClick={()=>navigate('/graphql')}>GraphQL</p>
            <p onClick={()=>navigate('/node.js')}>Node.js</p>
            <p onClick={()=>navigate('/postgresql')}>Postgresql</p>
          </div>
        </div>
        <div className='blogLink'>
          <a href='/blogs'>Blog</a>
        </div>
        <div className='socialLinks'>
          <div className='linkedInDiv'>
            <TiSocialLinkedin className='linkedInIcon' />
          </div>
          <div className='facebookDiv'>
            <CgFacebook className='facebookIcon'/>
          </div>
          <div className='emailDiv'>
            <MdEmail className='emailIcon'/>
          </div>
          <div className='phoneDiv'>
            <BiPhoneCall className='phoneIcon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
