import React from 'react'
import NavBar from './NavBar'
import frame from "../assets/contact.jpg"

const About = () => {
  return (
   <>
   <NavBar/>
   <div className=' pt-14 pb-44 px-32 relative flex flex-col  gap-14'>
    <p className='text-[#000000] text-4xl text-center '>
        About us
    </p>

    <div className='flex flex-col gap-5'>

        <p className='text-[#000000] text-[16px]'>
        At <span className='text-[#FE5D15]'>Yagya InfoTech</span> , our mission is to lead the digital transformation of Nepal and beyond by providing innovative software solutions tailored to solve our clients' unique challenges. As a startup, we are driven by the belief that digitalization is key to unlocking efficiency, growth, and modern solutions in today's fast-paced world.
        </p>

        <p className='text-[#000000] text-[16px]'>
        We specialize in a range of software development services, designed to meet the diverse needs of businesses and individuals looking to embrace digital transformation. Whether you're a small business seeking to streamline operations or an established company needing custom software solutions, we are here to make the process seamless and efficient.
        </p>

        <p  className='text-[#000000] text-[16px]'>
        Our target audience is anyone in need of digitalization – from local enterprises to global clients. At Yagya InfoTech, we pride ourselves on our client-first approach, ensuring that each project is handled with the utmost care and dedication.
        </p>

        <p  className='text-[#000000] text-[16px]'>
        Though we are a young company, our vision is bold: to be a key player in the digital revolution, making cutting-edge technology accessible to all. Our team consists of passionate professionals who are committed to delivering top-quality services, ensuring that we consistently exceed our clients' expectations.
        </p>

    </div>

    <img
    src={frame}
    alt=''
    className='absolute w-[480px] -rotate-45 -right-[300px] top-[365px] z-10'
    />



   </div>
   </>
  )
}

export default About