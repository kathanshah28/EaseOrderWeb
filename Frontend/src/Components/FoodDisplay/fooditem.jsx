import React, { useContext, useState,useEffect } from 'react'
import rating_stars from './../../assets/rating_starts.png'
import addiconwhite from '../../assets/add_icon_white.png'
import addicongreen from '../../assets/add_icon_green.png'
import removeiconred from '../../assets/remove_icon_red.png'
import { StoreContext } from '../../context/store.context'

export default function fooditem({id,name,image,price,description,category}) {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='border rounded-[15px] shadow-sm dark:text-white hover:scale-105'>
        <div className='relative'>
            <img src={image} className='rounded-t-[15px]'/>
            {   
                !cartItems[id] ? <img className='absolute m-2 bottom-[3px] end-2 cursor-pointer' onClick={()=>{addToCart(id)}} src={addiconwhite}/> :
                <div className='absolute flex items-center gap-2 m-2 bottom-[3px] end-2'>
                    <img className='cursor-pointer' src={removeiconred} onClick={()=>{removeFromCart(id)}}/>
                    <p>{cartItems[id]}</p>
                    <img className='cursor-pointer' src={addicongreen} onClick={()=>{addToCart(id)}}/>
                </div>
            }
        </div>
        <div className='m-2'>
            <div className=''>
                <p className='dark:text-white'>{name}</p>
                <img src={rating_stars} className=''/>
            </div>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}
