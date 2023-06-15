import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard,Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import styles from "../styles/slider.module.css";
import Image from 'next/image';
import { Fade, Zoom } from 'react-awesome-reveal';

let data =[
    {
        id:1,
        img:'/Images/ui_ux.svg'
    },
    {
        id:2,
        img:'/Images/ui_ux.svg'
    },
    {
        id:3,
        img:'/Images/ui_ux.svg'
    },
    {
        id:4,
        img:'/Images/ui_ux.svg'
    },
    {
        id:5,
        img:'/Images/ui_ux.svg'
    }
]

function UiuxSlider() {
    const swiperRef = useRef();

  return (
    <div className='sm:h-auto h-[750px]'>
        <div className='sm:px-20 px-4 sm:pt-20 pt-7 pb-52 grid grid-cols-2 sm:gap-20 gap-3 bg-secondary-300'>
            <div>
                <p className='text-primary sm:text-sm text-[0.65rem] font-semibold'>ITTIQ helps you design,</p>
                <p className='lg:text-4xl md:text-2xl sm:text-[1rem] text-[0.8rem] font-semibold sm:pt-2 pt-1 '> Deliver, Manage, and Sustain Talent Development Solutions</p>
                <p className='text-secondary-100 sm:text-sm text-xs font-semibold pt-2'>for today and the future</p>
            </div>
            <div className='sm:pt-5 pt-0'>
                <p className='md:text-[13.5px] sm:text-xs text-[0.55rem]'>Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals...<span className='text-primary cursor-pointer'>Read More</span>
                </p>
            </div>
        </div>

        <div className='relative sm:-top-44 -top-52'>
            <div className='flex justify-between px-3 text-primary relative sm:top-24 top-32'>
                <div onClick={() => swiperRef.current?.slidePrev()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 review-swiper-button-next cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg></div>
                <div onClick={() => swiperRef.current?.slideNext()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 review-swiper-button-next cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></div>
                
            </div>
            <Swiper
                modules={[Autoplay, Keyboard]}
                autoplay={false}
                keyboard={true}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                spaceBetween={10}
                navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                  }}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                slideActiveClass={styles.actives}
                className={styles.swiper_modify}
                breakpoints={{
                    768:{
                        slidesPerView:2,
                        centeredSlides:false,
                        centeredSlidesBounds:false,
                        slideActiveClass:false,
                        spaceBetween:10
                    },
                    1024:{
                        slidesPerView:3,
                        centeredSlides:true,
                        centeredSlidesBounds:true,
                        slideActiveClass:styles.actives,
                        spaceBetween:40
                    }
                }}
            >
                {data.map((item)=>
                    <SwiperSlide key={item.id}>
                        <Zoom triggerOnce='true' cascade='true'>
                            <div className='rounded-lg shadow-slate-400 shadow-md'>
                                <div>
                                    <Image className='rounded-lg' src={item.img} width='350' height="200" alt='career' />
                                </div>
                                <div className='sm:py-3 py-2 sm:px-5 px-3'>
                                    <p className='text-gray-400 sm:text-sm text-xs font-semibold py-2'>UI/UX Design</p>
                                    <p className='sm:text-lg text-[0.9rem] font-bold leading-6 text-secondary-100'>UI/UX Design for Beginners</p>
                                </div>
                                <hr/>
                                <div className='py-3 px-2 flex justify-between'>
                                    <div className='flex gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className='sm:text-xs text-[0.64rem] text-gray-400'>22hr 30min</span>
                                    </div>
                                    <div className='flex gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600">
                                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        <span className='sm:text-xs text-[0.64rem] text-gray-400'>34 Courses</span>
                                    </div>
                                    <div className='flex gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                        <span className='sm:text-xs text-[0.64rem] text-gray-400'>250 Sales</span>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='bg-primary text-sm text-white font-bold w-full rounded-lg p-2 text-center'>
                                        Learn More
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>
  )
}

export default UiuxSlider
