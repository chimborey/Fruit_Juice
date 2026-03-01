import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { addToCart, products } = useContext(ShopContext)
  return (
    <section className='w-full py-14 overflow-hidden'>
      <main className='mt-12 container'>
        {/* product-center */}
        <div className='flex flex-col space-y-4 justify-center items-center'>
          <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>our product</h3>
          <p className="font-desc" data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus rem dignissimos quasi accusamus iure praesentium quae vel est quod temporibus eius non esse ipsum placeat ducimus, consequatur nihil fuga.</p>
        </div>
        {/* product-grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
          {/* grid01 */}
          {
            products.map((product) => {
              const { id, img, price, full, dis, title } = product
              return (
                <div key={id} data-aos='fade-up' data-aos-delay='900'>
                  <Link to={`product/${product.id}`} className='w-full relative overflow-hidden bg-white rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer'>
                    <img src={img} alt="" className='w-full h-48 hover:scale-110 duration-300 transition-all'/>
                    <div className='flex items-center flex-col space-y-3 px-4 mt-4'>
                      <h3 className='font-group'>{title}</h3>
                      <div className='flex justify-between space-x-7 items-center'>
                        <h5 className="span-group">${price}</h5>
                        <h5 className='span-group'><del>${full}</del></h5>
                      </div>
                      <button className='btn mb-9' onClick={()=> addToCart(products)}>shop now</button>
                      <div>
                        <h5 className='absolute left-0 top-0 w-12 text-center bg-red-500 text-white'>%{dis}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </main>
    </section>
  )
}

export default ProductList