import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 px-8'>
            <div className='md:px-6 px-4 w-full h-full flex md:flex-row flex-col gap-4 items-center'>
                <div className='content w-[50%]  h-full flex flex-col gap-4'>
                    <h2 className='font-mono text-5xl pt-5 pl-4 2xl:max-w-lg w-lg leading-16 text-primary '>From Bean to Brew
                        <Image src='/images/about-heading-image.png' alt="icon" width={210} height={55} className=' w-[210px] h-[55px] rounded-[100px] inline-block ml-2' /></h2>
                    <p className=' text-lg leading-8 px-4 2xl:max-w-xl w-xl'>At [Your Coffee Brand Name], we’re passionate about every bean, every brew, and every smile it brings. <br /> We source the finest beans from sustainable farms around the world, roast them with care, and serve them with love. <br />
Whether you’re enjoying a cup in our cozy café or brewing at home, our mission is to deliver unforgettable flavors and a moment of joy in every sip.</p>
                                        </div>
            </div>

            <div className='w-[50%] mx-auto flex justify-center pr-20 items-center h-full'>
                <div className='w-full h-full mx-auto flex justify-center items-center relative'>

                    <div className='w-[237px] h-[393px] flex justify-center items-center absolute -left-12 '>
                        <Image src='/images/about-coffee-1.png' alt="icon" width={237} height={393} className='w-[237px] h-[393px]' />
                    </div>
                    <div className='w-[272px] h-[447px] flex justify-center items-center z-10'>
                        <Image src='/images/about-coffee-2.png' alt="icon" width={272} height={447} className='w-[272px] h-[447px]' />
                    </div>
                    <div className='w-[254px] h-[393px] flex justify-center items-center absolute -right-12 bottom-6 '>
                        <Image src='/images/about-coffee-3.png' alt="icon" width={254} height={393} className='w-[254px] h-[393px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
