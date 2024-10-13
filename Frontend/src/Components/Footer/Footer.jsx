import React from 'react'
import { assets } from '../../assets/assets'

export default function 
footer() {
  return (
    <div className='flex flex-col items-center bg-amber-400 w-full rounded-t-md' id='footer'>
        <div className='grid grid-cols-[2fr,1fr,1fr] p-4 gap-4'>
            <div className='text-[10px] md:text-[12px] lg:text-[16px] space-y-2 '>
                <p>Hope you enjoyed our services well. It will be our hounour to hear from you how likely you love our service and write about emprovements if you have any.</p>
                <h1>Stay Connected with us, we love and appreciate it.</h1>
                <div className='flex gap-3'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className='justify-center'>
                <h2 className='text-[16px] md:text-[18px] lg:text-[30px] font-[700]'>EASE ORDER</h2>
                <ul className='text-[10px] md:text-[12px] lg:text-[16px]'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>FeedBack</li>
                </ul>
            </div>
            <div>
                <h2 className='text-[16px] md:text-[18px] lg:text-[30px] font-[700]'>GET IN TOUCH</h2>
                <ul className='text-[10px] md:text-[12px] lg:text-[16px]'>
                    <li>+185184581651</li>
                    <li>contact.cafe@easeorder.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[98%] mx-4 h-[3px] mb-4 bg-[#e2e2e2] border-solid text-center'/>
        <p className='text-end'>@ 2024. All Rights reserved.</p>
    </div>
  )
}
