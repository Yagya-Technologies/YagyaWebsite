import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import client from '../client';
import NavBar from './NavBar';
import { PortableText } from '@portabletext/react';
import Button from "../components/common/Button"
import blogcard from "../assets/blogcard.png"
import frame from "../assets/contact.jpg"
import { Link } from 'react-router-dom';


const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.fetch(
            `
            *[_type == "post"] {
            title,
            slug,
            body,
            mainImage{
            asset->{
            _id,
            url
            },
            alt
            },

           "authorImage": author->image.asset->url, 
            "authorName": author->name
           
            
          
           
            }

            `

        ).then((data) => setPosts(data)).catch(console.error)
    })

    return (
        <>
            <NavBar />


            <div className='bg-[#FFFFFF]  pb-20 flex flex-col z-50 items-center justify-center '>

                <h1 className='text-[#000000]  text-4xl'>
                    Blogs and videos
                </h1>

                <div className='flex flex-row mt-5 gap-28'>
                    <div className='flex flex-col '>
                        <div className='flex flex-col'>
                            <h2 className='text-[#000000] text-3xl'>Blogs</h2>
                            <div className='w-[406px] h-[3px] bg-[#FE5D15]'></div>


                        </div>
                        <div className='flex flex-col gap-10 mt-6'>


                            {
                                posts.slice(0, 3).map((post) => {
                                    return (
                                        <div key={post.slug.current}
                                            className='flex gap-5'
                                        >
                                            <div>
                                                <img src={post.mainImage.asset.url}
                                                    alt={post.mainImage.alt}
                                                    className='w-[221px] h-[230px] rounded-md' />
                                            </div>

                                            <div className='flex flex-col'>

                                                <h1 className='text-[#000000] mb-2 text-2xl'>
                                                    {post.title}
                                                </h1>

                                                <div className='flex items-center  gap-2'>


                                                    <img
                                                        src={post.authorImage}
                                                        alt=''
                                                        className='w-[30px] h-[30px] object-cover rounded-full border-[1px] border-[#FFC8A4]  '
                                                    />

                                                    <h2 className='text-[#000000] text-[16px]'>
                                                        {post.authorName}
                                                    </h2>

                                                </div>


                                                <div className='text-[#898989] mb-3 w-[435px] mt-2 text-[16px]'>
                                                    <PortableText value={post.body} />
                                                </div>


                                                <Button linkto={""} active={true}>
                                                    View more of this

                                                </Button>






                                            </div>

                                        </div>

                                    )
                                })
                            }




                            <Link to={"/all-blogs"} className='text-[#898989] text-[20px] underline ml-[270px]' >
                            Load all
                            </Link>



                        </div>



                    </div>
                    <div className='bg-[#473BF0]  mt-14 z-50 relative gap-2 p-8 flex flex-col rounded-[8px] w-[324px] h-[400px]'>
                            <p className='text-[#FFFFFF] z-10 text-4xl'>
                            Interested to work with us?
                            </p>

                            <img
                            src={blogcard}
                            alt=''
                            className=' rounded-[8px]'
                            />
{/* 
                            <img
                            src={frame}
                            alt=''
                            style={{ transform: 'rotate(-47deg)' }}
                            className='absolute -z-10 top-[70px] left-[60px]    '
                            /> */}

                    </div>

                </div>



            </div>
        </>
    )
}

export default Blog