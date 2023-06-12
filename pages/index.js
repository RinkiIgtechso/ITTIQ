import Image from 'next/image'
import Navbar from '@/components/navbar';
import CareerSlider from '@/components/CareerSlider';
import UiuxSlider from '@/components/UiuxSlider';
import PartnerSlider from '@/components/PartnerSlider';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import MainSlider from '@/components/MainSlider';
import { Fade, Zoom } from 'react-awesome-reveal';

export default function Home() {
  return (
    <main>
      
        <div className='absolute w-full z-50'>
          <Fade direction='down' triggerOnce='true'>
            <Navbar />
          </Fade>
        </div>
     
        <Zoom triggerOnce='true'>
          <MainSlider/>
        </Zoom>
      {/* career section */}
      <CareerSlider />
      
      {/* uiux section */}
      <UiuxSlider />

      {/* -- Partner Slider -- */}
      <PartnerSlider />

      {/* students prospective */}
      <Testimonial />

      {/* Footer
      <Footer /> */}
      
    </main>
  )
}
