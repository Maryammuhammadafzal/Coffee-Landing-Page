import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const BlogPage = () => {
    const blog_data = [
      '/images/blog-image-1.png',
      '/images/blog-image-2.png',
      '/images/blog-image-3.png',
    ];
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col justify-center gap-12 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 leading-16 text-primary '>Behind the Beans</h2>
                </div>

                <div className='xl:w-[90%] lg:w-[95%] w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto justify-center items-center h-full'>
                    {
                        blog_data.map((blog, index) => (
                            <Card key={index} className='flex justify-start h-[450px] items-center bg-transparent shadow-none w-[390px] rounded-[20px] p-0'>
                                <CardContent className='flex relative justify-start h-full items-center w-full text-center gap-8 p-0'>
                                    <Image src={blog} alt="icon" width={115} height={115} className='w-full h-full object-cover object-center' />
                                    <div className='flex items-end justify-center w-full  absolute h-full top-0 left-0'>
                                        
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BlogPage
