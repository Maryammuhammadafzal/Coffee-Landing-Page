import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex md:flex-row flex-col gap-5 justify-between items-center'>
                <div className='content w-1/2 h-full flex flex-col gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 max-w-lg leading-16 text-primary '>From Bean to Brew
                        <Image src='/images/about-heading-image.png' alt="icon" width={210} height={55} className=' w-[210px] h-[55px] rounded-[100px] inline-block ml-2' /></h2>
                    <p className=' text-lg leading-8 px-4 max-w-xl pr-10'>At [Your Coffee Brand Name], we’re passionate about every bean, every brew, and every smile it brings. <br /> We source the finest beans from sustainable farms around the world, roast them with care, and serve them with love. <br />
Whether you’re enjoying a cup in our cozy café or brewing at home, our mission is to deliver unforgettable flavors and a moment of joy in every sip.</p>
                                        </div>
            </div>
        </div>
    )
}

export default AboutPage
