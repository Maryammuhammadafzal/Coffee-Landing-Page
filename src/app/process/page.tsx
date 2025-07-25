import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ProcessPage = () => {
    const process_data = [
        {
            image: '/images/process-image-1.png',
            title: 'Sourcing',
            description: 'Carefully selecting the best beans from responsible farmers.'
        },

        {
            image: '/images/process-image-2.png',
            title: 'Roasting',
            description: 'Artfully roasting to unlock rich, nuanced flavors.'
        },

        {
            image: '/images/process-image-3.png',
            title: 'Brewing',
            description: 'Mastering techniques to bring out the best in every cup.'
        },

        {
            image: '/images/process-image-4.png',
            title: 'Enjoying',
            description: 'Sharing the joy of great coffee with you.'
        },

    ];
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 xl:px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col justify-center gap-12 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono lg:text-5xl sm:text-4xl text-3xl pt-5 pl-4 lg:leading-16 leading-10 text-center text-primary  '>Our Process</h2>
                </div>

                <div className='xl:w-[90%] lg:w-[95%] w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto justify-center items-center h-full'>
                    {
                        process_data.map((process, index) => (
                            <Card key={index} className='flex justify-start mx-auto min-h-[284px] items-center bg-transparent shadow-none w-auto h-full max-w-sm p-0'>
                                <CardContent className='flex flex-col justify-start h-auto items-center text-center gap-8 p-0'>
                                    <Image src={process.image} alt="icon" width={115} height={115} />
                                    <div className='flex flex-col w-full h-auto'>
                                        <h2 className='font-mono text-2xl'>{process.title}</h2>
                                        <p className=' text-base max-w-xs px-2'>{process.description}</p>
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

export default ProcessPage
