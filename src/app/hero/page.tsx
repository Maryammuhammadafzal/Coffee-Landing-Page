import Header from '@/components/Header'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-auto lg:min-h-screen flex flex-col justify-center items-center py-6 xl:px-8 px-4'>
      <div className='w-full relative'>
        <Image src='/images/hero-image.png' alt='image' width={1000} height={200} className='w-full h-full' />

        {/* Header */}
        <div className='w-full lg:min-h-[100px] h-[80px] absolute lg:top-0 top-2 left-0 flex justify-center items-center'>
          <Header />
        </div>
        {/* Content */}
        <div className='content absolute -bottom-6 left-0 lg:max-w-md max-w-sm 2xl:pl-12 xl:pl-8 lg:pl-3'>
          <h1 className='font-mono lg:leading-16 leading-13 xl:text-5xl lg:text-[40px] text-4xl'>Crafted for Coffee Lovers</h1>
        </div>
      </div>

      <div className=' flex w-full justify-between h-auto gap-6 2xl:pl-12 xl:pl-8 pl-3 pt-5'>

        <div className='w-auto h-auto'>
          <div className='flex flex-col gap-3 lg:pt-0 pt-6 xl:max-w-xs w-xs h-auto'>
            <p className='xl:text-xl text-lg xl:leading-9 leading-8'>Experience the art of coffee — freshly roasted, ethically sourced, and brewed to perfection.</p>
            <Button className='w-[220px] text-lg h-[50px] bg-primary text-primary-foreground'>Shop Now</Button>
          </div>

        </div>
        <div className='w-auto h-auto flex lg:flex-row flex-col gap-6'>
          <div className=' lg:w-auto w-full xl:w-xs relative bg-secondary rounded-[20px] lg:h-auto h-[180px]'>
            <Image src='/images/vector-1.png' alt='image' width={300} height={200} className='w-full h-full lg:block hidden' />
            <div className='w-full h-full flex absolute top-0 left-0'>
              <div className='content w-full h-full text-background flex flex-col gap-2 relative'>
                <div className='arrow xl:w-[107px] xl:h-[107px] lg:w-[80px] lg:h-[80px] w-[100px] h-[100px] flex justify-center items-center absolute lg:top-0 lg:right-0 -top-3 -right-3 rounded-full bg-background '>
                  <Image src='/images/up-right-icon.png' alt="icon" width={30} height={30} />
                </div>

                <h2 className='font-mono xl:text-3xl text-2xl xl:pt-5 lg:pt-2 pt-4 pl-4 max-w-[200px]'>Visit Our Café</h2>
                <p className='xl:text-xl text-lg lg:leading-8 leading-7 px-4'>Address: [123 Brew Street, Your City] <br />
                  Hours: Mon–Fri: 7am–7pm | Sat–Sun: 8am–8pm <br />
                  Phone: [Your Phone Number]</p>
              </div>
            </div>
          </div>

          <div className='lg:w-md w-full h-auto bg-primary rounded-[400px] flex justify-center items-center'>
            <TestimonialCarousel />
          </div>


        </div>
      </div>
    </div>
  )
}

export default HeroPage
