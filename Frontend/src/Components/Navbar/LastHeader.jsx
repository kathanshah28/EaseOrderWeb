import React from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import logo from './../../assets/order.png'

export default function 
() {
  return (
    <div className='flex md:grid grid-cols-2 items-center'>
        <div className='md:col-span-1'>
            <Sidebar/>
        </div>
        <div className='md:col-span-1 justify-items-end'>
            <Header/>
        </div>
    </div>
  )
}
