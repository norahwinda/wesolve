import React from 'react'
import './CardComponent.css'
import "animate.css/animate.min.css";
import mobile from '../../videos/mobile.gif'
import web from '../../videos/web.gif'
import game from '../../videos/game.gif'
import cyber from '../../videos/cyber.gif'
import digital from '../../videos/digital.gif'
import Card from './Card'

function CardComponent() {
  return (
    <div className='cardComponent'>
       <h1>What we do best</h1>
      <div className='cardComponentTop'>
      <Card title="Mobile App development" vid={mobile} info="With mobile applications built in technologies like React Native and Flutter, unleash the full potential of your business."/>
      <Card title="Website Design and Development" vid={web} info="We understand your business category and flow."/>
      <Card title="Game app development" vid={game} info="We have a team of developers who have expertise in building and development of game applications. We have delivered many 3D and 2D Exiting game apps using latest tools and technology"/>
      <Card title="Cyber security" vid={cyber} info="We ensure safe and security of your products on the internet"/>
      <Card title="Digital Marketing" vid={digital} info="We provide all internet marketting solutions for our clients"/>
      </div>
    </div>
  )
}

export default CardComponent
