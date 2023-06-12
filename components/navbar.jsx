import Image from 'next/image';
import Link from 'next/link';
import Hamburger from 'hamburger-react'
import React,{useEffect, useState} from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const open = () =>{
    if(isOpen){
      setOpen(false);
      
    }else{
      setOpen(true);
    }
  }

 useEffect(()=>{
  const docBody = document.documentElement;
  isOpen ? docBody.classList.add('overflow-hidden') : docBody.classList.remove('overflow-hidden');
  document.querySelector('.hamburger-react')
 },[isOpen])

  return (
        <div>
          <div className='p-1 hidden lg:block'>
            <div className='flex justify-between items-center xl:mx-20 lg:mx-10'>
              <div className='p-2'>
                <Link href='/'><Image src="/Images/logo.svg" width="100" height='50' alt='logo' /></Link>
              </div>
              <div className='flex gap-3'>
                  <div className='nav border-t-2 border-gray-50'><Link href='/'>Home</Link></div>
                  <div className='nav border-t-2 border-transparent'><Link href='/'>Admissions</Link></div>
                  <div className='nav'><Link href='/'>Corporate Training</Link></div>
                  <div className='nav'><Link href='/'>Program & Courses</Link></div>
                  <div className='nav'><Link href='/'>About Us</Link></div>
                  <div className='nav'><Link href='/'>Blog</Link></div>
              </div>
              <div className='text-primary bg-white py-1 px-7 rounded-md text-sm font-semibold cursor-pointer'>
                Apply
              </div>
            </div>
          </div> 
          <div className='lg:hidden'>
            <div className={`${isOpen?"bg-gray-900":"transparent"}`}>
              <div className='flex justify-between p-3'>
                <div>
                  <Link href='/'><Image src="/Images/logo.svg" width="100" height='50' alt='logo' /></Link>
                </div>
                <div className='bg-primary'>
                  <Hamburger toggled={isOpen} toggle={open}/>
                </div>
              </div>
              {isOpen?
                <Slide direction='down' triggerOnce='true'>
                  <div className='pb-8'> 
                    <div>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">Home</Link></div></Zoom>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">Admissions</Link></div> </Zoom>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">Corporate Training</Link></div> </Zoom>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">Program & Courses</Link></div> </Zoom>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">About Us</Link></div> </Zoom>
                      <Zoom triggerOnce='true'><div className='header'><Link href="">Blog</Link></div> </Zoom>
                    </div>
                    <div className='mx-8 mb-5 pt-6'>
                      <div className='bg-primary text-white text-center rounded-lg font-semibold px-6 py-2'>Apply Now</div>
                    </div>
                  </div>
                </Slide>
              :''}
            </div>
          </div>
        </div>
  )
}

export default Navbar
