import React, { useContext,useEffect,useState } from 'react'
import { StoreContext } from '../../context/store.context.jsx'
import remove_icon_red from './../../assets/remove_icon_red.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

export default function cart() {
    const {cartItems,setCartItems,removeFromCart,getTotalCartAmount,food_list} = useContext(StoreContext)
    const navigate = useNavigate()
    // const [food_list,setFoodlist] = useState([])
    // const fetchfood_items = async ()=>{
    //     const response = await axios.get("http://localhost:4000/api/v1/food/food_list")

    //     setFoodlist(response.data.data)
    // }
    // useEffect(()=>{
    //     async function loadData() {
    //         await fetchfood_items()
    //     }
    //     loadData()
    //     console.log(food_list)
    //     console.log(cartItems)
    // },[])

  return (
    <div className='px-4 py-4 dark:text-white'>
        <div className=''>
            <p className='text-center font-[700] text-[18px] md:text-[22px] lg:text-[25px]'>Items In your cart</p>
            <div className='grid grid-cols-6 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px]'>
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr className='border-solid h-[4px] border-black dark:border-white'/>
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                    return (
                        <div className='space-y-3'>
                        <div className='grid grid-cols-6 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px] items-center'>
                            <img src={item.image} className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]'/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price * cartItems[item._id]}</p>
                            <img className='hover:scale-105 cursor-pointer' src={remove_icon_red} onClick={()=>removeFromCart(item._id)}/>
                        </div>
                        <hr className='border-solid h-[4px] border-black dark:border-white'/>
                        </div>
                    )
                }
            })}
            <div className='flex justify-between px-4 py-4 items-center'>
                <p>Total: ${getTotalCartAmount()}</p>
                <button type='submit' className='border-solid p-2 rounded-lg bg-yellow-700 hover:scale-105 cursor-pointer' onClick={()=>{getTotalCartAmount()>0?navigate('/order'):toast.error("Your cart is empty please fill in cart to proceed to checkout.")}} onSubmit={(e)=>e.preventDefault()}>Proceed to CheckOut </button>
            </div>
        </div>
    </div>
  )
}
