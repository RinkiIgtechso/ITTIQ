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
                <div className='text-center font-semibold text-3xl'>What Our Student's Say</div>
                <p className='mt-2 mb-8 text-center w-[48%] m-auto text-sm text-secondary-200'>L'ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de l'industrie technologique</p>

                <div className=''>
                    <Swiper
                        dir='rtl'
                        effect={"coverflow"}
                            modules={[Autoplay, Keyboard,Pagination, EffectCoverflow]}
                            autoplay={true}
                            keyboard={true}
                            slidesPerView={4}
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
                    >
                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white p-7'>
                                <p className='text-xs text-secondary-200 leading-5'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='flex gap-4 mt-7 items-center'>
                                    <Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white p-7'>
                                <p className='text-xs text-secondary-200 leading-5'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='flex gap-4 mt-7 items-center'>
                                    <Image src='/Images/testimonial_2.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white p-7'>
                                <p className='text-xs text-secondary-200 leading-5'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='flex gap-4 mt-7 items-center'>
                                    <Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white p-7'>
                                <p className='text-xs text-secondary-200 leading-5'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='flex gap-4 mt-7 items-center'>
                                    <Image src='/Images/testimonial_2.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold'>Dannette P. Cervantes</p>
                                        <p className='text-xs text-secondary-200'>Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.tst_slider}>
                            <div className='shadow-lg md:w-[350px] bg-white p-7'>
                                <p className='text-xs text-secondary-200 leading-5'>“Complete account of the system and expound the actual 
                                Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots”</p>
                                <div className='flex gap-4 mt-7 items-center'>
                                    <Image src='/Images/testimonial_1.svg' height='45' width='45' alt='testimonial' className='rounded' />
                                    <div className='flex flex-col gap-1'>
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
                <div className='grid grid-cols-2 mx-24 mt-10'>
                    <div className='relative pl-5'>
                        <div>
                            <Image src='/Images/about.svg' height='480' width='500' alt />
                        </div>
                        <div className='absolute bottom-0 right-4 bg-secondary-400 text-white p-6 w-[230px] text-2xl font-semibold'>
                            From Unemployable to skill worker
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-sm font-bold text-primary'>High rated</p>
                        <p className='text-6xl font-semibold capitalize w-4/5 mt-2'>student campus life</p>
                        <p className='text-lg font-semibold mt-4'>BE AMBITIOUS. BE VULNERABLE. BE YOU</p>
                        <p className='text-secondary-200 text-sm pr-20 mt-4'>In addition to its training programs, ITTIQ offers a rich and varied social experience and other support systems where you’ll find outlets for creative expression and be your true self.</p>
                        <div className='flex gap-5 mt-10 '>
                            <div className='bg-primary text-gray-100 py-2 px-10 font-semibold rounded-xl cursor-pointer'>How we work</div>
                            <div className='flex gap-4 items-center cursor-pointer py-2 px-10'>
                                <Image src='/Images/Vector.svg' height='15' width='15' alt='phone' />
                                <span className='font-semibold'>+229-54335532</span>
                            </div>
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
