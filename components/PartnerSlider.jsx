import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import { Fade, Slide } from 'react-awesome-reveal';

function PartnerSlider() {

  return (
    <div className='bg-secondary-100 border-y-2 border-primary sm:mt-0 -mt-32'>
        <Fade direction='down' triggerOnce='true'>
            <div className='text-white font-semibold text-center text-3xl px-3 pb-3 pt-6'>
                Our Partners
            </div>
        </Fade>
        <div className='lg:mx-44 md:mx-12 p-9'>
            
                <Swiper
                    modules={[Autoplay, Keyboard, Pagination]}
                    autoplay={true}
                    keyboard={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        
                        768:{
                            slidesPerView:4
                        },
                        1024:{
                            slidesPerView:4,
                            spaceBetween:10
                        }
                    }}
                >
                    <SwiperSlide>
                        
                            <div className='h-24 pt-5'>
                                <Image src='/Images/client_4.svg' width='100' height='100' alt='testimonial'/>
                            </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        
                            <div className='h-24'>
                                <Image src='/Images/client_2.svg' width='100' height='100' alt='testimonial'/>
                            </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                       
                            <div className='h-24'>
                                <Image src='/Images/client_1.svg' width='100' height='100' alt='testimonial'/>
                            </div>
                       
                    </SwiperSlide>
                    <SwiperSlide>
                        
                            <div className='h-24'>
                                <Image src='/Images/client_3.svg' width='100' height='100' alt='testimonial'/>
                            </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        
                            <div className='h-24'>
                                <Image src='/Images/client_2.svg' width='100' height='100' alt='testimonial'/>
                            </div>
                        
                    </SwiperSlide>
                </Swiper>
            
        </div>
    </div>
  )
}

export default PartnerSlider;
