import React from 'react'
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa"
import Button from '../components/common/Button';

import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import { ourServices } from "../data/ourServices"
import TimeLineSection from '../components/HomePage/TimeLineSection';
import Footer from './Footer';
import OurProduct from '../components/HomePage/OurProduct';
import Contact from '../components/HomePage/Contact';
import NavBar from './NavBar';




const Home = () => {
    return (
        <>
        <NavBar/>
      
            <div className='text-[#FFFFFF]  px-20 max-w-max mt-14 flex pb-10 flex-col gap-14 relative '>
                <div className='shape1'></div>
                <div className='shape2'></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>
                        5 star overall rating
                    </p>

                    <ReactStars
                        count={5}
                        value={5}

                        size={32}
                        edit={false}
                        activeColor="#FE5D15"
                        emptyIcon={<FaStar />}
                        fullIcon={<FaStar />}
                    />

                    <p className='text-6xl mb-6'>
                        Build your Software with us
                    </p>


                    <Button
                        linkto={"/"}
                        active={true}
                    >
                        Get in touch
                    </Button>

                </div>

                <div className='flex flex-col'>
                    <p className='text-sm'>
                        Trusted by over 50 clients
                    </p>

                    <div className='relative m-3  flex'>

                        <img
                            src={client2}
                            alt=''
                            className='w-[62px] h-[62px] relative border-[#FE5D15] z-30 rounded-full border-[2px]'


                        />
                        <img
                            src={client1}
                            alt=''
                            className='w-[62px] h-[62px] absolute left-12  border-[#FE5D15] z-40 rounded-full border-[2px]'


                        />


                    </div>

                    <p className='text-[#898989] my-5 w-[500px] text-sm'>
                        "Thank you, Yagya InfoTech, for creating an incredible website for my business! Your professionalism, creativity, and attention to detail made the process seamless, and the final result exceeded my expectations. I highly recommend your web design services!"
                    </p>

                    <p className='text-[#898989] text-sm ' >
                        Shyam Sha
                    </p>
                    <p className='text-[#898989]  text-sm '>
                        Sydney Shine,Austraila
                    </p>

                </div>


            </div>



            <div className='bg-[#FFFFFF] px-20 py-14 flex gap-14 flex-col items-center'>
                <p className='text-[#000000] text-4xl'>Our Services</p>


                <div className='grid grid-cols-3 gap-x-20 gap-y-10'>
                    {
                        ourServices.map((item, index) => {
                            return (
                                <div key={index}
                                    className='border-[#898989] p-4 border-[1px] rounded-[8px]'
                                >
                                    <h1 className='text-[#000000] mb-4 border-b-[3px] border-[#FE5D15] text-xl'>
                                        {item.title}
                                    </h1>

                                    <p className='text-[#898989] text-sm'>
                                        {item.description}

                                    </p>


                                </div>
                            )
                        })
                    }
                </div>




            </div>

            <div className='bg-[#FFFFFF] px-20 flex gap-14 flex-col items-center'>
                <p className='text-[#000000] text-4xl'>Our Approach</p>

                <TimeLineSection />
            </div>


            <div className='bg-[#FFFFFF] px-20  flex  gap-14 flex-col items-center'>
                <p className='text-[#000000] text-4xl'>Our Products</p>

                <OurProduct />
            </div>


            <div className='bg-[#FFFFFF] px-20  flex  gap-14 flex-col items-center'>
                <p className='text-[#000000] text-4xl'>Contact us</p>

                <Contact/>

                
            </div>

            <Footer />
        </>
    )
}

export default Home





