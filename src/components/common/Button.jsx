import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center w-fit text-[13px] sm:text-[16px] p-[10px]
         rounded-md font-bold 
          ${active ? "bg-[#FE5D15] " : "bg-[#473BF0]"}
           hover:shadow-none hover:scale-95 transition-all duration-200  text-[#FFFFFF]`}>
            {children}
        </div>
    </Link>
  )
}

export default Button