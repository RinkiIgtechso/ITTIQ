import React, { useEffect } from 'react';
import styles from '../styles/testimonial.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard, Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import 'swiper/css/keyboard';
import Footer from './Footer';
import { Slide, Zoom } from 'react-awesome-reveal';

function Testimonial() {

    useEffect(()=>{
        let arr = document.getElementsByClassName('testimonial_tst_slider__5xRw7');
        for(let i=0; i<arr.length; i++){
            arr[i].style.transform = 'none !important';
        }
    },[])
  
  return (
    <div >
        <div className={styles.student_section}>
            <div className=' pt-20 pb-12'>
                <Zoom triggerOnce='true'><div className='text-center font-semibold sm:text-3xl text-2xl'>What Our Student&apos;s Say</div></Zoom>
                <Zoom triggerOnce='true'><p className='mt-2 mb-8 text-center sm:w-[48%] w-[85%] m-auto text-sm text-secondary-200'>L&apos;ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de l&apos;industrie technologique</p></Zoom>

                <div className='sm:p-0 p-6'>
                    <Swiper
                        dir='rtl'
                        // effect={"coverflow"}
                        modules={[Autoplay, Keyboard,Pagination, EffectCoverflow]}
                        autoplay={true}
                        keyboard={true}
                        slidesPerView={1}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 2,
                            modifier: 3,
                            slideShadows: false,
                            }}
                        pagination={true}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        grabCursor={true}
                        spaceBetween={150}
                        slideActiveClass={'active'}
                        className={styles.testimonial}
                        breakpoints={{
                            425:{
                                slidesPerView:1,
                                centeredSlides:false,
                                centeredSlidesBounds:false,
                                slideActiveClass:false,
                                spaceBetween:20
                            },
                            768:{
                                
                                slidesPerView:2,
                                centeredSlides:false,
                                centeredSlidesBounds:false,
                                slideActiveClass:false,
                                spaceBetween:40
                            },
                            1024:{
                                effect:"coverflow",
                                slidesPerView:4,
                            },
                            1440:{
                                effect:"coverflow",
                                slidesPerView:4,
                                spaceBetween:50
                            }
                        }}
                    >
                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white sm:p-7 p-4'>
                                <p className='text-xs text-left text-secondary-200 sm:leading-5 leading-4'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”</p>
                                <div className='testimonial-sliders'>
                                    <div><Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' /></div>
                                    <div className='flex flex-col justify-start gap-1 text-left'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white sm:p-7 p-4'>
                                <p className='text-xs text-left text-secondary-200 sm:leading-5 leading-4'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='testimonial-sliders'>
                                    <Image src='/Images/testimonial_2.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white sm:p-7 p-4'>
                                <p className='text-xs text-left text-secondary-200 sm:leading-5 leading-4'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”</p>
                                <div className='testimonial-sliders'>
                                    <Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white sm:p-7 p-4'>
                                <p className='text-xs text-left text-secondary-200 sm:leading-5 leading-4'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='testimonial-sliders'>
                                    <Image src='/Images/testimonial_2.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white sm:p-7 p-4'>
                                <p className='text-xs text-left text-secondary-200 sm:leading-5 leading-4'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”</p>
                                <div className='testimonial-sliders'>
                                    <Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='pb-20'>
                <div className='grid sm:grid-cols-2 grid-cols-1 lg:mx-24 md:mx-10 mt-10 md:gap-2'>
                    <div className='relative sm:pl-5 pl-0'>
                        <div className='sm:w-4/5 w-[90%] sm:m-0 m-auto'>
                            <Slide direction='left' triggerOnce='true'>
                                <Image src='/Images/about.svg' height='480' width='500' alt='images' />
                            </Slide>
                        </div>
                        <div className='absolute bottom-0 lg:right-4 md:right-5 right-0 bg-secondary-400 text-white lg:p-6 md:p-4 p-4 w-[230px] lg:text-2xl md:text-xl text-lg font-semibold'>
                            <Slide direction='right' triggerOnce='true'>
                                From Unemployable to skill worker
                            </Slide>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start sm:p-0 p-5'>
                        <Zoom triggerOnce='true'><p className='text-sm font-bold text-primary'>High rated</p></Zoom>
                        <Zoom triggerOnce='true'><p className='xl:text-6xl lg:text-[2.8rem] md:text-[2.2rem] text-3xl font-semibold capitalize lg:w-4/5 md:w-[100%] lg:mt-2 md:mt-0 leading-0 lg:leading-[40px]'>student campus life</p></Zoom>
                        <Zoom triggerOnce='true'><p className='lg:text-lg md:text-sm text-xs font-semibold lg:mt-4 md:mt-0 mt-1'>BE AMBITIOUS. BE VULNERABLE. BE YOU</p></Zoom>
                        <Zoom triggerOnce='true'><p className='text-secondary-200 sm:text-sm lg:pr-20 md:pr-0 sm:mt-4 mt-2'>In addition to its training programs, ITTIQ offers a rich and varied social experience and other support systems where you&apos;ll find outlets for creative expression and be your true self.</p></Zoom>
                        <div className='grid grid-cols-2 gap-5 mt-10 '>
                            <Slide direction='up' triggerOnce='true'>
                            <div className='bg-primary  text-gray-100 py-2 lg:px-10 md:px-4 text-center font-semibold rounded-xl cursor-pointer'>How we work</div>
                            </Slide>
                            <Slide direction='down' triggerOnce='true'>
                                <div className='grid grid-cols-[10%,90%] gap-2 items-center cursor-pointer py-2 xl:px-10 lg:px-5 md:px-2'>
                                    <Image src='/Images/Vector.svg' height='15' width='15' alt='phone' />
                                    <span className='font-semibold'>+229-54335532</span>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    </div>
  )
}

export default Testimonial
