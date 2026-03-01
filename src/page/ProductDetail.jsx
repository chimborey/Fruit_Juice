import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productData } from '../data'
import { ShopContext } from '../COmponents/ShopContext'

const ProductDetail = () => {
  const {addToCart} = useContext (ShopContext)
  const { id } = useParams()
  const product = productData.find((product.id === parseInt(id)))
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/* detail-grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* about-right-img */}
          <div className='w-full overflow-hidden' data-aos='fade-up' data-aos-delay='900'>
            <img src={product.img} alt="" className='w-full h-48 md:w-[390px] md:h-[390px] lg:w-[590px] lg:h-[590px] rounded-lg shadow cursor-not-allowed hover:scale-95 duration-300 transition-all' />
            <div className='flex justify-center flex-col items-start space-y-4'>
              <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>{product.title}</h3>
              <p className='font-desc' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae minima ratione incidunt reiciendis exercitationem illo voluptatum delectus illum at facere autem magnam molestiae animi quas deserunt consectetur laborum sapiente eveniet architecto, dolore, repudiandae optio magni fuga. Obcaecati quia quam debitis ratione ducimus deserunt, iusto praesentium animi dolores fugit?</p>
              <h5 data-aos='fade-up' data-aos-delay='900'>{product.price}</h5>
              <div data-aos='fade-up' data-aos-delay='1200'>
                <Link onClick={()=> addToCart(product,id)} className='btn'>buy now</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProductDetail