import React, { useRef } from 'react'
import './ContactUsPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import emailjs from '@emailjs/browser';

function ContactUsPage() {

  const [showThank, setShowThank] = React.useState(false)
  const form = useRef()

  const handleThankyou = () => {
    setShowThank(true)
  }

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n3emcg5', 'template_l2bqj67', form.current, 'wCJFeEQYhLTu_Fnab')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contactUsPage'>
      <Header />
      <form ref={form} onSubmit={sendEmail} className='userDetails'>
        <h2 id={showThank === true ? "userDetails":""}>Build and Win with the Wesolve!</h2>
        <p id={showThank === true ? "userDetails":""}>Let us take your ideas and give them flight! Drop us a note here and we will get back to you within 24 hours.</p>
        <div className='userDetailsBottom' id={showThank === true ? "userDetails":""}>
          <div className='customerNames' id={showThank === true ? "userDetails":""}>
            <p>Full Name</p>
            <input type='text' placeholder='Enter Name' name="user_name" />
          </div>
          <div className='emailId' id={showThank === true ? "userDetails":""}>
            <p>Email ID</p>
            <input type='email' placeholder='Enter Email' name='user_email'/>
          </div>
          <div className='companyName' id={showThank === true ? "userDetails":""}>
            <p>Company Name</p>
            <input type='text' placeholder='Enter Company Name' name="company_name" />
          </div>
          <div className='contact' id={showThank === true ? "userDetails":""}>
            <p>Contact Number</p>
            <input type='number' placeholder='Enter Contact Number' name="contact" />
          </div>
          <div className='country' id={showThank === true ? "userDetails":""}>
            <p>Country</p>
            <input type='text' placeholder='Enter Country' name="country" />
          </div>
          <div className='aboutUs' id={showThank === true ? "userDetails":""}>
            <p>How did you hear about us?</p>
            <input type='text' placeholder='Write in words' name="how" />
          </div>
          <div className='expectations' id={showThank === true ? "userDetails":""}>
            <p>Write your expectations</p>
            <textarea type='text' placeholder='Write in words' name="message" />
          </div>
          <div className='btnn' id={showThank === true ? "userDetails":""}>
            <button onClick={handleThankyou}>Sumbit</button>
          </div>
        </div>
        <div className='thankyou' id={showThank === true ? "thankyou":""}>
          <h1>Thank you for sharing your details.</h1>
          <p>The info has landed in our inbox, and our geeks are already on it. We will touch base with you ASAP.</p>
          <p>Meanwhile, please feel free to browse the website, check out our assets, explore our offerings and get to know us better.</p>
          <div className='btnn2'>
            <button>Go home</button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default ContactUsPage
