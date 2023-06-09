import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <div className='text-white bg-black'>
      <div className='w-[76%] m-auto'>
            <div className='flex justify-between items-center py-5'>
                <div>
                    <Image src='/Images/logo.svg' width='100' height='100' alt='logo' />
                </div>
                <div className='flex gap-4'>
                    <p className='p-2'><Link href='/'>Quick Links</Link></p>
                    <p className='p-2'><Link href='/'>Home</Link></p>
                    <p className='p-2'><Link href='/'>Admissions</Link></p>
                    <p className='p-2'><Link href='/'>Program Course</Link></p>
                    <p className='p-2'><Link href='/'>FAQ</Link></p>
                    <p className='p-2'><Link href='/'>Blog</Link></p>
                    <p className='p-2'><Link href='/'>Careers</Link></p>
                </div>
            </div>
            <hr/>
            <div className='py-12'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-1'>
                    <div className='text-sm'>
                        <p>Canada</p>
                        <p>Chemin D’aigremont</p>
                        <p>Lorraine Quebec</p>
                        <p>Republic Of Benin - Lot 29</p>
                        <p>PK Cotonou</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='bg-white h-7 w-7 rounded-full flex items-center justify-center'>
                        <Image src='/Images/call.svg' width='11' height='11' alt='contact' />
                        </span>
                        <span>P+229-54335532</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='bg-white h-7 w-7 rounded-full flex items-center justify-center'>
                        <Image src='/Images/email.svg' width='13' height='13' alt='contact' />
                        </span>
                        <span>info@email.com</span>
                    </div>
                    <div>
                    <p className='text-right pb-1 font-semibold'>Subscribe</p>
                        <div className='w-[100%] bg-white rounded-3xl p-[3px] h-[46.5px]'> 
                            <div className='bg-primary  float-right rounded-3xl text-white font-semibold text-center py-2 px-4'>
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-10'>
                        <div> loremipsum© 2023. All Rights Reserved. </div>
                        <div>Privacy Policy</div>
                        <div>Terms & Condition </div>
                        <div>Site Map</div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='bg-white h-9 w-9 rounded-full flex items-center justify-center'>
                            <Image src='/Images/facebook.svg' width='10' height='10' alt='social_icon' />
                        </div>
                        <div className='bg-white h-9 w-9 rounded-full flex items-center justify-center'>
                            <Image src='/Images/twitter.svg' width='15' height='15' alt='social_icon' />
                        </div>
                        <div className='bg-white h-9 w-9 rounded-full flex items-center justify-center'>
                            <Image src='/Images/instagram.svg' width='15' height='15' alt='social_icon' />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer;
