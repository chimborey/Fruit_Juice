import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { ShopContext } from './ShopContext';
const Navbar = () => {
  // cart
  const {cart} = useContext (ShopContext)
  // srolled
  const [srcolled, setSecrolled] = useState(false)
  useEffect(() => {
    const handlescroll = () => {
      setSecrolled(window.screenY > 50)
    }
    window.addEventListener('scroll', handlescroll)
    return () => {
      window.removeEventListener('scroll', handlescroll)
    }
  }, [])
  // click menu
  const [isOpenNav, setIsOpenNav] = useState(false)
  return (
    <section className={` w-full top-0 left-0 fixed shadow-md backdrop-blur-3xl shadow-red-400 z-50 ${srcolled ? '' : ''}`}>
      <nav className='flex justify-between items-center h-14 container' data-aos='fade-down' data-aos-delay='600'>
        {/* logo */}
        <Link to={'/'} className='font-title'>fruit <span className='text-red-600'>juice</span></Link>
        {/* menu */}
        <div className='py-14 hidden lg:block'>
          <div className='flex justify-between items-center gap-7'>
            <Link to={'/'} className='font-text'>home</Link>
            <Link to={'/about'} className='font-text'>about</Link>
            <Link to={'/support'} className='font-text'>support</Link>
            <Link to={'/product'} className='font-text'>menu</Link>
            <Link to={'/service'} className='font-text'>service</Link>
            <Link to={'/contact'} className='font-text'>contact</Link>
            <Link to={'/faq'} className='font-text'>faq</Link>
          </div>
        </div>
        {/* btn */}
        <div className='flex justify-between items-center gap-3 py-4'>
          <button>
            <FaUserPlus className='text-black text-4xl w-10 h-10 rounded-full bg-white px-3 py-3 hover:bg-red-500 duration-300 transition-all' />
          </button>
          <Link to={'/cart'} className='relative'>
            <FaCartShopping className='text-black text-4xl w-10 h-10 rounded-full bg-white px-3 py-3 hover:bg-red-500 duration-300 transition-all' />
            <span className='absolute top-0.5 right-1 text-sm text-blue-600'>{cart.length}</span>
          </Link>
          <button className='block lg:hidden'>
            {
              isOpenNav ?
                <MdOutlineCloseFullscreen size={25} onClick={() => setIsOpenNav(!isOpenNav)} />
                :
                <CiMenuFries size={25} onClick={() => setIsOpenNav(!isOpenNav)} />
            }
          </button>
        </div>
      </nav>
      {/* click menu */}
      <div className={` w-full absolute lg:hidden py-14 top-14 transition-all duration-300 bg-blue-400 backdrop-blur-3xl shadow-md shadow-red-400 ${isOpenNav ? 'left-0' : '-left-[2000px]'}`}>
          <div className='flex flex-col space-y-5 items-center justify-center'>
            <Link to={'/'} className='font-text'>home</Link>
            <Link to={'/about'} className='font-text'>about</Link>
            <Link to={'/support'} className='font-text'>support</Link>
            <Link to={'/product'} className='font-text'>menu</Link>
            <Link to={'/service'} className='font-text'>service</Link>
            <Link to={'/contact'} className='font-text'>contact</Link>
            <Link to={'/faq'} className='font-text'>faq</Link>
          </div>
        </div>
    </section>
  )
}

export default Navbar