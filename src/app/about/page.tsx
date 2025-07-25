import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-full flex justify-center items-center lg:py-20 md:py-15 sm:py-10 py-5 lg:px-8 px-2'>
            <div className='w-full h-full flex md:flex-row justify-between flex-col gap-4 items-center'>
                <div className='content lg:w-[50%] md:w-[40%] w-full h-full flex flex-col gap-4'>
                    <h2 className='font-mono lg:text-5xl text-4xl pt-5 lg:pl-4 max-w-lg leading-16 text-primary '>From Bean to Brew
                        <Image src='/images/about-heading-image.png' alt="icon" width={210} height={55} className='lg:w-[210px] w-[150px] h-[55px] rounded-[100px] inline-block ml-2' /></h2>
                    <p className='lg:text-lg text-base lg:leading-8 leading-7 lg:px-4 max-w-xl '>{`At [Your Coffee Brand Name], we’re passionate about every bean, every brew, and every smile it brings. <br /> We source the finest beans from sustainable farms around the world, roast them with care, and serve them with love. <br />
Whether you’re enjoying a cup in our cozy café or brewing at home, our mission is to deliver unforgettable flavors and a moment of joy in every sip.`}
</p>
                </div>


                <div className='lg:w-[50%] md:w-[60%] w-full flex justify-center items-center h-full'>
                    <div className='w-full h-full flex justify-center items-center relative'>

                        <div className='w-auto h-auto flex justify-center items-center absolute 2xl:left-[15%] xl:left-[12%] lg:left-[9%] md:left-[5%] sm:left-[16%] xs:left-[10%] left-[1%]'>
                            <Image src='/images/about-coffee-1.png' alt="icon" width={237} height={393} className='w-[237px] h-[393px]' />
                        </div>
                        <div className='w-auto h-auto flex justify-center items-center z-10'>
                            <Image src='/images/about-coffee-2.png' alt="icon" width={272} height={447} className='w-[272px] h-[447px]' />
                        </div>
                        <div className='w-auto h-auto flex justify-center items-center absolute 2xl:right-[15%] xl:right-[12%] lg:right-[9%] md:right-[5%] bottom-6 sm:right-[16%] xs:right-[10%] right-[1%]'>
                            <Image src='/images/about-coffee-3.png' alt="icon" width={254} height={393} className='w-[254px] h-[393px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
