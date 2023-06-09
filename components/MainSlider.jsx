import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard, Pagination,Scrollbar, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import 'swiper/css/keyboard';

function MainSlider() {
  return (
    <div>
      <Swiper
        dir='ltr'
        // effect={"fade"}
        modules={[Autoplay, Keyboard,Pagination,Scrollbar]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
<div class="bg-[url('/Images/bg_image.svg')] text-gray-300 bg-no-repeat bg-cover bg-center">
        
        <div className='text-center pt-32 pb-20'>
          <div className="bg-[url('/Images/iconsGroup.svg')] bg-no-repeat bg-contain bg-center w-3/4 m-auto">
          <div className='w-72 m-auto mt-6'>
            <p className='text-5xl font-bold capitalize leading-tight'>
            Améliorez <span className='text-primary'>vos compétences</span> pour faire progresser votre <span className='text-primary'>carrière</span>
            </p>
          </div>
          <div className='w-2/5 m-auto mt-3'>
            <p className='text-sm leading-7'>
              Nous nous engageons à fournir une éducation technologique à la prochaine <br/> génération <br/>
              de leaders au Bénin, en promouvant l'égalité et l'autonomisation.
            </p>
          </div>
          <div className='flex justify-center gap-6 mt-6 mb-8'>
            <div className='border-2 border-white rounded-lg py-2 px-4 font-semibold cursor-pointer'>Apply Now</div>
            <div className='bg-primary text-white rounded-lg py-2 px-6 font-semibold cursor-pointer'>Browser Courses</div>
          </div>
          </div>
        </div>
      </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default MainSlider
