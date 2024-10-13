import React, { useState } from 'react'
import ExploreMenu from './ExploreMenu'
import header_img from './../../assets/header_img.png'
import FoodDisplay from '../FoodDisplay/fooddisplay.jsx'

export default function home() {
    const [category,setCategory] = useState('All')
  return (
    <div>

    <div className='relative p-3'>
        <div className='absolute bottom-6 left-6 right-6 animate-fadeIn'>
            <h1 className='text-[22px] md:text-[30px] md:font-[300] lg:text-[40px] font-[300]'>Give your beloved a lovely treat</h1>
            <p className='text-[12px] md:text-[15px] lg:text-[22px]'>We here not just serve you food of best quality, we serve food with feelings And That's what makes us different from others</p>
            <button className='text-[10px] md:text-[18px] lg:text-[24px] rounded-b-xl bg-orange-600 hover:scale-105 hover:bg-blue-gray-300 p-2'>Order Now</button>
        </div>
        <img src={header_img} className='md:h-[380px] w-full object-fill rounded-2xl mr-2'/>
    </div>
    <ExploreMenu category = {category} setCategory={setCategory}/>
    <FoodDisplay category = {category}/>
    </div>
  )
}
