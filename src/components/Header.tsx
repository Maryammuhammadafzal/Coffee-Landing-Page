import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-full flex '>
      <Link href='/'  className='2xl:pl-8 xl:pl-3 pl-2'>
      <Image src='/images/logo.png' alt='logo' width={270} height={70} />
      </Link>
    </div>
  )
}

export default Header
