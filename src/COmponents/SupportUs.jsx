import React from 'react'
import { GiThreeLeaves } from "react-icons/gi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
const SupportUs = () => {
  return (
    <section className='w-full py-14 overflow-hidden'>
      <main className='mt-12 container'>
        {/* support-center */}
        <div className='flex justify-center items-center space-y-4 flex-col'>
          <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>why choose us</h3>
          <p className="font-desc" data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolor pariatur minima asperiores autem nihil modi? Vitae, hic reprehenderit tempora sint esse minus iure amet error est vero quis ipsum aut cumque omnis et temporibus dolores delectus consequatur! Saepe, placeat? Perferendis commodi unde minima earum ullam corporis, quis in.</p>
        </div>
        {/* support-grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
          {/* grid01 */}
          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden shadow cursor-not-allowed flex-col hover:-translate-y-3 duration-300 transition-all rounded-lg bg-slate-300 flex justify-center items-center space-y-2 py-4 px-4'>
              <GiThreeLeaves size={35} className='text-green-500'/>
              <h3 className='font-group'>100% orangic</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus nulla in explicabo! Iusto, eius aspernatur! Esse autem pariatur eligendi quibusdam blanditiis accusantium quia iusto beatae assumenda totam, ut aspernatur in est tempora ullam provident cum aut molestias doloribus quod molestiae reprehenderit ipsa eos. Sequi est maxime ut architecto?</p>
            </div>
          </div>
          {/* grid02 */}
          <div data-aos='fade-up' data-aos-delay='1200'>
            <div className='w-full overflow-hidden shadow cursor-not-allowed flex-col hover:-translate-y-3 duration-300 transition-all rounded-lg bg-slate-300 flex justify-center items-center space-y-2 py-4 px-4'>
              <TbTruckDelivery size={35} className='text-green-500'/>
              <h3 className='font-group'>fast delivery</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus nulla in explicabo! Iusto, eius aspernatur! Esse autem pariatur eligendi quibusdam blanditiis accusantium quia iusto beatae assumenda totam, ut aspernatur in est tempora ullam provident cum aut molestias doloribus quod molestiae reprehenderit ipsa eos. Sequi est maxime ut architecto?</p>
            </div>
          </div>
          {/* grid03 */}
          <div data-aos='fade-up' data-aos-delay='1500'>
            <div className='w-full overflow-hidden shadow cursor-not-allowed flex-col hover:-translate-y-3 duration-300 transition-all rounded-lg bg-slate-300 flex justify-center items-center space-y-2 py-4 px-4'>
              <BiSupport size={35} className='text-green-500'/>
              <h3 className='font-group'>farmer support</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus nulla in explicabo! Iusto, eius aspernatur! Esse autem pariatur eligendi quibusdam blanditiis accusantium quia iusto beatae assumenda totam, ut aspernatur in est tempora ullam provident cum aut molestias doloribus quod molestiae reprehenderit ipsa eos. Sequi est maxime ut architecto?</p>
            </div>
          </div>
          {/* grid04 */}
          <div data-aos='fade-up' data-aos-delay='1800'>
            <div className='w-full overflow-hidden shadow cursor-not-allowed flex-col hover:-translate-y-3 duration-300 transition-all rounded-lg bg-slate-300 flex justify-center items-center space-y-2 py-4 px-4'>
              <IoCheckmarkCircleSharp size={35} className='text-green-500'/>
              <h3 className='font-group'>quantity assured</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus nulla in explicabo! Iusto, eius aspernatur! Esse autem pariatur eligendi quibusdam blanditiis accusantium quia iusto beatae assumenda totam, ut aspernatur in est tempora ullam provident cum aut molestias doloribus quod molestiae reprehenderit ipsa eos. Sequi est maxime ut architecto?</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SupportUs