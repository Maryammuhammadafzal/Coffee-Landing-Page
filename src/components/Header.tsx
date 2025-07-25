import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-full flex '>
      <Link href='/'  className='2xl:pl-8 xl:pl-8 lg:pl-2'>
      <Image src='/images/logo.png' alt='logo' width={270} height={70} className='lg:w-[210px] md:w-[170px] w-[110px]' />
      </Link>
    </div>
  )
}

export default Header
