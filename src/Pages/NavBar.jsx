import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { GiCancel } from 'react-icons/gi'
import { FiMenu } from 'react-icons/fi'

const NavBar = ({ bgcolor, textstyle }) => {


    const [navVisible, setNavVisible] = useState(false)

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };


    return (
        <>
            <div className={`w-full hidden md:flex px-20 h-20 relative  items-center justify-between ${bgcolor}`}>
                <Link to="/">

                <img
                    src={logo}
                    alt='logo'
                    className='w-[29px] h-[40px]'
                />
                </Link>
               
                <ul
                    className={` flex gap-8 text-sm ${textstyle}`}
                >
                    <li>
                        <Link to="/about">
                            About us
                        </Link>
                    </li>

                    <li>
                        <Link to="/blogs">
                            Blogs
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact">
                            Contact us
                        </Link>
                    </li>

                    <li>
                        <Link to="/services">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link to="/products">
                            Products
                        </Link>
                    </li>

                </ul>

            </div>

            <div
                className={` md:hidden text-[#fff] flex h-14 py-2 px-6 items-center justify-center ${bgcolor}  transition-all duration-200"} `}
            >

                <div className='flex justify-between md:hidden items-center w-full '>

                    <img
                        src={logo}
                        alt='logo'
                        className='w-[29px] h-[40px]'
                    />

                    <button
                        onClick={toggleNav}
                        className={`md:hidden   text-[#fff]  z-50 bottom-4 right-4 p-2 rounded-md  `}
                    >
                        {navVisible ? <GiCancel size={32} /> : <FiMenu size={32} className={`${textstyle}`} />}
                    </button>


                    <nav
                        className={`absolute z-40 right-0 top-0 w-[40%] h-[30vh] bg-[#161D29] ${navVisible ? 'visible ' : 'invisible '}`}
                    >

                        <ul
                            className={` md:hidden flex flex-col items-center justify-center pt-14 gap-8 text-sm `}
                        >
                            <li>
                                <Link to="/about">
                                    About us
                                </Link>
                            </li>

                            <li>
                                <Link to="/blogs">
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    Contact us
                                </Link>
                            </li>

                            <li>
                                <Link to="/services">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link to="/products">
                                    Products
                                </Link>
                            </li>

                        </ul>


                    </nav>


                </div>



            </div>
        </>
    )
}

export default NavBar