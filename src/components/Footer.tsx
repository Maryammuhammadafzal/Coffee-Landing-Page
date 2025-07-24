

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

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
            link: '/product',
            name: 'Products',
        },
        {
            link: '/process',
            name: 'Process',
        },
        {
            link: '/blog',
            name: 'Blogs',
        },
        {
            link: '/contact',
            name: 'Contact Us',
        },

    ];
    return (
        <div className="w-full  h-auto gap-5 flex justify-center items-center py-10 px-3">
            <div className=" w-[80%] max-lg:w-[95%] max-md:w-full  h-auto flex flex-col gap-10 justify-center items-center">
                <div className="footerContent w-full h-auto flex mb-3 gap-6 ">
                    <div className="left w-auto min-w-md max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
                        {/* Logo */}
                        <div className="logo flex flex-col gap-6 ">
                            <Image src='/images/logo.png' alt="image" width={220} height={110} />
                            <div className="flex gap-4 text-primary flex-wrap h-auto px-3">
                                <FaFacebook size={24} />
                                <FaXTwitter size={24} />
                                <FaSquareInstagram size={24} />
                                <FaLinkedin size={24} />
                                <FaWhatsapp size={24} />

                            </div>
                        </div>

                    </div>

                    <div className="max-sm:w-full max-sm:py-3 min-w-[240px] p-3 h-auto ">
                        <h4 className='font-mono lg:text-xl text-lg font-bold text-primary w-fit'>Quick Links</h4>
                        <ul className="list-none text-base py-2 gap-[2px] flex flex-col ">
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
                    <div className="left max-sm:w-full max-sm:px-3 gap-10  max-sm:py-3 w-full p-3  h-auto max-[900px]:w-full">
                        <h4 className='font-mono lg:text-xl text-lg font-bold text-primary w-fit'> Contact Information</h4>
                        <ul className="list-none py-2 gap-2 flex flex-col ">
                            <li className="text-base  font-normal ">
                                [123 Brew Street, Your City]
                            </li>
                            <li className="text-base font-normal">
                                Mon–Fri: 7am–7pm | Sat–Sun: 8am–8pm
                            </li>
                            <li className="text-base font-normal">
                                [Your Phone Number]
                            </li>
                            <li className="text-base font-normal">
                                <Button className='w-[220px] text-lg h-[50px] bg-primary text-primary-foreground'>Get Direction</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright flex gap-4 justify-center items-center w-full h-auto pt-4">
                    <p className="md:text-sm text-xs text-center">© 2021 all copyright reserved. All Rights Reserved. <Link href='/' className="underline"> Rootlet Solution</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Footer;