import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

export default function verify() {
    const [searchParamas,setSearchParams] = useSearchParams()
    const [Spinvisible,setSpinvisible] = useState(true)
    const [payment,setPayment] = useState(false)
    const success = searchParamas.get('success')
    const orderId = searchParamas.get('orderId')

    const verifyPayment = async () => {
        const response = await axios.post('http://localhost:4000/api/v1/order/verify',{success,orderId})
        if(response.data.success){
            setSpinvisible(false)
            setPayment(true)
            toast.success(response.data.data)
        }else{
            toast.error("Payment failed.")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <div className='grid min-h-[70vh]'>
        <div className={`${Spinvisible?' w-[100px] h-[100px] place-self-center  border-[5px] border-solid border-[#bdbdbd] border-t-[#FFBF00] rounded-[50%] animate-rotate' : 'hidden'}`}>
        </div>
        <div className='place-self-center text-[40px] font-[700]'>{payment?'Payment Successful Order will be served to you shortly.':'Payment failed please try again after some time.'}</div>
    </div>
  )
}
