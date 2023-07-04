import React from 'react'
import './Blogs.css'
import home1 from '../../Images/home1.jpg'
import home5 from '../../Images/home5.jpg'
import BlogCard from './BlogCard'
import "animate.css/animate.min.css";

function Blogs({id}) {
  return (
    <div className='blogs' id={id}>
      <h1>Insights</h1>
      <p>Read about everything that goes on inside the brilliant minds of our employees and understand Wesolve better through our blog.</p>
      <div className='blogCards'>
        <BlogCard image={home1} heading="Gaming App Development For Business Industry To Increase Conversions" content="Gaming is not only a form of entertainment but also a tool for business to connect with there customers and employees. Gamification is the..."/>
        <BlogCard image={home5} heading="Improving Lives with Technology" content="From communication and transport to healthcare and connectivity, technology has enhanced our lives for the better. The ..."/>
      </div>
    </div>
  )
}

export default Blogs
