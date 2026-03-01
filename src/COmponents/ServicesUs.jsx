import React from 'react'
import C1 from '../assets/c1.jpg'
const ServicesUs = () => {
  return (
    <section className='w-full py-14 overflow-hidden'>
      <main className='container mt-12'>
        {/* service */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* service-left-img */}
          <div data-aos='fade-up' data-aos-delay='900'>
            <img src={C1} alt="" className='w-full h-48 md:w-[390px] md:h-[390px] lg:w-[590px] lg:h-[590px] rounded-lg shadow cursor-not-allowed hover:scale-95 duration-300 transition-all' />
          </div>
          {/* service-right-text */}
          <div className='flex flex-col items-start justify-center space-y-5'>
            {/* 01 */}
            <div className='flex justify-between items-center space-x-3' data-aos='fade-up' data-aos-delay='300'>
              <span className='span-group mb-7'>01</span>
              <div className='flex flex-col items-start'>
                <span className='span-group'>place your order</span>
                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum optio. Sapiente perspiciatis ex, architecto, et commodi officia, harum cupiditate aut ut consectetur sed quisquam sequi laudantium.</p>
              </div>
            </div>
            {/* 02 */}
            <div className='flex justify-between items-center space-x-3' data-aos='fade-up' data-aos-delay='600'>
              <span className='span-group mb-7'>02</span>
              <div className='flex flex-col items-start'>
                <span className='span-group'>harvest from farm</span>
                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum optio. Sapiente perspiciatis ex, architecto, et commodi officia, harum cupiditate aut ut consectetur sed quisquam sequi laudantium.</p>
              </div>
            </div>
            {/* 03 */}
            <div className='flex justify-between items-center space-x-3' data-aos='fade-up' data-aos-delay='900'>
              <span className='span-group mb-7'>03</span>
              <div className='flex flex-col items-start'>
                <span className='span-group'>eco-packaging</span>
                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum optio. Sapiente perspiciatis ex, architecto, et commodi officia, harum cupiditate aut ut consectetur sed quisquam sequi laudantium.</p>
              </div>
            </div>
            {/* 04 */}
            <div className='flex justify-between items-center space-x-3' data-aos='fade-up' data-aos-delay='1200'>
              <span className='span-group mb-7'>04</span>
              <div className='flex flex-col items-start'>
                <span className='span-group'>quick delivery</span>
                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum optio. Sapiente perspiciatis ex, architecto, et commodi officia, harum cupiditate aut ut consectetur sed quisquam sequi laudantium.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ServicesUs