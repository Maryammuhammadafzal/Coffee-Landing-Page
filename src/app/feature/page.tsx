import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FeaturePage = () => {
    const feature_data = [
        {
            title: 'Ethically Sourced Beans',
            description: 'We partner with farmers who care about the land and their craft, ensuring fair wages and environmentally friendly practices.',
        },
        {
            title: 'Freshly Roasted',
            description: 'Our beans are roasted in small batches to bring out their unique character and aroma.',
        },
        {
            title: ' Perfectly Brewed',
            description: 'From pour-overs to espresso shots, we believe that every method deserves mastery.',
        },
    ];
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col gap-4 items-center'>
                <div className='content w-full  h-full flex flex-col gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 leading-16 text-primary '>From Bean to Brew</h2>
                </div>
            </div>

            <div className='w-full mx-auto flex justify-center pr-20 items-center h-full'>
                {
                    feature_data.map((feature, index) => (
                        <Card className='border border-primary flex justify-center items-center bg-transparent shadow-none w-auto h-auto max-w-xs'>
                            <CardContent className='flex flex-col gap-3'>
                                <h2 className='font-mono text-3xl'>{feature.title}</h2>
                                <p className=' text-lg leading-8 px-4'>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturePage
