import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-full flex '>
      <Link href='/'  className='pl-8'>
      <Image src='/images/logo.png' alt='logo' width={270} height={70} />
      </Link>
    </div>
  )
}

export default Header
