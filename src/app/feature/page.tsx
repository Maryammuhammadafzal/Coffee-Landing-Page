import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FeaturePage = () => {
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex flex-col gap-4 items-center'>
                <div className='content w-full  h-full flex flex-col gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 leading-16 text-primary '>From Bean to Brew</h2>
                </div>
            </div>

            <div className='w-full mx-auto flex justify-center pr-20 items-center h-full'>
              {
                feature_data.map((feature , index) => (
                    <Card className=''></Card>
                ))
              }
            </div>
        </div>
    )
}

export default FeaturePage
