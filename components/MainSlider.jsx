import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard, Pagination,Scrollbar, EffectFade } from 'swiper';
import { Fade, Zoom } from 'react-awesome-reveal';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import 'swiper/css/keyboard';

function MainSlider() {
  return (
    <Zoom triggerOnce='true' cascade='true'>
      <div>
      <Swiper
        dir='ltr'
        modules={[Autoplay, Keyboard,Pagination,Scrollbar]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable:true
        }}
        loop={true}
        grabCursor={true}
        className='bullets'
      >
        {[1,2,3,4].map((item,i)=>
          <SwiperSlide key={i}>
              <div className="bg-[url('/Images/bg_image.svg')] text-gray-300 bg-no-repeat bg-cover bg-center">
                
                <div className='text-center pt-32 pb-20'>
                  <div className="bg-[url('/Images/iconsGroup.svg')] bg-no-repeat bg-contain bg-center sm:w-3/4 w-4/5 m-auto">
                  <div className='sm:w-72 w-full m-auto mt-6'>
                    <Zoom triggerOnce='true'><p className='lg:text-5xl md:text-4xl text-xl text-white font-bold capitalize leading-tight'>
                    Améliorez <span className='text-primary'>vos compétences</span> pour faire progresser votre <span className='text-primary'>carrière</span>
                    </p></Zoom>
                  </div>
                  <div className='lg:w-2/5 md:w-[85%] w-[100%] sm:m-auto mt-2'>
                    <Zoom triggerOnce='true'><p className='sm:text-sm text-xs sm:leading-7 leading-[20px]'>
                      Nous nous engageons à fournir une éducation technologique à la prochaine <br className='lg:hidden xl:block hidden'/> génération <br className='lg:hidden xl:block hidden'/>
                      de leaders au Bénin, en promouvant l&apos;égalité et l&apos;autonomisation.
                    </p></Zoom>
                  </div>
                  <div className='flex justify-center sm:gap-6 gap-3 mt-6 mb-8'>
                    <Fade direction='left' triggerOnce='true'><div className='border-2 border-white rounded-lg py-2 sm:px-4 px-2 sm:text-sm text-[0.6rem] font-semibold cursor-pointer'>Apply Now</div></Fade>
                    <Fade direction='right' triggerOnce='true'><div className='bg-primary text-white rounded-lg py-2 px-6 sm:text-sm text-[0.6rem] font-semibold cursor-pointer'>Browser Courses</div></Fade>
                  </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
    </Zoom>
  )
}

export default MainSlider
