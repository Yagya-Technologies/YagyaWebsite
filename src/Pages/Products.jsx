import React from 'react'
import NavBar from './NavBar'
import OurProduct from '../components/HomePage/OurProduct'

const Products = () => {
  return (
    <>
    <NavBar textstyle={"text-[#000000]"} />

    <div className='flex flex-col py-14 md:px-20 px-6 gap-28 '>
        <p className='text-4xl text-center'>
            Our Products
        </p>
    <OurProduct/>
    </div>

    
    </>
  )
}

export default Products