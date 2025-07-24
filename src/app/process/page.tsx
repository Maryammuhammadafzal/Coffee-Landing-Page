import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ProcessPage = () => {
    const product_data = [
        {
            image : '/images/product-image-1.png',
            title: 'Sourcing',
            description: 'Carefully selecting the best beans from responsible farmers.'
        },
        
        {
            image : '/images/product-image-2.png',
            title: 'Roasting',
            description: 'Artfully roasting to unlock rich, nuanced flavors.'
        },
        
        {
            image : '/images/product-image-3.png',
            title: 'Brewing',
            description: 'Mastering techniques to bring out the best in every cup.'
        },
        
        {
            image : '/images/product-image-4.png',
            title: 'Enjoying',
            description: 'Sharing the joy of great coffee with you.'
        },
        
    ];
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col justify-center gap-10 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 leading-16 text-primary '>Roasted to Perfection</h2>
                </div>

                <div className='xl:w-[90%] lg:w-[95%] w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto justify-center items-center h-full'>
                    {
                        product_data.map((product, index) => (
                            <Card key={index} className='flex justify-start min-h-[284px] items-center bg-transparent shadow-none w-auto h-full max-w-sm p-0'>
                                <CardContent className='flex flex-col justify-start h-auto items-center text-center gap-2 p-0'>
                                   <div className='flex justify-center items-end w-[290px] h-[290px] '>
                                    <Image src={product.image} alt="icon" width={152} height={270} style={{ width: `${product.width}px`, height: `${product.height}px` }} />
                                   </div>
                                    <h2 className='font-mono text-3xl'>{product.title}</h2>
                                    <p className=' text-base max-w-xs px-2'>{product.description}</p>
                                    <p className='text-xl text-primary text-center'>{product.price}</p>
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
