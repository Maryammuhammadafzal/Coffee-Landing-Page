import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-auto min-h-screen flex flex-col justify-center items-center py-6 px-8'>
      <div className='w-ful min-h-screen relative'>
        <Image src='/images/hero-image.png' alt='image' width={200} height={200} className='w-full h-full' />

        {/* Header */}
        <div className='w-full h-auto min-h-[100px] absolute top-0 left-0 flex justify-center items-center'>
          <Header />
        </div>
        {/* Content */}
        <div className='content absolute bottom-0 left-0 max-w-sm pl-6'>
          <h1 className='font-mono text-5xl'>Crafted for Coffee Lovers</h1>
        </div>
      </div>

      <div className=' flex w-full h-auto gap-6 pl-6'>

        <div className='flex flex-col gap-3 max-w-sm h-auto'>
          <p className='text-xl leading-10'>Experience the art of coffee — freshly roasted, ethically sourced, and brewed to perfection.</p>
          <Button className='w-[220px] h-[50px] bg-primary text-primary-foreground'>Shop Now</Button>
        </div>

<div className='max-w-xs h-auto bg-secondary'></div>
      </div>
    </div>
  )
}

export default HeroPage
