import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
      <div className='p-1 '>
      <div className='flex justify-between items-center mx-20'>
       <div className='p-2'>
       <Link href='/'><Image src="/Images/logo.svg" width="100" height='50' alt='logo' /></Link>
       </div>
       <div className='flex gap-3'>
          <div className='p-3 border-t-2 border-gray-50 text-white'><Link href='/'>Home</Link></div>
          <div className='p-3 border-t-2 border-transparent text-gray-300'><Link href='/'>Admissions</Link></div>
          <div className='p-3 border-t-2 border-transparent text-gray-300'><Link href='/'>Corporate Training</Link></div>
          <div className='p-3 border-t-2 border-transparent text-gray-300'><Link href='/'>Program & Courses</Link></div>
          <div className='p-3 border-t-2 border-transparent text-gray-300'><Link href='/'>About Us</Link></div>
          <div className='p-3 border-t-2 border-transparent text-gray-300'><Link href='/'>Blog</Link></div>
       </div>
       <div className='text-primary bg-white py-1 px-7 rounded-md text-sm font-semibold cursor-pointer'>
        Apply
       </div>
      </div>
    </div>
  )
}

export default Navbar
