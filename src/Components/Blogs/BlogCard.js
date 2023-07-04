import React from 'react'
import './BlogCard.css'

function BlogCard({image, heading, content}) {
  return (
    <div className='blogCard'>
      <img src={image} alt=""/>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  )
}

export default BlogCard
