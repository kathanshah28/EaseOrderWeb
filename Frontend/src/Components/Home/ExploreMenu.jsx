import React, { useState,useEffect } from 'react'
import { menu_list } from '../../assets/assets.js'
import axios from 'axios'
export default function ExploreMenu({category,setCategory}) {
  // const [categories,setCategories] = useState([])
  // const fetchfood_items = async ()=>{
  //   const response = await axios.get("http://localhost:4000/api/v1/food/food_list")
  //   setCategories(Array.from(new Set((response.data.data).map(item => item.category))))
  // }
  // useEffect(()=>{
  //     async function loadData() {
  //         await fetchfood_items()
  //     }
  //     loadData()
  //     console.log(categories)
  // },[])
  return (
    <div className='dark:text-white' id='explore-menu'>
      <h2 className='text-[40px] p-4 font-[700]'>Explore our menu</h2>
      <p className='text-[25px] p-4'>Here is the list for all food lovers just pick one.</p>
      <div className='flex p-4 justify-evenly text-center gap-4 overflow-x-scroll no-scrollbar'>
        {
          menu_list.map((item,index)=>(
            <div className='' key={index} onClick={()=>{setCategory(prev=>prev===item.menu_name? 'All' : item.menu_name)}}>
              <img src={item.menu_image} className={`border-[1px] md:border-[3px] lg:border-[5px] rounded-full cursor-pointer hover:scale-110 ${category===item.menu_name ? 'border-[1px] md:border-[3px] lg:border-[5px] border-orange-700 p-2' : null}`}/>
              <h1 className={`text-[8px] md:text-[15px] lg:text-[25px] ${category===item.menu_name ? 'scale-105' : null}`}>{item.menu_name}</h1>
            </div>
          ))
        }
      </div>
      <hr className='mt-10 mb-0 h-[2px] mx-4 bg-[#e2e2e2] border-none text-center'/>
    </div>
  )
}
