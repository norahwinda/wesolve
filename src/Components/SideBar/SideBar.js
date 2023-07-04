import React from 'react'
import Logo from '../../Images/wesolves-w.png'
import {AiFillHome} from 'react-icons/ai'
import {BsGlobe2} from 'react-icons/bs'
import {FaServicestack} from 'react-icons/fa'
import {AiTwotoneSetting} from 'react-icons/ai'
import {SiBookstack} from 'react-icons/si'
import {IoMdArrowDropright} from 'react-icons/io'
import {TbBrandReactNative} from 'react-icons/tb'
import {SiNextdotjs} from 'react-icons/si'
import {RiFlutterFill} from 'react-icons/ri'
import {MdDesignServices} from 'react-icons/md'
import {TbBrandGraphql} from 'react-icons/tb'
import {IoLogoNodejs} from 'react-icons/io'
import {DiPostgresql} from 'react-icons/di'
import {SiServerless} from 'react-icons/si'
import {useNavigate} from 'react-router-dom'
import {CgFacebook} from 'react-icons/cg'
import {TiSocialLinkedin} from 'react-icons/ti'
import {MdEmail} from 'react-icons/md'
import './SideBar.css'

function SideBar() {

  const navigate = useNavigate()
  const [showFlip, setShowFlip] = React.useState(false)
  const [showCompany, setShowCompany] = React.useState(false)
  const [showServices, setServices] = React.useState(false)
  const [showTech, setTech] = React.useState(false)
/*
  const handleCompany = () =>{
    setShowCompany(!showCompany)
    setServices(false)
    setTech(()=>false)
    if(showCompany === false){
      setShowFlip(true)
    }else{
      setShowFlip(false)
    }
  }
  */

  const handleServices = () =>{
    setShowCompany(()=>false)
    setTech(()=>false)
    setServices(()=>!showServices)
    if(showServices === false){
      setShowFlip(()=>true)
    }else{
      setShowFlip(()=>false)
    }
  }

  const handleTech = () =>{
    setShowCompany(()=>false)
    setServices(()=>false)
    setTech(()=>!showTech)
    if(showTech === false){
      setShowFlip(()=>true)
    }else{
      setShowFlip(()=>false)
    }
  }

  return (
    <div>
    <div className='sideBar' id={showFlip ? "sideBar":""}>
        <div className='Logo'>
          <img src={Logo} onClick={()=>navigate('/')} alt="" className='sideBarLogo' />
        </div>
        <div className='homeIcon' id={showFlip ? "home":""} >
          <AiFillHome onClick={()=>navigate('/')} className='hIcon' id={showFlip ? "home":""} />
          <p onClick={()=>navigate('/')} className='hIcon' id={showFlip ? "home":""}>Home</p>
        </div>
        <div className='globeIcone'>
          <BsGlobe2 onClick={()=>navigate('/about')} className='companyIcon' id={showCompany ? "companyParagraph":""} />
          <p onClick={()=>navigate('/about')} id={showCompany ? "companyParagraph":""}>about us</p>
        </div>
        <div className='servicesIcon'>
          <FaServicestack onClick={handleServices} className='sIcon' id={showServices ? "serviceParagraph":""} />
          <p onClick={handleServices}>services</p>
          <IoMdArrowDropright className='serviceArrow' id={showServices ? "serviceParagraph":""} />
        </div>
        <div className='techIcon'>
          <AiTwotoneSetting onClick={handleTech} className='tIcon' id={showTech ? "tIcon":""} />
          <p onClick={handleTech}>technology</p>
          <IoMdArrowDropright className='techArrow' id={showTech ? "tIcon":""}/>
        </div>
        <div className='blog'>
        <SiBookstack className='bookIcon'/>
        <p>blog</p>
        </div>
        <div className='buttonDiv'>
          <button>Contact us</button>
        </div>
        <div className='qustion'>
          <p className='questionTop'>Have any question</p>
        </div>
        <div className='socialMediaLinks'>
          <div className='facebookDiv'>
            <CgFacebook className='facebookIcon'/>
          </div>
          <div className='linkedInDiv'>
            <TiSocialLinkedin className='linkedInIcon' />
          </div>
          <div className='emailDiv'>
            <MdEmail className='emailIcon'/>
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright © 2023 Wesolve Technologies Ltd.</p>
        </div>
    </div>
    <div className='sideBarFlib' id={showFlip ? "sideBarFlip":""}>
      <div className='servicesInfo' id={showServices ? "servicesInfo":""}>
        <a href='/mobile'>Mobile App Development</a>
        <a href='/website'>Website Development</a>
        <a href='/uiDesign'>UI/UX Design</a>
        <a href='/game'>Game App Development</a>
        <a href='/digitalMarketting'>Digital Marketing</a>
        <a href='/cyber'>Cyber Security</a>
      </div>
      <div className='techStackInfo' id={showTech ? "techStackInfo":""}>
        <div className='reactNative'>
          <TbBrandReactNative className='nativeIcon'/>
          <a href='/reactNative'>React Native</a>
        </div>
        <div className='next'>
          <SiNextdotjs className='nextIcon'/>
          <a href='/next'>Next.js</a>
        </div>
        <div className='flutter'>
          <RiFlutterFill className='flutterIcon' />
          <a href='/flutter'>Flutter</a>
        </div>
        <div className='design'>
          <MdDesignServices className='designIcon' />
          <a href='/design'>Design</a>
        </div>
        <div className='graphql'>
          <TbBrandGraphql className='graphalIcon'/>
          <a href='/graphql'>GraphQL</a>
        </div>
        <div className='node'>
          <IoLogoNodejs className='nodeIcon' />
          <a href='/node'>Node.js</a>
        </div>
        <div className='postgresql'>
          <DiPostgresql className='postgresqlIcon'/>
          <a href='/postgresql'>Postgresql</a>
        </div>
        <div className='serverless'>
          <SiServerless className='serverlessIcon'/>
          <a href='/serverless'>Serverless</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SideBar
