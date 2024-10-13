import React, { useContext, useEffect,useState } from 'react'
import axios from 'axios'
import { StoreContext } from '../../context/store.context.jsx'

export default function orders() {
    const {orderlist,setOrderList} = useContext(StoreContext)
  return (
    <div>
        <div className='dark:text-white'>
            <p>Here is the list</p>
            <div className='grid grid-cols-6 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px]'>
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Status</p>
            </div>
            <br/>
            <hr className='border-solid h-[4px] border-black dark:border-white'/>
            {orderlist.map((item) => {
                return (
                    <>
                    {item.items.map((subitem) => (
                        <div className="space-y-3">
                        <div className="grid grid-cols-6 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px] items-center">
                            <img
                            src={subitem.image}
                            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                            />
                            <p>{subitem.name}</p>
                            <p>${subitem.price}</p>
                            <p>{subitem.quantity}</p>
                            <p>${subitem.price * subitem.quantity}</p>
                            <p>{subitem.status}</p>
                        </div>
                        <hr className="border-solid h-[4px] border-black dark:border-white" />
                        </div>
                    ))}
                    </>
                );
            })}
        </div>
    </div>
  )
}
