import React, {useContext,useState,useEffect} from 'react'
import axios from 'axios'

export default function orderStatusUpdate() {

  const [orderlist,setOrderList] = useState([])

  const getOrders = async ()=>{
    const response = await axios.get("http://localhost:4000/api/v1/order/getorderlist")
    setOrderList(response.data.data)
  }

  const statusHandler = async (event,orderId,itemId)=>{
    const response = await axios.post("http://localhost:4000/api/v1/order/updateitemstatus",{
      orderId,
      itemId,
      status : event.target.value
    })
    if(response.data.success){
      getOrders()
    }
  }

  useEffect(()=>{
    getOrders()
  },[])
  
  return (
    <div>
      <div className=''>
        <div className='grid grid-cols-6 pt-6 justify-between text-[10px] md:text-[13px] lg:text-[18px]'>
            <p>TableNo</p>
            <p>Item</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Status</p>
            <p>Update</p>
        </div>
        <br/>
        <hr className='border-solid h-[4px] border-black dark:border-white'/>
        {orderlist.map((item,index) => {
          return (
              <>
              {item.items.map((subitem,index) => (
                  <div className="space-y-3">
                  <div className="grid grid-cols-6 pt-6 text-[10px] md:text-[13px] lg:text-[18px] items-center">
                      <img
                      src={subitem.image}
                      className="col-span-1 w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                      />
                      <p className='col-span-1'>{subitem.name}</p>
                      <p className=''>{item.tableNo}</p>
                      <p className='col-span-1'>{subitem.quantity}</p>
                        <select onChange={(event)=>statusHandler(event,item._id,subitem._id)} value={subitem.status} className='w-[150px]'>
                          <option value="PREPARING">PREPARING</option>
                          <option value="ACCEPTED">ACCEPTED</option>
                          <option value="REJECT">REJECT</option>
                          <option value="SERVED">SERVED</option>
                        </select>
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
