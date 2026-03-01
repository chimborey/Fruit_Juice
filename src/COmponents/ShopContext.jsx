import { createContext, useMemo, useState } from "react";
import { productData } from "../data";
import { toast } from 'react-toastify'
export const ShopContext = createContext()
export const ShopContextProvider = ({ children }) => {
      // products
      const [products, setProducts] = useState(productData)
      // cart
      const [cart, setCart] = useState([])
      // total cart
      const total = useMemo(() => {
            return cart.reduce((acc, item) => acc + parseFloat(item.price) * item.amount, 0)
      }, [cart])
      // quantity cart
      const quantity = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.amount, 0)
      }, [cart])
      // add to cart
      const addToCart = (products) => {
            setCart((prev) => {
                  const exist = prev.find((item) => item.id === products.id);
                  if (exist) {
                        return prev.map((item) => item.id === products.id ? { ...item, amount: item.amount + 1 } : item)
                  }
                  toast.success('Added Products')
                  return [...prev, { ...products, amount: + 1 }]
            })
      }
      // increase cart
      const increaseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item))
      }
      // decrease cart
      const decreaseQuantity = (id) => {
            const cartItem = cart.find((item) => {
                  return item.id === id
            });
            if (cartItem) {
                  const newCart = cart.map((item) => {
                        if (item.id === id) {
                              return { ...item, amount: cartItem.amount - 1 }
                        } else {
                              return item
                        }
                  })
                  setCart(newCart)
            }
            else {
                  if (cartItem.amount < 2) {
                        removeFormCart()
                  }
            }

      }
      // remove cart
      const removeFormCart = (id) => {
            setCart((prev) => prev.filter((item) => item.id !== id))
            toast.success('Removed Products')
      }
      // clear cart
      const clearCart = () => {
            setCart([])
            toast.success('Cleared Product')
      }
      return (
            <ShopContext.Provider value={{
                  products,
                  setProducts,
                  cart,
                  setCart,
                  total,
                  quantity,
                  addToCart,
                  increaseQuantity,
                  decreaseQuantity,
                  removeFormCart,
                  clearCart
            }}>
                  {children}
            </ShopContext.Provider>
      )

}
export default ShopContextProvider