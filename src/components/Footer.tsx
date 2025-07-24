

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const nav_data = [
        {
            link: '/',
            name: 'Home',
        },
        {
            link: '/about',
            name: 'About Us',
        },
        {
            link: '/services',
            name: 'Services',
        },
        {
            link: '/process',
            name: 'Process',
        },
        {
            link: '/testimonial',
            name: 'Testimonials',
        },
        {
            link: '/pricing',
            name: 'Pricing Plans',
        },
        {
            link: '/contact',
            name: 'Contact Us',
        },

    ];

    const services_data = [
        'Managed Security Services',
        'Network Security',
        'Cloud Security',
        'Data Protection',
        'Compliance'
    ]
    return (
        <div className="w-full bg-secondary  h-auto gap-5 flex justify-center items-center py-10 px-3">
            <div className=" w-[80%] max-lg:w-[95%] max-md:w-full  h-auto flex flex-col gap-10 justify-center items-center">
                <div className="footerContent max-sm:justify-center w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between mb-3 gap-6 ">
                    <div className="left w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
                        {/* Logo */}
                        <div className="logo flex flex-col gap-10 ">
                            <Image src='/images/footer-logo.png' alt="image" width={220} height={110} />
                            <div className="flex gap-3 flex-wrap h-auto px-3">
                                <Image src='/images/facebook.png' alt="image" width={30} height={30} />
                                <Image src='/images/twitter.png' alt="image" width={30} height={30} />
                                <Image src='/images/linkedin.png' alt="image" width={30} height={30} />
                                <Image src='/images/instagram.png' alt="image" width={30} height={30} />
                                <Image src='/images/whatsapp.png' alt="image" width={30} height={30} />

                            </div>
                        </div>

                    </div>

                    <div className="max-sm:w-full max-sm:py-3 w-full p-3 h-auto ">
                        <h4 className='font-mono lg:text-2xl text-xl font-bold text-[#BA23D2] w-fit'>Quick Links</h4>
                        <ul className="list-none text-base py-2  gap-2 flex flex-col ">
                            {
                                nav_data.map((nav, index) => (
                                    <li key={index} className="font-normal">
                                        <Link href={nav.link} className="">
                                            {nav.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="middle  max-sm:py-3 w-full p-3 h-auto">
                        <h4 className='font-mono lg:text-2xl text-xl font-bold text-[#BA23D2] w-fit'>Our Services</h4>
                        <ul className="list-none py-2 gap-2 flex flex-col ">
                            
                             {
                                services_data.map((services, index) => (
                                    <li key={index} className="text-sm  font-normal">
                                        {services}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="left max-sm:w-full max-sm:px-3 gap-10  max-sm:py-3 w-full p-3  h-auto max-[900px]:w-full">
                        <h4 className='font-mono lg:text-2xl text-xl font-bold text-[#BA23D2] w-fit'> Contact Information</h4>
                        <ul className="list-none py-2 gap-2 flex flex-col ">
                            <li className="text-sm  font-normal ">
                               [Your Office Location]
                            </li>
                            <li className="text-sm  font-normal">
                              [Your Phone Number]
                            </li>
                            <li className="text-sm  font-normal">
                               contact@[yourdomain].com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright flex gap-4 justify-center items-center w-full h-auto py-5">
                    <p className="md:text-sm text-xs text-center">© 2021 all copyright reserved. All Rights Reserved. <Link href='/' className="underline"> Rootlet Solution</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Footer;