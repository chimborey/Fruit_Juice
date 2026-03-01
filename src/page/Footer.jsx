import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {

  return (
    <section className='w-full py-14 overflow-hidden bg-blue-300' data-aos='zoom-in' data-aos-delay='350'>
      <main className='mt-12 container'>
        {/* footer */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {/* footer-header */}
          {/* grid01 */}
          <div className='flex flex-col text-start'>
            <Link to={'/'} className='font-title' data-aos='fade-up' data-aos-delay='300'>fruit juice</Link>
            <p className='font-desc' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus fugit quo accusamus pariatur dolor vero soluta sint neque ex velit, blanditiis quia praesentium saepe reiciendis consequatur quis provident reprehenderit iure in repellendus delectus qui et quasi.</p>
          </div>
          {/* grid01 */}
          <div className='flex flex-col text-center' data-aos='fade-up' data-aos-delay='300'>
            <h3 to={'/'} className='font-title'>links</h3>
            <div>
              <div className='flex flex-col items-center gap-2' data-aos='fade-up' data-aos-delay='600'>
                <Link to={'/'} className='font-text'>home</Link>
                <Link to={'/service'} className='font-text'>service</Link>
                <Link to={'/product'} className='font-text'>menu</Link>
                <Link to={'/support'} className='font-text'>support</Link>
                <Link to={'/about'} className='font-text'>about</Link>
                <Link to={'/contact'} className='font-text'>contact</Link>
                <Link to={'/faq'} className='font-text'>faq</Link>
              </div>
            </div>
          </div>
          {/* grid02 */}
          <div className='flex flex-col text-center md:text-start sm:text-center'>
            <h3 to={'/'} className='font-title' data-aos='fade-up' data-aos-delay='300'>description</h3>
            <div className='flex flex-col md:items-start sm:text-center space-y-1 lg:text-center' data-aos='fade-up' data-aos-delay='600'>
              <h3 className='span-group'>hero</h3>
              <h3 className='span-group'>service Us</h3>
              <h3 className='span-group'>support Us</h3>
              <h3 className='span-group'>contact Us</h3>
              <h3 className='span-group'>About Us</h3>
              <h3 className='span-group'>product</h3>
              <h3 className='span-group'>faq Us</h3>
            </div>
          </div>
          {/* grid04 */}
          <div className='flex flex-col items-center' data-aos='fade-up' data-aos-delay='300'>
            <h3 to={'/'} className='font-title'>follow us</h3>
            <div className='flex flex-col text-center items-center space-y-3 mt-5 cursor-pointer' data-aos='fade-up' data-aos-delay='600'>
              <FaFacebook className='text-white rounded-full w-7 h-7' />
              <BsTwitterX className='text-white rounded-full w-7 h-7' />
              <LuInstagram className='text-white rounded-full w-7 h-7' />
            </div>
          </div>
        </div>
        {/* footer-footer */}
        <div className='text-center mx-auto mt-7 mb-7' data-aos='fade-up' data-aos-delay='300'>
          <span className='text-sm text-white'>@copyright fruit_juice by <span className='text-yellow-300'>technology-developer</span> | All rights reserved</span>
        </div>
      </main>
    </section>
  )
}

export default Footer