import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [food_list,setFoodlist] = useState([])
    const [orderlist,setOrderList] = useState([])
    const [cartItems,setCartItems] = useState({})
    const [token,setToken] = useState("")
    const [orderedItems,setOrderedItems] = useState({})
    const getOrders = async ()=>{
        const response = await axios.get("http://localhost:4000/api/v1/order/getorderlist")
        setOrderList(response.data.data)
    }
    useEffect(()=>{
        async function loadData() {
            await fetchfood_items()
        }
        async function loadcart(){
            await getcart()
        }
        async function loadOrders() {
            await getOrders()
        }
        loadData()
        loadcart()
        loadOrders()
    },[])


    const addToCart = async (ItemId)=>{
        if(!cartItems[ItemId]){
            setCartItems((prev)=>({...prev,[ItemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        }
        if(localStorage.getItem('token') !== ""){
            const response = await axios.post('http://localhost:4000/api/v1/cart/addtocart',{id : ItemId},{headers : {token : localStorage.getItem('token')}})
            if(response.data.success){
                toast.success(response.data.message)
            }
        }
    }

    const removeFromCart = async (ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
        if(localStorage.getItem('token') !== ""){
            const response = await axios.post('http://localhost:4000/api/v1/cart/removefromcart',{id : ItemId},{headers : {token : localStorage.getItem('token')}})
            if(response.data.success){
                toast.success(response.data.message)
            }
        }
    }

    
    const getTotalCartAmount = ()=>{
        let TotalAmount = 0
        for(const item in cartItems){
            let itemInfo = food_list.find((product)=>product._id === item)
            TotalAmount = TotalAmount + itemInfo.price * cartItems[item]
        }
        return TotalAmount
    }

    const contextValue = {
        food_list,token,orderedItems,cartItems,orderlist,setCartItems,addToCart,removeFromCart,getTotalCartAmount,setToken,setOrderedItems,setOrderList
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider