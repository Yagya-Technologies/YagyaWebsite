import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='w-full  px-20 h-20 flex  items-center justify-between'>
            <img
                src={logo}
                alt='logo'
                className='w-[29px] h-[40px]'
            />
            <ul 
            className='text-[#FFFFFF] flex gap-8 text-sm'
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
    )
}

export default NavBar