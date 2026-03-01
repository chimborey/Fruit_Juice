import React, { useContext } from 'react'
import { ShopContext } from '../COmponents/ShopContext'
import { FaTrash } from "react-icons/fa";
import CartItems from '../COmponents/CartItems';
import { BsCart3 } from "react-icons/bs";
const Cart = () => {
  const {
    cart,
    total,
    quantity,
    clearCart
  } = useContext(ShopContext)
  return (
    <section className='w-full py-14 overflow-hidden'>
      <main className='mt-12 container'>
        {/* cart */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* cart-left */}
          <div className='w-full overflow-hidden flex-col flex space-y-5' data-aos='zoom-in' data-aos-delay='600'>
            {/* grid-left01 */}
            <div className='flex w-full justify-between items-center border-b-blue-600 border-b-2 py-4'>
              <h3 className="font-group">shopping cart</h3>
              <h5 className='span-group'>items: {(quantity)}</h5>
              <FaTrash onClick={clearCart} size={18} className='text-red-400 cursor-pointer' />
            </div>
            {/* grid-left02 */}
            <div className='flex w-full justify-between items-center border-b-blue-600 border-b-2 py-4'>
              <h3 className="font-group">product</h3>
              <h3 className="font-group">qunatity</h3>
              <h3 className="font-group">price</h3>
              <h3 className="font-group">total</h3>
            </div>
            {/* grid-left02 */}
            <div>
              {
                cart.length > 0 ?
                  (
                    cart.map((item) => {
                      return (<CartItems key={item.id} item={item} />)
                    })
                  )
                  :
                  (
                    <div className='flex justify-center items-center flex-col'>
                      <h3 className="span-group">your cart is empty</h3>
                      <BsCart3 size={47} className='mt-4 text-gray-200' />

                    </div>
                  )
              }
            </div>
          </div>
          {/* cart-right*/}
          <div className='w-full overflow-hidden bg-gray-400 rounded-lg px-3' data-aos='zoom-in' data-aos-delay='600'>
            <h3 className="font-group border-b-blue-600 border-b-2 py-4">cart summary</h3>
            <div className='flex flex-col space-y-3'>
              {/* grid-right01*/}
              <div className='flex justify-between items-center mt-2'>
                <span className='span-group'>items:</span>
                <span>{quantity}</span>
              </div>
              {/* grid-right02*/}
              <div className='flex justify-between items-center mt-2'>
                <span className='span-group'>subtotal:</span>
                <span className='span-group'>${isNaN(total) ? 0 : total}</span>
              </div>
              {/* grid-right03*/}
              <div className='flex justify-between items-center mt-2'>
                <span className='span-group'>delivery:</span>
                <span>free</span>
              </div>
              {/* grid-right04*/}
              <div className='flex justify-between items-center mt-2'>
                <span className='span-group'>total:</span>
                <span className='span-group'>${isNaN(total) ? 0 : total}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Cart