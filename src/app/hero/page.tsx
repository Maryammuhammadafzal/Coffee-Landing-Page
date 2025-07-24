import Header from '@/components/Header'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-auto min-h-screen flex flex-col justify-center items-center py-6 xl:px-8 px-4'>
      <div className='w-full min-h-screen relative'>
        <Image src='/images/hero-image.png' alt='image' width={1000} height={200} className='w-full h-full' />

        {/* Header */}
        <div className='w-full h-auto min-h-[100px] absolute top-0 left-0 flex justify-center items-center'>
          <Header />
        </div>
        {/* Content */}
        <div className='content absolute bottom-3 left-0 max-w-md 2xl:pl-12 xl:pl-8 pl-3'>
          <h1 className='font-mono leading-16 text-5xl'>Crafted for Coffee Lovers</h1>
        </div>
      </div>

      <div className=' flex w-full justify-between h-auto gap-6 2xl:pl-12 xl:pl-8 pl-3'>

        <div className='w-auto h-auto'>
          <div className='flex flex-col gap-3 max-w-xs h-auto'>
            <p className='text-xl leading-9'>Experience the art of coffee — freshly roasted, ethically sourced, and brewed to perfection.</p>
            <Button className='w-[220px] text-lg h-[50px] bg-primary text-primary-foreground'>Shop Now</Button>
          </div>

        </div>
        <div className='w-auto h-auto xl:pt-2 flex gap-6'>
          <div className='max-w-xs relative xl:w-xs w-[300px] h-auto'>
            <Image src='/images/vector-1.png' alt='image' width={300} height={200} className='w-full h-full' />
            <div className='w-full h-full flex absolute top-0 left-0'>
              <div className='content w-full h-full p-2 text-background flex flex-col gap-3 relative'>
                <div className='arrow w-[107px] h-[107px] flex justify-center items-center absolute top-0 right-0 rounded-full bg-background text-'>
                  <Image src='/images/up-right-icon.png' alt="icon" width={30} height={30} />
                </div>

                <h2 className='font-mono text-3xl xl:pt-5 pl-4 max-w-[200px]'>Visit Our Café</h2>
                <p className=' text-lg leading-8 px-4'>Address: [123 Brew Street, Your City] <br />
                  Hours: Mon–Fri: 7am–7pm | Sat–Sun: 8am–8pm <br />
                  Phone: [Your Phone Number]</p>
              </div>
            </div>
          </div>

          <div className='xl:w-md w-sm h-auto bg-primary rounded-[400px] flex justify-center items-center'>
            <TestimonialCarousel />
          </div>


        </div>
      </div>
    </div>
  )
}

export default HeroPage
