import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// import client from '../client';
import NavBar from './NavBar';
import { PortableText } from '@portabletext/react';
import Button from "../components/common/Button"
import blogcard from "../assets/blogcard.png"
import frame from "../assets/contact.jpg"
import { Link } from 'react-router-dom';
import client from '../client';
import video from "../assets/video1.png"


const recentVideo = [
    {

        thumbnail:video,
        title:"Programming with Yagya InfoTech",
        link:""

    },
    {

        thumbnail:video,
        title:"Programming with Yagya InfoTech",
        link:""

    },
    {

        thumbnail:video,
        title:"Programming with Yagya InfoTech",
        link:""

    }
]


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

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <>
<NavBar textstyle={"text-[#000000]"} />

            <div className='bg-[#FFFFFF]  pb-20 md:px-20 px-6 flex flex-col z-50 items-center justify-center '>

                <h1 className='text-[#000000]  text-4xl'>
                    Blogs and videos
                </h1>

                <div className='flex lg:flex-row flex-col mt-5 gap-14 lg:gap-28'>
                    <div className='flex flex-col '>
                        <div className='flex flex-col'>
                            <h2 className='text-[#000000] text-3xl'>Blogs</h2>
                            <div className='w-[406px] h-[3px] bg-[#FE5D15]'></div>


                        </div>
                        <div className='flex flex-col gap-10 mt-6'>


                            {
                                posts.slice(0, 3).map((post) => {

                                    // const body = post.body.substring(0,100)
                                    return (
                                        <div key={post.slug.current}
                                            className='flex md:flex-row flex-col gap-5'
                                        >
                                            <div>
                                                <img src={post.mainImage.asset.url}
                                                    alt={post.mainImage.alt}
                                                    className='md:w-[221px]  h-[230px] rounded-md' />
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
                                                    {typeof post.body === 'string' ? (
                                                        truncateText(post.body, 100)
                                                    ) : (
                                                        <PortableText value={post.body} />
                                                    )}
                                                </div>


                                                <Button linkto={`/blog/${post.slug.current}`} active={true}>
                                                    View more of this

                                                </Button>






                                            </div>

                                        </div>

                                    )
                                })
                            }




                            <Link to={"/all-blogs"} className='text-[#898989] text-[20px] underline md:ml-[270px]' >
                                Load all
                            </Link>



                        </div>



                    </div>
                    <div className='bg-[#473BF0]  mt-14 z-50 relative gap-2 p-8 flex flex-col rounded-[8px] lg:w-[324px] h-[400px]'>
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


            <div className='flex md:px-20 px-6 md:mb-52 mb-40 flex-col  '>
                <div className='flex mb-20 flex-col'>
                    <h2 className='text-[#000000] text-3xl'>Our Recent Videos</h2>
                    <div className='w-[406px] h-[3px] bg-[#FE5D15]'></div>


                </div>

                <div className='flex md:flex-row flex-col gap-10'>

                    {
                        recentVideo.map((video,i)=>(
                            <div key={i} 
                            className='flex flex-col gap-4'>
                                
                                <img src={video.thumbnail} alt=""
                                className='rounded-md'
                                 />

                                

                                <p>
                                    {video.title}
                                </p>

                                <Button active={true} linkto={""}>
                                    Watch on Youtube
                                </Button>


                               
                            </div>
                        ))
                    }



                </div>


            </div>


        </>
    )
}

export default Blog