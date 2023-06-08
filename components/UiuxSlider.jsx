import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard,Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import styles from "../styles/slider.module.css";

let data =[
    {
        id:1,
        img:'/Images/career_1.svg'
    },
    {
        id:2,
        img:'/Images/career_2.svg'
    },
    {
        id:3,
        img:'/Images/career_3.svg'
    },
    {
        id:4,
        img:'/Images/career_1.svg'
    },
    {
        id:5,
        img:'/Images/career_2.svg'
    }
]

function UiuxSlider() {

    useEffect(()=>{
        let nextB = styles.prev;
        let prev = document.querySelector('.swiper-button-prev');
        prev.setAttribute("id",nextB);
        let next = document.querySelector('.swiper-button-next');
        next.setAttribute("id",nextB)
    },[])

  return (
    <div >
        <div className='px-20 pt-20 pb-52 grid grid-cols-2 gap-20 bg-secondary-300'>
            <div>
                <p className='text-primary font-semibold'>ITTIQ helps you design,</p>
                <p className='text-4xl font-semibold pt-2'> Deliver, Manage, and Sustain Talent Development Solutions</p>
                <p className='text-secondary-100 font-semibold pt-2'>for today and the future</p>
            </div>
            <div className='pt-5'>
                <p>Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals...<span className='text-primary cursor-pointer'>Read More</span></p>
            </div>
        </div>

        <div className='relative -top-32'>
            <Swiper
                modules={[Autoplay, Keyboard, Navigation]}
                autoplay={false}
                keyboard={true}
                navigation
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                slideActiveClass={styles.actives}
                className={styles.swiper_modify}
            >
                {data.map((item)=>
                    <SwiperSlide key={item.id}>
                        <div className='rounded-lg shadow-slate-400 shadow-md'>
                            <div>
                            <img src={item.img} width='350' height="200" alt='career' />
                            </div>
                            <div className='py-3 px-5'>
                            <p className='text-lg font-bold leading-6 text-secondary-100'>Finance fundamentals course</p>
                            <p className='text-gray-400 text-sm font-semibold py-2'>By Kelly Anderson</p>
                            </div>
                            <hr/>
                            <div className='py-3 px-2 flex justify-between'>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='text-xs text-gray-400'>22hr 30min</span>
                            </div>

                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-600">
                                <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <span className='text-xs text-gray-400'>34 Courses</span>
                            </div>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span className='text-xs text-gray-400'>250 Sales</span>
                            </div>
                            </div>
                            <div className='p-2'>
                            <div className='bg-primary text-sm text-white font-bold w-full rounded-lg p-2 text-center'>
                                Apply Now
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>
  )
}

export default UiuxSlider
