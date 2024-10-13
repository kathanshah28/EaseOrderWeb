import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/store.context'
import axios from "axios"

export default function placeOrder() {
    const {getTotalCartAmount,token,food_list,cartItems} = useContext(StoreContext)
    const [data,setData] = useState({
        fname : "",
        lname : "",
        email : "",
        street : "",
        city : "",
        state : "",
        address : "",
        special_Instruction : ""
    })

    const onChangeHandler = (event)=>{
        const name  = event.target.name
        const value = event.target.value
        return setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event)=>{
        event.preventDefault()
        let orderItems = []
        food_list.map((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo = item
                itemInfo["quantity"] = cartItems[item._id]
                itemInfo["status"] = "ACCEPTED"
                orderItems.push(itemInfo)
            }
        })
        let orderData = {
            address : data,
            items : orderItems,
            amount : getTotalCartAmount()+getTotalCartAmount()*0.05
        }
        const response = await axios.post("http://localhost:4000/api/v1/order/placeorder",orderData,{headers : {token : localStorage.getItem('token')}})
        if(response.data.success){
            const session_url = response.data.data.session

            window.location.replace(session_url)
        }else{
            alert("error")
        }
    }
  return (
    <form className='flex justify-center p-4 gap-[1px] md:gap-[50px] lg:gap-[200px] pt-6 dark:text-white' onSubmit={(e)=>onSubmitHandler(e)}>
        <div className='text-[10px] md:text-[14px] lg:text-[20px] space-y-1 md:space-y-2 lg:space-y-4'>
            <h2 className='text-[35px]'>Billing Information</h2>
            <div className='space-x-2 md:space-x-3'>
                <input value={data.fname} type="text" name='fname' placeholder='First Name' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' required  onChange={(e)=>onChangeHandler(e)}/>
                <input value={data.lname} type="text" name='lname' placeholder='Last Name' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' required onChange={(e)=>onChangeHandler(e)}/>
            </div>
            <div className='space-x-2 md:space-x-3'>
                <input value={data.email} type="email" name='email' placeholder='Email' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' required onChange={(e)=>onChangeHandler(e)}/>
                <input value={data.street} type="text" name='street' placeholder='Street' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' onChange={(e)=>onChangeHandler(e)}/>
            </div>
            <div className='space-x-2 md:space-x-3'>
                <input value={data.city} type="text" name='city' placeholder='City' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' onChange={(e)=>onChangeHandler(e)}/>
                <input value={data.state} type="text" name='state' placeholder='State' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md w-[80px] md:w-[120px] lg:w-[260px]' onChange={(e)=>onChangeHandler(e)}/>
            </div>
            <div className='space-x-2 md:space-x-3'>
                <input value={data.address} type='text' name='address' placeholder='Address' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md ' onChange={(e)=>onChangeHandler(e)}/>
            </div>
            <div className='space-x-2 md:space-x-3'>
                <input value={data.special_Instruction} type='text' name='special_Instruction' placeholder='Ex._ light , pure Jain etc.' className='bg-[#d4d4d4] bg-transparent p-2 rounded-md ' onChange={(e)=>onChangeHandler(e)}/>
            </div>
        </div>
        <div>
            <div className='text-[10px] md:text-[14px] lg:text-[20px] px-4 py-4 items-center space-y-[80px]'>
                <p>TotalCartAmount : ${getTotalCartAmount()}</p>
                <p>GST : ${getTotalCartAmount()*0.05}</p>
                <p>Total : ${getTotalCartAmount()+getTotalCartAmount()*0.05}</p>
                <button type='submit' className='border-solid p-2 rounded-lg bg-yellow-700 hover:scale-105 cursor-pointer'>Proceed to Payment</button>
            </div>
        </div>
    </form>
  )
}
