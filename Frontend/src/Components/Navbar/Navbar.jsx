import React, { useState } from 'react'
import threelinebutton from './list.png'
import search from './loupe.png'
import { Link } from 'react-router-dom'

export default function Navbar({ navbarVisible }) {
    const [activeMenu,setActiveMenu] = useState('home')
  return (
    <div className={`max-md:hidden w-[120px] bg-amber-400 h-[95vh] md:w-[180px] lg:w-[230px] ${navbarVisible ? 'block' : 'hidden'} `}>
      <ul className='font-[500] pl-7 pt-8 space-y-8'>
        <li className='hover:scale-110 cursor-pointer' onClick={()=>{setActiveMenu('home')}}><Link to='/' className='text-black'>Home{activeMenu==='home' ? <hr className='border-none  w-[46px] h-[3px] rounded-[10px] bg-black'/>:null}</Link></li>
        <li className='hover:scale-110 cursor-pointer' onClick={()=>{setActiveMenu('feedback')}}><Link to='/feedback' className='text-black'>Feedback{activeMenu==='feedback' ? <hr className='border-none  w-[72px] h-[3px] rounded-[10px] bg-black'/>:null}</Link></li>
        <li className='hover:scale-110 cursor-pointer' onClick={()=>{setActiveMenu('aboutus')}}>About Us{activeMenu==='aboutus' ? <hr className='border-none  w-[70px] h-[3px] rounded-[10px] bg-black'/>:null}</li>
        <li className='hover:scale-110 cursor-pointer' onClick={()=>{setActiveMenu('contactus')}}>Contact Us{activeMenu==='contactus' ? <hr className='border-none  w-[82px] h-[3px] rounded-[10px] bg-black'/>:null}</li>
      </ul>
    </div>
  )
}
// import React from 'react'
// import threelinebutton from './list.png'
// import search from './loupe.png'

// export default function Navbar({ navbarVisible }) {
//   return (
//     <div className={`max-md:hidden absolute bg-amber-400 md:h-[95vh] md:w-[150px] ${navbarVisible ? 'block' : 'hidden'}`}>
//         <ul className=''>
//             <li>Home</li>
//             <li>Feedback</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//         </ul>
//     </div>
//   )
// }
