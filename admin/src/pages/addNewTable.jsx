import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function addNewTable() {
    const [tableNo,setTabeNo] = useState(0)

    const onChangeHandler = async (event)=>{
        const name = event.target.name
        const value = event.target.value
        return setTabeNo(value)
    }

    const onSubmitHandler = async (event)=>{
        event.preventDefault()
        const data = {
            restaurant_Name : "Evening Post",
            tableNo : tableNo
        }
        const response = await axios.post("http://localhost:4000/api/v1/table/register",data)
        console.log(response)
        if(response.data.success){
            toast.success(response.data.message)
        }else{
            toast.error("Table already exist for this hotel.")
        }
    }

    useEffect(()=>{
        console.log(tableNo)
    },[tableNo])
  return (
    <div className='w-screen'>
        <p className='text-center font-[700] text-[18px] md:text-[22px] lg:text-[25px]'>Add new Table</p>
        <form className='space-y-3' onSubmit={(e)=>onSubmitHandler(e)}>
            <div className=''>
                <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Table No : </p>
                <input type='number' onChange={(e)=>onChangeHandler(e)} value={tableNo} name='tableNo' placeholder='Ex. 1-2' required className='p-1 bg-transparent rounded-lg border-[3px]'/>
            </div>
            <button type='submit ' className='absolute p-2 right-[30px] bg-yellow-700 rounded-lg text-[15px] md:text-[20px] lg:w-[100px] hover:scale-110'>ADD</button>
        </form>
    </div>
  )
}
