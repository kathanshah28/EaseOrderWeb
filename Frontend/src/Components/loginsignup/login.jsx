import React, { useContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { StoreContext } from '../../context/store.context.jsx'
import axios from 'axios'

export default function login({setShowLogin}) {
  const [data,setData] = useState({})
  const {token,setToken} = useContext(StoreContext)
  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    return setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    const response = await axios.post('http://localhost:4000/api/v1/table/login',data)
    console.log(response.data)
    if(response.data.success){
      console.log(response.data.data.token)
      setToken(response.data.data.token)
      localStorage.setItem('token',token)
      toast.success(response.data.message)
      setShowLogin(false)
    }else{
      toast.error(response.data.message)
      setShowLogin(false)
    }
  }

  return (
    <div className='grid p-4 w-[100%] h-[100%] absolute z-[1] mb-5 bg-[#00000090]' >
        <form className='p-5 flex flex-col place-self-center md:w-[330px] lg:w-[500px] items-center space-y-5 text-[#808080] bg-white rounded-lg shadow-lg animate-fadeIn1s' onSubmit={(e)=>onSubmitHandler(e)}>
          <p className='text-[35px] font-[700]'>Sync your table</p>
          <div>
            <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Restaurant Name :- </p>
            <input type='text' onChange={(e)=>onChangeHandler(e)} value={data.restaurant_Name} name='restaurant_Name' required className='p-1 bg-transparent rounded-lg border-[3px]'/>
          </div>
          <div>
            <p className='text-[15px] md:text-[20px] lg:text-[25px] font-[500]'>Table No :- </p>
            <input type='number' onChange={(e)=>onChangeHandler(e)} value={data.tableNo} name='tableNo' required className='p-1 bg-transparent rounded-lg border-[3px]'/>
          </div>
          <button type='submit' className='text-black p-2 bg-yellow-700 rounded-lg text-[15px] md:text-[20px] lg:w-[100px] hover:scale-110'>Login</button>
        </form>
    </div>
  )
}
