import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { RiFileListFill } from "react-icons/ri";
import { Link,NavLink } from 'react-router-dom'



export default function sidebar() {
  return (
    <div className='md:w-[250px] lg:w-[300px] bg-amber-400 h-screen'>
        <div className='space-y-4 p-4'>
            <div>
                <NavLink to='/additem' className='navlink' >
                    <IoMdAddCircle className='sidebar-options-icons'/>
                    <p className='sidebar-component-p'>Add Food Item</p>
                </NavLink>
            </div>
            <hr/>
            <div>
                <NavLink to='/' className='navlink'>
                    <RiFileListFill className='sidebar-options-icons'/>
                    <p className='sidebar-component-p'>food list</p>
                </NavLink>
            </div>
            <hr/>
            <div>
                <NavLink to='/orderupdate' className='navlink'>
                    <GoChecklist className='sidebar-options-icons'/>
                    <p className='sidebar-component-p'>order status update</p>
                </NavLink>
            </div>
            <hr/>
            <div>
                <NavLink to='/addTable' className='navlink'>
                    <GoChecklist className='sidebar-options-icons'/>
                    <p className='sidebar-component-p'>Add new Table</p>
                </NavLink>
            </div>
            <hr/>
        </div>
    </div>
  )
}
