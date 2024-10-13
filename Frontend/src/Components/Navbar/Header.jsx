import React from 'react'
import { useContext,useEffect,useState } from 'react'
import threelinebutton from './list.png'
import search from './loupe.png'
import Navbar from './Navbar.jsx'
import logo from './../../assets/order.png'
import {HiMiniUserCircle,HiShoppingBag} from "react-icons/hi2"
import {HiSun, HiMoon } from "react-icons/hi";
import { themeContext } from '../../context/theme.context.js'
import { Link, NavLink } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { StoreContext } from '../../context/store.context.jsx'
import axios from 'axios'
import { IoFastFoodOutline } from "react-icons/io5";

export default function Header({ setNavbarVisible,setShowLogin }) {

  const [navbarVisible, setNavbarVisibleState] = useState(false)
  const [fetchedFoodItems,setFetchedFoodItems] = useState([])
  const [name,setname] = useState('')
  const {cartItems,token} = useContext(StoreContext)
  const [showSearchResult,setshowSearchResult] = useState(false)
  const {theme,setTheme} = useContext(themeContext)               //use curlly brackets when getting value from other js file

  const handleNavbarVisible = () => {
    setNavbarVisibleState(!navbarVisible)
    setNavbarVisible(!navbarVisible)
  }

  const searchFood = async(event)=>{
    event.preventDefault()
    const value = event.target.value
    setname(value)
    const data = {
      name : value
    }
    const response = await axios.post('http://localhost:4000/api/v1/food/search',data)
    setFetchedFoodItems(response.data.data)
  }

  useEffect(()=>{
    console.log(token)
  },[])


  return (
    <div className='flex items-center w-screen justify-between p-4' onClick={()=>{setshowSearchResult(false)}}>
        <Sidebar/>
      <div className='flex bg-slate-200 rounded-xl thi border-red-300 p-2 gap-2 items-center font-bold'>
        <img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]'src={search}/>
        <div className='space-y-2'>
          <input type='text' onChange={(e)=>{searchFood(e);setshowSearchResult(true)}} name='name' value={name} placeholder="search food" className='w-[140px] md:w-auto md: bg-transparent text-black'/>
          {showSearchResult?<div className='absolute w-[230px] max-h-[300px] h-fit z-[1] mb-5 bg-white dark:bg-[#00000090] overflow-y-scroll no-scrollbar rounded-lg'>
            {fetchedFoodItems.map(foodItem => (
            <div key={foodItem._id} className='flex items-center space-x-4 p-2 dark:text-white'>
              <img src={foodItem.image} alt={foodItem.name} className='w-[50px] h-[50px] rounded-lg' />
              <p>{foodItem.name}</p>
            </div>
          ))}
          </div> : null}
        </div>
      </div>
      <div className='flex justify-end gap-2 relative'>
        {!localStorage.getItem('token') ? <HiMiniUserCircle className='w-[30px] h-[30px] cursor-pointer hover:scale-150 hover:duration-75' onClick={()=>{setShowLogin(true)}}/> : 
          <NavLink to='/orders'><IoFastFoodOutline className='w-[30px] h-[30px] cursor-pointer hover:scale-150 hover:duration-75'/></NavLink>
        }
        <Link to='/cart'><HiShoppingBag className='w-[30px] h-[30px] cursor-pointer hover:scale-150 hover:duration-75'/></Link>
        <p className='block absolute w-[23px] h-[23px] text-center right-[30px] top-[-8px] text-[18px] rounded-[50%] bg-orange-600 bg-clip-border'>{Object.values(cartItems).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
        <div className='cursor-pointer'>
            { theme=='light' ? <HiMoon className='text-[30px] bg-slate-200 rounded-full px-1 text-black hover:bg-slate-500 hover:scale-150 hover:duration-75' onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}/> : <HiSun className='text-[30px] bg-white rounded-full px-1 text-black hover:bg-slate-500' onClick={()=>{setTheme('light');;localStorage.setItem('theme','light')}}/> }
        </div>
      </div>
    </div>
  )
}

// import React from 'react'
// import { useState } from 'react'
// import threelinebutton from './list.png'
// import {HiSearch} from "react-icons/hi";
// import { TbLayoutNavbar } from "react-icons/tb";
// import search from './loupe.png'
// import Navbar from './Navbar.jsx'

// export default function Header({ setNavbarVisible }) {
//     const [navbarVisible,setNavbarVisibleState] = useState(false)
//     const handleNavbarVisible = () => {
//         setNavbarVisibleState(!navbarVisible)
//         setNavbarVisible(!navbarVisible)
//       }
//   return (
//     <div className='flex items-center gap-2 bg-amber-400 p-2'>
//         <TbLayoutNavbar className='m-4 md:hidden lg:hidden' onClick={()=>{handleNavbarVisible}}/>
//         <Navbar navbarVisible={navbarVisible}/>
//         <div className='flex bg-slate-200 rounded-xl thi border-red-300 p-2 gap-2 items-center justify-center'>
//             <HiSearch className='w-[30px] h-[30px]'/>
//             <input type='text' placeholder="search food" className='bg-transparent'/>
//         </div>
//     </div>
//   )
//<div className='z-[1] bg-white w-[200px] h-[200px]'>
// {fetchedFoodItems.map((item,index)=>{
//   <div>
//     <img src={item.image}/>
//     <p>{item.name}</p>
//   </div>
//   })}
// </div>
// }
