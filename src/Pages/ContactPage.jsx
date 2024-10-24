import React from 'react'
import Contact from '../components/HomePage/Contact'
import NavBar from './NavBar'

const ContactPage = () => {
  return (
  <>
  <NavBar textstyle={"text-[#000000]"} />
 
    <div className='md:px-20 px-10  py-14'>
    <h1 className='text-3xl mb-5'>Contact Us</h1>
      
        <Contact/>
    </div>
  </>
  )
}

export default ContactPage