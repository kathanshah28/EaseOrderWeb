import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import {Route,Routes} from 'react-router-dom'
import FoodList from './pages/foodList.jsx'
import AddFoodItem from './pages/addFoodItem.jsx'
import AddNewTable from './pages/addNewTable.jsx'
import OrderStatusUpdate from './pages/orderStatusUpdate.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <div className=''>
        <ToastContainer/>
        <Navbar/>
        <hr className='h-[3px] border-gray-700'/>
        <div className='flex gap-1'>
          <div className='flex'> 
            <Sidebar/>
          </div>
          <Routes>
            <Route path='/' element={<FoodList/>}/>
            <Route path='/additem' element={<AddFoodItem/>}/>
            <Route path='/orderupdate' element={<OrderStatusUpdate/>}/>
            <Route path='/addTable' element={<AddNewTable/>}/>
          </Routes>
        </div>
    </div>
  )
}
