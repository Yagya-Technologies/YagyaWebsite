import React from 'react'
import product1 from "../../assets/product1.png"
import Button from '../common/Button'
import product2 from "../../assets/product2.png"
import { FaGithub } from 'react-icons/fa6'
import product3 from "../../assets/product3.png"

const OurProduct = () => {
  return (
    <div className='flex mb-20  gap-7 text-[#FFFFFF]'>

        <div className='flex flex-col bg-[#473BF0] w-[55%] pt-10 p-2 rounded-[16px]'>
            <p className='text-2xl ml-4'>
            5k+ daily active users
            </p>

            <p className='text-4xl mb-8 ml-4'>
            School Management System
            </p>


            <div className='flex flex-col rounded-[9px] bg-[#FFFFFF] pt-4 px-7'>
            <img
           src={product1}
           alt=''
           className='w-[496px] h-[251px]'
           />

           <p className='text-[#000000] mt-3 mb-8 text-xl'>
           Used by over 100 schools in nepal
           </p>

           <div className='flex mb-8 gap-4'>
            <Button linkto={"/"} active={true}>
              Get in touch
            </Button>

            <Button linkto={"/"} active={false}>
             View Demo
            </Button>

           </div>



            </div>

          



        </div>

        <div className='flex flex-col  gap-6'>
          <div className='flex gap-5'>
            <div className='flex gap-3 bg-[#00AFB9]   p-2 rounded-[16px]'>
              <img
              src={product2}
              alt=''
              className='w-full h-[198px]'
              />

              <div className='flex flex-col  gap-3'>
                <p className='text-[18px]'>
                1k+ daily active users
                </p>

                <p className='text-xl'>
                Sydney Shine
                </p>

                <p className='text-sm w-[250px]'>
                Sydney shine is an austrilian cleaning company which speacializes in end of lease cleaning.
                </p>

                <Button linkto={"/"} active={true}>
                Visit live site
                </Button>


                </div>

            </div>
            <div className='flex flex-col gap-4'>
              <button className='flex items-center w-[134px] h-[97px] text-[#000000] text-sm rounded-[16px] justify-center bg-[#D9D9D9] '>
                <span className='text-[#292929] text-xl'>+</span> View all
              </button>
              <button className='flex items-center w-[134px] text-[#898989] text-6xl h-[97px]   rounded-[16px] justify-center bg-[#292929] '>
               <FaGithub/>
              </button>

            </div>


          </div>

          <div className='flex gap-3 rounded-[16px] bg-[#004643] p-2'>

            <img
            src={product3}
            alt=''
            className='w-full h-[311px]'
            />

            <div className='flex mt-2 flex-col'>

              <p className='text-18px mb-3'>
              5k+ daily active users
              </p>

              <p className='text-[28px] mb-3'>
              Durmade
              </p>

              <p className='text-[#898989] w-[200px] mb-[45px] text-[16px]'>
              Durmade is a clothing brand based on nepal. Durmade is a clothing brand based on nepal. Durmade is a clothing brand based on nepal.
              </p>

              <Button linkto={"/"} active={true}>
                View live site
              </Button>

            </div>

          </div>

        </div>


    </div>
  )
}

export default OurProduct