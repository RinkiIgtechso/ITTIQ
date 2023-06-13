import React,{useEffect} from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Keyboard,Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import styles from "../styles/slider.module.css";
import Image from 'next/image';
import { Fade, Zoom } from 'react-awesome-reveal';

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

function CareerSlider() {
    const swiper = useSwiper();

    useEffect(()=>{
        let nextB = styles.next;
        let prev = document.querySelector('.swiper-button-next');
        prev.setAttribute("id",nextB);

        let next = document.querySelector('.swiper-button-prev');
        next.setAttribute("id",nextB)
    },[])

  return (
    <div className='p-4'>
      <div className='mt-2 mb-3'>
      <div className='text-center sm:text-3xl text-[1.5rem] font-bold'>Choose  Your Career Path</div>
        <div className='mt-2 text-center text-sm text-secondary-200 xl:w-75 md:w-96 m-auto'>Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l&apos;égalité et l&apos;autonomisation</div>
      </div>
      <div className='sm:mx-5 mx-0 py-4'>

        <Swiper
            modules={[Autoplay, Keyboard, Navigation]}
            autoplay={true}
            keyboard={true}
            navigation
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            slideActiveClass={styles.active}
            className={styles.swiper_spacing}
            id={styles.swiper}
            breakpoints={{
                320:{
                    slidesPerView:1,
                    centeredSlides:false,
                    centeredSlidesBounds:false,
                    slideActiveClass:false
                },
                425:{
                    slidesPerView:1,
                    centeredSlides:false,
                    centeredSlidesBounds:false,
                    slideActiveClass:false
                },
                768:{
                    slidesPerView:2,
                    centeredSlides:false,
                    centeredSlidesBounds:false,
                    slideActiveClass:false
                },
                1024:{
                    slidesPerView:3,
                    centeredSlides:true,
                    centeredSlidesBounds:true,
                    slideActiveClass:styles.active
                }
            }}
        >
            {data.map((item)=>
               
                    <SwiperSlide key={item.id}>
                    <div className='rounded-lg sm:m-5 m-2 shadow-slate-400 shadow-lg'>
                        <Zoom triggerOnce='true'>
                            <div>
                                <Image src={item.img} width='350' height="200" alt='career' />
                            </div>
                            <div className='py-3 px-5'>
                                <p className='xl:text-xl lg:text-[0.9rem] font-bold leading-4 text-secondary-100'>Finance fundamentals<br/> course</p>
                                <p className='text-gray-400 xl:text-sm lg:text-xs text-xs font-semibold py-2'>By Kelly Anderson</p>
                            </div>
                            <hr/>
                            <div className='py-3 px-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 w-3 h-3 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='xl:text-xs lg:text-[0.5rem] text-[0.6rem] text-gray-400'>22hr 30min</span>
                                </div>

                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 w-3 h-3text-gray-600">
                                    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <span className='xl:text-xs lg:text-[0.5rem] text-[0.6rem] text-gray-400'>34 Courses</span>
                                </div>

                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 w-3 h-3text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    <span className='xl:text-xs lg:text-[0.5rem] text-[0.6rem] text-gray-400'>250 Sales</span>
                                </div>
                            </div>
                            <div className='p-2'>
                            <div className='bg-primary text-sm text-white font-bold w-full rounded-lg p-2 text-center'>
                                Apply Now
                            </div>
                            </div>
                        </Zoom>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
      </div>
      <div className='xl:mt-4 lg:-mt-8 -mt-[100px] sm:mb-8 mb-0'>
        <Fade direction='top' delay={0.3}>
            <div className='m-auto p-3 w-36 rounded-lg bg-secondary-100 text-white text-center font-semibold cursor-pointer'>
                View All
            </div>
        </Fade>
     </div>
    </div>
  )
}

export default CareerSlider;
