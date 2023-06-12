import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';

function Footer() {
  return (
    <div className='text-white bg-black'>
      <Fade directon='up'>
      <div className='xl:w-[76%] md:w-[85%] w-[93%] m-auto'>
            <div className='flex justify-between items-center py-5'>
                <div>
                    <Image src='/Images/logo.svg' width='100' height='100' alt='logo' />
                </div>
                <div className='flex flex-wrap lg:gap-4 gap-0 md:text-xs sm:pl-0 pl-5 justify-end'>
                    <p className='footer-nav'><Link href='/'>Quick Links</Link></p>
                    <p className='footer-nav'><Link href='/'>Home</Link></p>
                    <p className='footer-nav'><Link href='/'>Admissions</Link></p>
                    <p className='footer-nav'><Link href='/'>Program Course</Link></p>
                    <p className='footer-nav'><Link href='/'>FAQ</Link></p>
                    <p className='footer-nav'><Link href='/'>Blog</Link></p>
                    <p className='footer-nav'><Link href='/'>Careers</Link></p>
                </div>
            </div>
            <hr/>
            <div className='py-12'>
                <div className='grid sm:grid-cols-4 grid-cols-1 justify-between items-center sm:gap-1 gap-4'>
                    <div className='lg:text-sm md:text-xs sm:text-left text-center'>
                        <p><a href="/">Canada</a></p>
                        <p><a href="/">Chemin D’aigremont</a></p>
                        <p><a href="/">Lorraine Quebec</a></p>
                        <p><a href="/">Republic Of Benin - Lot 29</a></p>
                        <p><a href="/">PK Cotonou</a></p>
                    </div>
                    <div className='flex lg:gap-4 md:gap-2 gap-3 items-center sm:justify-start justify-center'>
                        <span className='bg-white sm:h-7 sm:w-7 h-6 w-6 rounded-full flex items-center justify-center'>
                        <Image src='/Images/call.svg' width='11' height='11' alt='contact' />
                        </span>
                        <span className='md:text-xs lg:text-sm'><a href="/">P+229-54335532</a></span>
                    </div>
                    <div className='flex lg:gap-4 md:gap-2 gap-3 items-center sm:justify-start justify-center'>
                        <span className='bg-white sm:h-7 sm:w-7 h-6 w-6 rounded-full flex items-center justify-center'>
                        <Image src='/Images/email.svg' width='13' height='13' alt='contact' />
                        </span>
                        <span className='md:text-xs lg:text-sm'><a href="/">info@email.com</a></span>
                    </div>
                    <div>
                    <p className='sm:text-right text-center sm:text-sm text-lg pb-1 font-semibold sm:mt-0 mt-4'>Subscribe</p>
                        <div className='w-[100%] bg-white rounded-3xl p-[3px] sm:h-[39.5px] h-[47px]'> 
                            <div className='bg-primary  float-right rounded-3xl text-white font-semibold text-center lg:text-sm md:text-xs py-2 px-4 cursor-pointer'>
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:py-10 md:pb-7 pb-3'>
                <div className='flex sm:flex-row flex-col justify-between sm:gap-0 gap-7 items-center'>
                    <div className='flex flex-wrap lg:gap-10 md:gap-6 gap-5 sm:justify-start justify-center lg:text-sm md:text-xs text-xs'>
                        <div><a href="/">loremipsum© 2023. All Rights Reserved.</a></div>
                        <div><a href="/">Privacy Policy</a></div>
                        <div><a href="/">Terms & Condition</a> </div>
                        <div><a href="/">Site Map</a></div>
                    </div>
                    <div className='flex flex-row gap-4 lg:text-sm md:text-xs'>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                        <a href="/" className='sm:w-[15px] w-[6px] sm:h-[15px] h-[6px] '><Image src='/Images/facebook.svg' width='10' height='10' alt='social_icon' /></a>
                        </div>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                        <a href="/" className='sm:w-[15px] w-[10px] sm:h-[15px] h-[10px] '><Image src='/Images/twitter.svg' width='15' height='15' alt='social_icon' /></a>
                        </div>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                        <a href="/" className='sm:w-[15px] w-[9px] sm:h-[15px] h-[9px] '><Image src='/Images/instagram.svg' width='15' height='15' alt='social_icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </Fade>
    </div>
  )
}

export default Footer;
