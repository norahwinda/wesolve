import React from 'react'
import './Home.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Components/Pages/HomePage/HomePage'
import AboutUs from '../Components/Pages/AboutUs/About/AboutUs'
import Case from '../Components/Pages/CaseStudy/Case'
import SaasWidget from '../Components/Pages/CaseStudy/SaasWidget/SaasWidget'
import HealthCare from '../Components/Pages/CaseStudy/HealthCare/HealthCare'
import Custiv from '../Components/Pages/CaseStudy/Custiv/Custiv'
import DesignPci from '../Components/Pages/CaseStudy/DesignPci/DesignPci'
import Liviti from '../Components/Pages/CaseStudy/Liviti/Liviti'
import Gaming from '../Components/Pages/CaseStudy/Gaming/Gaming'
import PetFood from '../Components/Pages/CaseStudy/PetFood/PetFood'
import FoodIndustry from '../Components/Pages/CaseStudy/FoodIndustry/FoodIndustry'
import MobileFood from '../Components/Pages/CaseStudy/MobileFood/MobileFood'
import MusicApp from '../Components/Pages/CaseStudy/MusicApp/MusicApp'
import Invest from '../Components/Pages/CaseStudy/Invest/Invest'
import BankingApp from '../Components/Pages/CaseStudy/BankingApp/BankingApp'
import Ptop from '../Components/Pages/CaseStudy/Ptop/Ptop'
import ContactUsPage from '../Components/Pages/ContactUsPage/ContactUsPage'
import ReactNative from '../Components/Pages/ReactNative/ReactNative'
import Next from '../Components/Pages/Nextjs/Next'
import Flutter from '../Components/Pages/Flutter/Flutter'
import Graphql from '../Components/Pages/GraphQL/Graphql'
import Node from '../Components/Pages/Nodejs/Node'
import Postgresql from '../Components/Pages/Postgresql/Postresql'
function Home() {
  return (
    <div className='home'>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/caseStudy" element={<Case />} />
          <Route path="/saasWidget" element={<SaasWidget />} />
          <Route path="/healthCare" element={<HealthCare />} />
          <Route path="/custiv" element={<Custiv />} />
          <Route path="/designPci" element={<DesignPci />} />
          <Route path="/liviti" element={<Liviti />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/petFood" element={<PetFood />} />
          <Route path="/foodIndustry" element={<FoodIndustry />} />
          <Route path="/mobileFood" element={<MobileFood />} />
          <Route path="/musicApp" element={<MusicApp />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/banking" element={<BankingApp />} />
          <Route path="/ptop" element={<Ptop />} />
          <Route path="/contactUsPage" element={<ContactUsPage />} />
          <Route path="/reactNative" element={<ReactNative />} />
          <Route path="/next" element={<Next />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/graphql" element={<Graphql />} />
          <Route path="/node.js" element={<Node />} />
          <Route path="/postgresql" element={<Postgresql />} />
          <Route path="/contactUsPage" element={<ContactUsPage />} />
        </Routes>
    </div>
  )
}

export default Home
