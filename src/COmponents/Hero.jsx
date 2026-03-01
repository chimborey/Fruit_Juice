import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Img1 from '../assets/h1.jpg' // import Img1
import Img2 from '../assets/h2.jpg' // import Img2
import Img3 from '../assets/h3.webp' // import Img3
import Img4 from '../assets/h4.avif' // import Img4
import Img5 from '../assets/h5.jpg' // import Img5
import { FaArrowLeft } from "react-icons/fa"; // <--- FaArrowLeft
import { FaArrowRight } from "react-icons/fa"; // <--- FaArrowRight
const Hero = (
  {
    autoSlide = false,
    autoSlideInterval = 3000,
  }
) => {
  // Images
  const Images = [
    {
      id: 1,
      img: Img1,
      title: 'fruit juice',
      desc: 'shop'
    },
    {
      id: 2,
      img: Img2,
      title: 'fruit juice',
      desc: 'shop'
    },
    {
      id: 3,
      img: Img3,
      title: 'fruit juice',
      desc: 'shop'
    },
    {
      id: 4,
      img: Img4,
      title: 'fruit juice',
      desc: 'shop'
    },
    {
      id: 5,
      img: Img5,
      title: 'fruit juice',
      desc: 'shop'
    },
  ]
  const [curr, setCurr] = useState(0)
  const prev = () => setCurr((curr) => (curr === 0 ? Images.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === Images.length - 1 ? 0 : curr + 1))
  // Auto slide
  useEffect(() => {
    if (!autoSlide)
      return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)


  })
  return (
    <section className='w-full flex py-14 justify-center h-screen items-center'>
      <div className='md:w-[1600px] sm:w-full overflow-hidden h-[93vh] mt-12'>
        <div className='flex'>
          {
            Images.map((items, index) => (
              <div key={index.id}>
                {/* img */}
                <div className='lg:w-[1600px] lg:h-[790px] md:w-[770px] md:h-[590px] w-[490px] h-[490px] sm:w-[590px] sm:h-[490px] object-cover transition-transform ease-out duration-500 flex-shrink-0 flex' style={{ transform: `translateX(-${curr * 100}%)` }}>
                  <img src={items.img} alt="" className='w-[490px] h-[490px] lg:w-[1600px] lg:h-[790px] md:w-[770px] md:h-[590px] sm:w-[590px] sm:h-[490px]' />
                  {/* text */}
                  <div className='absolute md:top-[30%] md:left-[0%] md:translate-[50%] lg:left-[15%] sm:top-[5%]  sm:px-24 sm:right-2 sm:translate-x-4 px-36 -left-24'>
                    <h5 className='font-desc' data-aos='zoom-in' data-aos-delay='300'>{items.desc}</h5>
                    <h1 className='text-3xl font-group' data-aos='zoom-in' data-aos-delay='600'>{items.title}</h1>
                    <p className='text-sm text-justify text-gray-400 mt-4 font-desc indent-10' data-aos='zoom-in' data-aos-delay='900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure ratione nisi eligendi, nobis rerum libero esse cupiditate alias, <br /> aperiam vitae laudantium architecto provident officia quo magnam iusto deleniti aliquam aspernatur asperiores ex dolore laboriosam <br /> reiciendis distinctio! Cumque, quaerat nisi. Laboriosam similique nesciunt illo, ullam perferendis reprehenderit. Consequuntur perspiciatis <br /> tenetur quidem nulla quos blanditiis quo, ducimus laudantium atque architecto minima dignissimos hic. Velit, quaerat quia?</p>
                    <div data-aos='zoom-in' data-aos-delay='1200'>
                      <Link to={'/product'} className='btn text-center'>find menu</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {/* FaArrowLeft / FaArrowRight Icon */}
        <div className='md:block hidden'>
          <FaArrowLeft onClick={prev} className='text-black absolute lg:top-96 lg:left-5 md:top-96 md:left-5 w-10 h-10 p-2 text-4xl bg-slate-100 rounded-full hover:scale-105 duration-300 cursor-pointer' data-aos='fade-right' data-aos-duration='1200' />
          <FaArrowRight onClick={next} className='text-black absolute lg:top-96 lg:right-5 md:top-96 md:right-5 sm:right-2 w-10 h-10 p-2 text-4xl bg-slate-100 rounded-full hover:scale-105 duration-300 cursor-pointer' data-aos='fade-left' data-aos-duration='1200' />
        </div>
        {/* _ */}
        <div className='absolute lg:bottom-4 lg:right-0 lg:left-0 md:bottom-[400px] md:left-[350px] sm:left-48 sm:block hidden'>
          <div className='flex items-center justify-center gap-2'>
            {Images.map((_, i) => (
              <div className={`transition-all w-3 h-3 bg-blue-400 hidden md:block rounded-full ${curr === i ? "p-2" : "bg-opcity-50"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
