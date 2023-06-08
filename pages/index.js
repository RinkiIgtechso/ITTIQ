import Image from 'next/image'
import Navbar from '@/components/navbar';
import CareerSlider from '@/components/CareerSlider';
import UiuxSlider from '@/components/UiuxSlider';

export default function Home() {
  return (
    <main>
      <div className='absolute w-full'>
        <Navbar />
      </div>

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
      {/* career section */}
      <CareerSlider/>
      
      {/* uiux section */}
      <UiuxSlider/>
    </main>
  )
}
