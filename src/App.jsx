import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './page/Home'
import About from './page/About'
import Support from './page/Support'
import ProductList from './COmponents/ProductList'
import Service from './page/Service'
import Contact from './page/Contact'
import Faq from './page/Faq'
import Cart from './page/Cart'
import ProductDetail from './page/ProductDetail'
import Header from './page/Header'
import Footer from './page/Footer'
const App = () => {
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false
    })
  }, [])
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/product' element={<ProductList />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        {/* cart and detail */}
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
      </Routes>
      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App