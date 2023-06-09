import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import "swiper/css/pagination";

function PartnerSlider() {

  return (
    <div className='bg-secondary-100'>
        <div className='text-white font-semibold text-center text-3xl px-3 pb-3 pt-6'>
            Our Partners
        </div>
        <div className='mx-44 p-9'>
        <Swiper
            modules={[Autoplay, Keyboard, Pagination]}
            autoplay={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            pagination={{
                clickable: true,
            }}
            grabCursor={false}
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
