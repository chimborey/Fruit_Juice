import React from 'react'
import Hero from '../COmponents/Hero'
import AboutUs from '../COmponents/AboutUs'
import SupportUs from '../COmponents/SupportUs'
import ProductList from '../COmponents/ProductList'
import ServicesUs from '../COmponents/ServicesUs'
import ContactUs from '../COmponents/ContactUs'
import FaqUS from '../COmponents/FaqUS'

const Home = () => {
  return (
    <main>
      <Hero autoSlide={true} autoSlideInterval={2500}/>
      <AboutUs />
      <SupportUs />
      <ProductList />
      <ServicesUs  />
      <ContactUs />
      <FaqUS />
    </main>
  )
}

export default Home