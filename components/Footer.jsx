import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';

function Footer() {
  return (
    <div className='text-white bg-black'>
      <Fade >
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
                        <p><Link href="/">Canada</Link></p>
                        <p><Link href="/">Chemin D’aigremont</Link></p>
                        <p><Link href="/">Lorraine Quebec</Link></p>
                        <p><Link href="/">Republic Of Benin - Lot 29</Link></p>
                        <p><Link href="/">PK Cotonou</Link></p>
                    </div>
                    <div className='flex lg:gap-4 md:gap-2 gap-3 items-center sm:justify-start justify-center'>
                        <div className='bg-white sm:h-7 sm:w-7 h-6 w-6 rounded-full flex items-center justify-center'>
                        <Image src='/Images/call.svg' width='11' height='11' alt='contact' />
                        </div>
                        <div className='md:text-xs lg:text-sm'><Link href="/">P+229-54335532</Link></div>
                    </div>
                    <div className='flex lg:gap-4 md:gap-2 gap-3 items-center sm:justify-start justify-center'>
                        <div className='bg-white sm:h-7 sm:w-7 h-6 w-6 rounded-full flex items-center justify-center'>
                        <Image src='/Images/email.svg' width='13' height='13' alt='contact' />
                        </div>
                        <div className='md:text-xs lg:text-sm'><Link href="/">info@email.com</Link></div>
                    </div>
                    <div>
                    <p className='sm:text-right text-center sm:text-sm text-lg pb-1 font-semibold sm:mt-0 mt-4'>Subscribe</p>
                        <div className='w-[100%] bg-white rounded-3xl p-[3px] sm:h-[40.5px] h-[47px]'> 
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
                        <div><Link href="/">loremipsum© 2023. All Rights Reserved.</Link></div>
                        <div><Link href="/">PrivLinkcy Policy</Link></div>
                        <div><Link href="/">Terms & Condition</Link> </div>
                        <div><Link href="/">Site MLinkp</Link></div>
                    </div>
                    <div className='flex flex-row gap-4 lg:text-sm md:text-xs'>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                            <Link href="/"><Image src='/Images/facebook.svg' width='0' height='0' alt='social_icon' sizes="100vw"
                            className="w-full h-auto" /></Link>
                        </div>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                            <Link href="/"><Image src='/Images/twitter.svg' width='0' height='0'sizes="100vw"
                            className="w-full h-auto" alt='social_icon' /></Link>
                        </div>
                        <div className='bg-white lg:h-9 md:h-7 lg:w-9 md:w-7 h-5 w-5 rounded-full flex items-center justify-center'>
                            <Link href="/"><Image src='/Images/instagram.svg' width='0' height='0' alt='social_icon' sizes="100vw"
                            className="w-full h-auto" /></Link>
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
