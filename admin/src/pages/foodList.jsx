import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import remove_icon_red from './../assets/remove_icon_red.png'


export default function foodList() {
    const [list,setList] = useState([])

    const fetchlist = async ()=> {
        const response = await axios.get("http://localhost:4000/api/v1/food/food_list")
        if(response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error(response.data.message)
        }
    }

    const removeItem = async (id)=>{
        const data = {
            id : id
        }
        const response = await axios.post("http://localhost:4000/api/v1/food/removefooditem",data)
        if(response.data.success){
            await fetchlist()
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

    // const handleRemoveItem = (id) => {
    //     const newItems = list.filter(item => item.id !== id);
    //     setItems(newItems);
    // }

    useEffect(()=>{
        fetchlist()
    },[])

  return (
    <div className='item w-screen container box-border '>
        <p className='text-center font-[700] text-[18px] md:text-[22px] lg:text-[25px]'>All Food List</p>
        <div className='grid grid-cols-5 pt-5 text-[10px] md:text-[13px] lg:text-[18px] justify-between'>
                <p>Item</p>
                <p>Title</p>
                <p>Description</p>
                <p>Price</p>
                <p>Remove</p>
        </div>  
        <br/>
        <hr className='border-solid h-[4px] border-black dark:border-white'/>
        {list.map((item,index)=>{
            return (
                <div className='justify-between '>
                    <div className='space-y-3'>
                    <div className='grid grid-cols-5 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px] items-center'>
                        <img src={item.image} className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]'/>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <img className='hover:scale-105 cursor-pointer' src={remove_icon_red} onClick={()=>{removeItem(item._id);} }/>
                    </div>
                    <hr className='border-solid h-[4px] border-black dark:border-white'/>
                    </div>
                </div>
            )
            }
        )}
    </div>
  )
}
