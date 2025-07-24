import { Button } from '@/components/ui/button';
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
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5'>
            <div className='xl:px-6 px-4 w-full h-full flex flex-col justify-center gap-12 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono text-5xl pt-5 leading-16 text-primary '>Behind the Beans</h2>
                </div>

                <div className='xl:w-[95%] w-full flex flex-wrap gap-10 justify-center items-center h-full'>
                    {
                        blog_data.map((blog, index) => (
                         <div className='w-auto h-auto flex justify-center items-center'>
                               <Card key={index} className='flex justify-center h-[450px] bg-cover bg-center items-center bg-transparent shadow-none w-[390px] rounded-[20px] p-0' style={{ backgroundImage: `url('${blog}')`}}>
                                <CardContent className='flex justify-center h-full items-center w-full rounded-[20px] text-center gap-8 p-0' >
                                    {/* <Image src={blog} alt="icon" width={115} height={115} className='w-full h-full rounded-[20px] object-cover object-center' /> */}
                                    <div className='flex py-12 items-end justify-center w-full h-full'>
                                         <Button className='w-[220px] text-lg h-[50px] bg-primary text-primary-foreground'>Read Full Blog</Button>
                                    </div>
                                </CardContent>
                            </Card>
                         </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BlogPage
