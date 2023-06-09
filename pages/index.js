import Image from 'next/image'
import Navbar from '@/components/navbar';
import CareerSlider from '@/components/CareerSlider';
import UiuxSlider from '@/components/UiuxSlider';
import PartnerSlider from '@/components/PartnerSlider';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import MainSlider from '@/components/MainSlider';

export default function Home() {
  return (
    <main>
      <div className='absolute w-full z-30'>
        <Navbar />
      </div>

      <MainSlider/>
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
