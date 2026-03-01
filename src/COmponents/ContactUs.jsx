import React from 'react'
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper and modules styles
import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import S1 from '../assets/s1.avif'
import S2 from '../assets/s2.jpg'
import S3 from '../assets/s3.webp'
import S4 from '../assets/s4.jpg'
import S5 from '../assets/s6.jpg'
import S6 from '../assets/s6.jpg'
import S7 from '../assets/s7.avif'
import S8 from '../assets/s8.avif'
import S9 from '../assets/s9.jpg'
const ContactUs = () => {
  return (
    <section className='w-full py-14 overflow-hidden cursor-not-allowed'>
      <main className='mt-12 container'>
        {/* services-center */}
        <div className='flex justify-center items-center flex-col space-y-3 mb-7'>
          <h3 className="font-group" data-aos='fade-up' data-aos-delay= '300'>what our customers say</h3>
          <p className="font-desc"  data-aos='fade-up' data-aos-delay= '600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur? Nulla vel voluptates nihil, rerum possimus, accusantium quo minus dolore repudiandae temporibus libero enim corporis praesentium dignissimos quasi ducimus aut? Ipsam velit est eligendi dignissimos veniam, assumenda rem ipsum labore quisquam harum nobis, optio fugit alias. At, quas aliquam.</p>
        </div>
        <Swiper
          // install Swiper modules
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          data-aos={'fade-up'}
          data-aos-delay={900}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S1} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">james walker</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S9} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">oliver bennett</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S2} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">dam</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S3} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">var</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg'>
            <img src={S4} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">james</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S5} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">walker</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S6} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">rosse</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S7} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">alex</h3>
          </SwiperSlide>

          <SwiperSlide className='flex flex-col items-center justify-center px-4 py-4 bg-green-200 w-full overflow-hidden rounded-lg shadow'>
            <img src={S8} alt="" className='w-12 h-12 rounded-full' />
            <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur odit delectus tenetur porro nostrum expedita libero, quidem, tempore consectetur repellat tempora perferendis repudiandae necessitatibus laudantium at ad autem natus minima consequatur, itaque explicabo amet sed? Sint commodi doloremque quia provident ducimus cumque exercitationem ex maxime esse quam. Pariatur!</p>
            <h3 className="span-group">james walker</h3>
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  )
}

export default ContactUs