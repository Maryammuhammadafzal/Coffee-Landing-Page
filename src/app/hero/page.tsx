import Header from '@/components/Header'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-auto min-h-screen flex flex-col justify-center items-center py-6 px-8'>
      <div className='w-full min-h-screen relative'>
        <Image src='/images/hero-image.png' alt='image' width={1000} height={200} className='w-full h-full' />

        {/* Header */}
        <div className='w-full h-auto min-h-[100px] absolute top-0 left-0 flex justify-center items-center'>
          <Header />
        </div>
        {/* Content */}
        <div className='content absolute bottom-3 left-0 max-w-md pl-12'>
          <h1 className='font-mono leading-16 text-5xl'>Crafted for Coffee Lovers</h1>
        </div>
      </div>

      <div className=' flex w-full justify-between h-auto gap-6 pl-12'>

        <div className='w-auto h-auto'>
          <div className='flex flex-col gap-3 max-w-xs h-auto'>
            <p className='text-xl leading-9'>Experience the art of coffee — freshly roasted, ethically sourced, and brewed to perfection.</p>
            <Button className='w-[220px] text-lg h-[50px] bg-primary text-primary-foreground'>Shop Now</Button>
          </div>

        </div>
        <div className='w-auto h-auto flex gap-6'>
          <div className='max-w-xs w-xs h-auto'>
            <Image src='/images/vector-1.png' alt='image' width={300} height={200} className='w-full h-full' />
          </div>

          <div className='w-md h-auto bg-primary rounded-[400px] flex justify-center items-center'>
            <TestimonialCarousel/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default HeroPage
