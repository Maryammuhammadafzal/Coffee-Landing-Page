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
            <div className='md:px-6 px-4 w-full h-full flex flex-col justify-center gap-10 items-center'>
                <div className='content w-full justify-center items-center h-full flex gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 leading-16 text-primary '>Roasted to Perfection</h2>
                </div>

                <div className='w-full flex gap-4 justify-center items-center h-full'>
                    {
                        feature_data.map((feature, index) => (
                            <Card key={index} className='border border-primary flex justify-center min-h-[284px] items-center bg-transparent shadow-none w-auto h-auto max-w-xs'>
                                <CardContent className='flex flex-col text-center gap-3'>
                                    <h2 className='font-mono text-3xl'>{feature.title}</h2>
                                    <p className=' text-base '>{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default FeaturePage
