import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import upload_area from './../assets/upload_area.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function addFoodItem() {

    const [image,setImage] = useState(false)
    const [data,setData] = useState({
        name: "",
        description : "",
        category : "Salad",
        price : ""
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        return setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("category",data.category)
        formData.append("price",Number(data.price))
        formData.append("image",image)
        const response = await axios.post('http://localhost:4000/api/v1/food/addfooditems',formData)
        console.log(response)
        if(response.data.success){
            setData({
                name: "",
                description : "",
                category : "Salad",
                price : ""
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='p-4 md:p-10'>
        <form className='space-y-5' onSubmit={onSubmitHandler}>
            <div className='grid grid-cols-2'>
                <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Upload Image : </p>
                <label htmlFor='image'>
                    <img className='' src={image?URL.createObjectURL(image):upload_area}/>
                    {/* here url.createobject url will create an image url that how image will be shown on change action.*/}
                <input onChange={(e)=>setImage(e.target.files[0])} className='left-[310px] top-[120px] ' type='file' id='image' hidden required/>
                </label>
            </div> 
            <div className='grid grid-cols-2'>
                <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Product Name : </p>
                <input onChange={(e)=>onChangeHandler(e)} value={data.name} type='text' id='name' name='name' placeholder='Type Here' required className='p-1 bg-transparent rounded-lg border-[3px]'/>
            </div>
            <div className='grid grid-cols-2'>
                <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Product Description : </p>
                <textarea onChange={(e)=>onChangeHandler(e)} value={data.description} name="description" id="description" rows="5" placeholder='Write Text Here' required className='p-1 bg-transparent rounded-lg border-[3px]'></textarea>
            </div>
            <div>
                <div className='grid grid-cols-2'>
                    <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Product Category : </p>
                    <select onChange={(e)=>onChangeHandler(e)} value={data.category} name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwitch">Sandwitch</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='grid grid-cols-2'>
                    <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Product Price : </p>
                    <input onChange={(e)=>onChangeHandler(e)} value={data.price} type='number' name='price' placeholder='$10' className='p-1 bg-transparent rounded-lg border-[3px]'/>
                </div>
            </div>
            <button type='submit ' className='absolute p-2 right-[30px] bg-yellow-700 rounded-lg text-[15px] md:text-[20px] lg:w-[100px] hover:scale-110'>ADD</button>
        </form>
    </div>
  )
}

