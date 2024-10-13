import mongoose from 'mongoose'
import { order } from '../models/order.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apiError.js'
import { ApiResponse } from '../utils/apiResponse.js'
import validator from 'validator'
import Stripe from 'stripe'
import { Table } from '../models/table.model.js'


const strip = new Stripe(process.env.STRIP_SECRET_KEY)

const placeOrder = asyncHandler(async(req,res)=>{

    const frontend_Url = "http://localhost:5173"

    const newOrder = await order.create({
        fname : req.body.address.fname,
        lname : req.body.address.lname,
        email : req.body.address.email,
        items : req.body.items,
        amount : req.body.amount,
        tableNo : req.body.tableNo,
        restaurant_Name : req.body.restaurant_Name,
        special_Instruction : req.body.special_Instruction
    })

    if(!newOrder){
        throw new ApiError(401,"Error while creating newOrder to the database.")
    }

    const Tabledata = await Table.find({restaurant_Name : req.body.restaurant_Name , tableNo : req.body.tableNo})
    const emptycart = await Table.updateOne(
        { restaurant_Name: req.body.restaurant_Name, tableNo: req.body.tableNo },
        { $set: { cartData: {} } })

    const line_items = req.body.items.map((item)=>({
            price_data : {
                currency : "inr",
                product_data : {
                    name : item.name
                },
                unit_amount : item.price * 100 * 80
            },
            quantity : item.quantity
    }))

    const session = await strip.checkout.sessions.create({
        line_items : line_items,
        mode : "payment",
        success_url : `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url : `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`
    })
    return res.status(201)
    .json(new ApiResponse(201,{session : session.url},"Order successfully placed,your delicious food is on it's way......"))

})

const verifyOrder = asyncHandler(async (req,res)=>{
    const {orderId,success} = req.body

    if(success == "true"){
        await order.findByIdAndUpdate(orderId,{payment : true})
        return res.status(201).json(new ApiResponse(201,"Payment succesful."))
    }else{
        await order.findByIdAndDelete(orderId)

        return res.status(201).json(new ApiResponse(201,"Payment failed try again."))
    }
})

const getOrdersbyTableNo = asyncHandler(async (req,res)=>{
    const {tableNo} = req.body.tableNo

    const orders = await order.find({tableNo : req.body.tableNo})

    if(!orders){
        throw new ApiError(401,"You haven't orderes anything yet.")
    }

    return res.status(201)
    .json(new ApiResponse(201,orders,"Orders successfully fetched."))
})

const updateOrderItemStatus = asyncHandler(async (req,res)=>{
    const {orderId,itemId,status} = req.body

    const updatedOrders = await order.updateOne({_id : orderId , 'items._id' : itemId},{
        $set : {
            'items.$.status' : status
        }
    })

    if(!updatedOrders){
        throw new ApiError(401,"Error while updating item status try again.")
    }

    return res.status(201)
    .json(new ApiResponse(201,updatedOrders,"Item status successfully updated."))

})

const getOrderslist = asyncHandler(async (req,res)=>{
    const Orders_list = await order.find({})

    if(!Orders_list){
        throw new ApiError(401,"There is no order.")
    }

    return res.status(201).json(new ApiResponse(201,Orders_list,"order_list succesfully fetched."))
})

export {placeOrder,verifyOrder,getOrdersbyTableNo,updateOrderItemStatus,getOrderslist}

































// const addCustomerBillingdetails = asyncHandler(async (req,res,next)=>{
//     const {fname,lname,email} = req.body

//     if([fname,lname,email].some((item)=>item?.trim()==="")){
//         throw new ApiError(401,"All fields are required.")
//     }

    
//     if(!validator.isEmail(email)){
//         throw new ApiError(401,"Please provide valid email address.")
//     }
   
//     const existedOrder = await order.findOne({tableNo : req.body.tableNo})

//     if(!existedOrder){
//         const createdOrder = await order.create({
//             fname : fname ,
//             lname : lname,
//             email : email,
//         })
    
//         if(!createdOrder){
//             throw new ApiError(401,"error while uploading data to the database.")
//         }
//         // const updatedOrder = await order.findOneAndUpdate(existedOrder._id,{items : items})
//         // if(!updatedOrder){
//         //     throw new ApiError(401,"error while uploading data to the database.")
//         // }
//         // return res.status(201)
//         // .json(new ApiResponse(201,updatedOrder,"Items succesfully added to the cart."))
//     }

//     const updatedOrder = await order.findOneAndUpdate(existedOrder._id,{fname : fname , lname : lname , email : email})
//         if(!updatedOrder){
//             throw new ApiError(401,"error while uploading data to the database.")
//         }

//     // const createdOrder = await order.create({
//     //     fname : fname ,
//     //     lname : lname,
//     //     email : email,
//     //     items : items,
//     //     tableNo : req.body.tableNo
//     // })

//     // if(!createdOrder){
//     //     throw new ApiError(401,"error while uploading data to the database.")
//     // }
//     // return res.status(201)
//     // .json(new ApiResponse(201,createdOrder,"Items succesfully added to the cart."))
// })