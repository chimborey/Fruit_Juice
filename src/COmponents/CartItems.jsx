import React, { useContext } from 'react'
import { ShopContext } from '../COmponents/ShopContext'
import { FaTrash } from 'react-icons/fa'
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
const CartItems = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFormCart,
  } = useContext(ShopContext)
  return (
   <div className='flex justify-between items-center space-x-3' >
    {/* remove */}
    <div className='flex justify-between items-center space-x-2 space-y-3'>
      <img src={item.img} alt="" className='w-16 h16 rounded-md mb-2'/>
      <div className='flex justify-between items-csnter flex-col'>
        <span className='span-group'>{item.title}</span>
        <FaTrash size={15} className='text-red-500 cursor-not-allowed' onClick={()=> removeFormCart(item.id)}/>
      </div>
    </div>
    {/* quantity */}
    <div className='flex justify-between items-center space-x-3'>
      <button className='w-7 h-7 text-2xl rounded-full bg-red-500 px-3 py-3 text-center flex items-center justify-center' onClick={()=> decreaseQuantity(item.id)}>-</button>
      <button className='text-2xl flex items-center justify-center'>{item.amount}</button>
      <button className='w-7 h-7 text-2xl rounded-full bg-red-500 px-3 py-3 text-center flex items-center justify-center' onClick={()=> increaseQuantity(item.id)}>+</button>
    </div>
    {/* price */}
    <span className='span-group'>${item.price}</span>
    {/* total */}
    <span className='span-group'>
      ${parseFloat(item.price * item.amount).toFixed(2)}
    </span>
   </div>
  )
}

export default CartItems