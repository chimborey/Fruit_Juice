import React from 'react'
import A1 from '../assets/a1.jpg'
const AboutUs = () => {
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/* about */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* about-left-text */}
          <div className='flex flex-col items-start justify-center space-y-4'>
            <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>about us</h3>
            <span className="span-group" data-aos='fade-up' data-aos-delay='600'>fresh.local.orginic.</span>
            <p className="font-desc" data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo officiis iusto nobis deleniti enim, harum atque repudiandae ipsum esse ullam fugit qui repellendus vero non minus nesciunt eos? Amet quam quo minima vitae suscipit possimus, accusamus culpa ab provident inventore sapiente praesentium illum debitis sunt, pariatur officiis deleniti. Temporibus cumque pariatur ullam recusandae consequuntur quae deleniti non ratione nobis.</p>
            <p className="font-desc" data-aos='fade-up' data-aos-delay='1200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo officiis iusto nobis deleniti enim, harum atque repudiandae ipsum esse ullam fugit qui repellendus vero non minus nesciunt eos? Amet quam quo minima vitae suscipit possimus, accusamus culpa ab provident inventore sapiente praesentium illum debitis sunt, pariatur officiis deleniti. Temporibus cumque pariatur ullam recusandae consequuntur quae deleniti non ratione nobis.</p>
            <div>
              <button className="btn" data-aos='fade-up' data-aos-delay='1500'>learn more</button>
            </div>
          </div>
          {/* about-right-img */}
          <div data-aos='fade-up' data-aos-delay='900'>
            <img src={A1} alt="" className='w-full h-48 md:w-[390px] md:h-[390px] lg:w-[590px] lg:h-[590px] rounded-lg shadow cursor-not-allowed hover:scale-95 duration-300 transition-all'/>
          </div>
        </div>
      </main>
    </section>
  )
}

export default AboutUs