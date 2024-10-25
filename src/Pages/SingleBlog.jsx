import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from '../client'
import NavBar from './NavBar'
import { PortableText } from '@portabletext/react';


const SingleBlog = () => {
    const [singleBlog, setSingleBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"]{
            title,
           
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

            }`
        ).then((data) => {
            setSingleBlog(data[0])
            setIsLoading(false)
        })

    }, [slug])


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!singleBlog) {
        return <h1>No blog found</h1>;
    }


    return (
        <>

<NavBar textstyle={"text-[#000000]"} />

            <section className='bg-[#FFFFFF] gap-10 pb-20 flex flex-col py-14 md:px-20 px-10  justify-center '>

                <h1 className='text-[#000000]  text-4xl'>
                    {singleBlog.title}

                </h1>

                <img

                    src={singleBlog.mainImage.asset.url}
                    alt=''
                    className='w-[800px]'
                />

                <div className='flex gap-3 items-center '>
                    <img
                        src={singleBlog.authorImage}
                        alt=''
                        className='w-[80px] h-[80px] object-cover rounded-full border-[1px] border-[#FFC8A4]  '
                    />

                    <p
                        className='text-[#000000] text-3xl '
                    >
                        {singleBlog.authorName}
                    </p>


                </div>

                <div className='text-[#898989]  text-2xl'>
                    <PortableText value={singleBlog.body} />
                </div>

            </section>

        
        </>
    )
}

export default SingleBlog