import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center py-6 px-8'>
      <div className='w-ful min-h-screen'>
        <Image src='/images/hero-image.png' alt='image' width={200} height={200} className='w-full h-full' />
      </div>
    </div>
  )
}

export default HeroPage
