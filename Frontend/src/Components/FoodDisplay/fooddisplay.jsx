import React, { useState,useContext, useEffect } from 'react'
import { StoreContext } from '../../context/store.context'
import Fooditem from './fooditem.jsx'
import axios from 'axios'

export default function fooddisplay({category}) {
    const {food_list} = useContext(StoreContext)
    // const fetchfood_items = async ()=>{
    //     const response = await axios.get("http://localhost:4000/api/v1/food/food_list")
    //     setFoodlist(response.data.data)
    // }
    // useEffect(()=>{
    //     async function loadData() {
    //         await fetchfood_items()
    //     }
    //     loadData()
    // },[])
    // const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-5 mx-4 pb-3 dark:bg-black dark:text-white' id='food-display'>
        <h2 className='text-[40px] font-[700] mb-8'>Top dishes</h2>
        <div className='grid grid-cols-auto-fill gap-3'>
            {
                food_list.map((item,index)=>{
                    if(category === 'All' || category === item.category){
                        return <Fooditem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
                    }
                })
            }
        </div>
    </div>
  )
}
