import React from 'react'
import {TbBrandReactNative} from 'react-icons/tb'
import {TbBrandGraphql} from 'react-icons/tb'
import {SiNextdotjs} from 'react-icons/si'
import {RiFlutterFill} from 'react-icons/ri'
import {IoLogoNodejs} from 'react-icons/io'
import {DiPostgresql} from 'react-icons/di'
import {SiServerless} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './Technology.css'

function Technology({id}) {

  const navigate = useNavigate()
  return (
    <div className='technology' id={id}>
      <div className='techHead'>
        <h1>Technology</h1>
        <p>We work with cutting-edge technologies designed to solve your product requirements. Focus on finding solutions for your business needs while we handle the technical aspect.</p>
      </div>
      <div className='techBottom'>
      <div className='reactNative' onClick={()=>navigate('/reactNative')}>
          <TbBrandReactNative className='nativeIcon'/>
        </div>
        <div className='next' onClick={()=>navigate('/next')}>
          <SiNextdotjs className='nextIcon'/>
        </div>
        <div className='flutter' onClick={()=>navigate('/flutter')}>
          <RiFlutterFill className='flutterIcon' />
        </div>
        <div className='graphql' onClick={()=>navigate('/graphql')}>
          <TbBrandGraphql className='graphalIcon'/>
        </div>
        <div className='node' onClick={()=>navigate('/node.js')}>
          <IoLogoNodejs className='nodeIcon' />
        </div>
        <div className='postgresql' onClick={()=>navigate('/postgresql')}>
          <DiPostgresql className='postgresqlIcon'/>
        </div>
        <HashLink className='hLink' smooth to='/#heroSection' ><div className='serverless'>
          <SiServerless className='serverlessIcon'/>
        </div>
        </HashLink>
        </div>
    </div>
  )
}

export default Technology
