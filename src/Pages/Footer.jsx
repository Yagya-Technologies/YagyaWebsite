import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='md:px-20 px-6 bg-[#10161E] relative  z-50 text-[#FFFFFF] pb-5 pt-[132px]'>

            <div className='grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-7 border-b-[1px] border-[#898989] pb-20'>
                <div>
                    <img
                        src={logo}
                        alt=''
                        className='w-[70px] h-[98px]'
                    />
                </div>
                <div className='flex flex-col  gap-6 '>
                    <h1 className='text-4xl'>
                        Services
                    </h1>
                    <ul className='flex text-xl flex-col  gap-3'>
                        <li >
                            Mobile app development
                        </li>
                        <li>
                            Website design and development
                        </li>
                        <li>
                            Custom app development
                        </li>
                        <li>
                            Technical Consultation
                        </li>
                    </ul>

                </div>

                <div className='flex flex-col  gap-6 '>
                    <h1 className='text-4xl'>
                        Products
                    </h1>
                    <ul className='flex text-xl flex-col  gap-3'>
                        <li >
                            School Management System
                        </li>
                        <li>
                            Durmade:Clothing Brand
                        </li>
                        <li>
                            Sydeny Shine
                        </li>

                    </ul>

                </div>


                <div className='flex flex-col  gap-6 '>
                    <h1 className='text-4xl'>
                        Technology
                    </h1>
                    <ul className='flex text-xl flex-col  gap-3'>
                        <li >
                            Tech
                        </li>
                        <li>
                            Open Source
                        </li>


                    </ul>

                </div>

                <div className='flex flex-col  gap-6 '>
                    <h1 className='text-4xl'>
                        More
                    </h1>
                    <ul className='flex text-xl flex-col  gap-3'>
                        <li >
                            Blogs
                        </li>
                        <li>
                            About us
                        </li>


                    </ul>

                </div>

            </div>
            <div className='flex md:flex-row flex-col text-[#898989]  mt-20 gap-2 md:justify-between'>

                <p className=''>
                    &copy;2024 yagya.tech All rights reserves
                    </p>
                <p>
                Privacy policy
                </p>

                <div className="flex gap-3 text-lg">
                <Link to=""
                  className="hover:scale-150 hover:text-richblack-50 transition-all duration-200"
                >
                  <FaFacebook />
                </Link>

                <Link to=""
                className="hover:scale-150  hover:text-richblack-50 transition-all duration-200">
                  <FaGithub />
                </Link>

                <Link to=""
                className="hover:scale-150 hover:text-richblack-50 transition-all duration-200">
                  <FaLinkedinIn />
                </Link>

                <Link to=""
                className="hover:scale-150  hover:text-richblack-50 transition-all duration-200">
                  <FaYoutube />
                </Link>

              




              </div>
            </div>

        </div>
    )
}

export default Footer