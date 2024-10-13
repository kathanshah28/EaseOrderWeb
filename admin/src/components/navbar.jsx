import React from 'react'
import logo from './../assets/order.png'
import { CgProfile } from "react-icons/cg";

export default function navbar() {
  return (
    <div className='flex justify-between items-center p-4'>
        <img src={logo} alt="" className='w-[40px] h-[40px]'/>
        <CgProfile className='w-[40px] h-[40px]'/>
    </div>
  )
}
