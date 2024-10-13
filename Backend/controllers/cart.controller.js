import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from 'jsonwebtoken'
import { ApiResponse } from "../utils/apiResponse.js";
import { Table } from "../models/table.model.js";

const addToCart = asyncHandler(async (req,res)=>{
    const fetchedTableData = await Table.findOne({restaurant_Name : req.body.restaurant_Name , tableNo : req.body.tableNo})

    if(!fetchedTableData){
        throw new ApiError(401,"There is no Table Data with the given details available.")
    }

    let cartData = await fetchedTableData.cartData

    if(!cartData[req.body.id]){
        cartData[req.body.id] = 1
    }else{
        cartData[req.body.id] += 1
    }

    await Table.findOneAndUpdate(fetchedTableData._id,{cartData : cartData})

    const updatedTableData = await Table.findById(fetchedTableData._id)

    if(!updatedTableData){
        throw new ApiError(401,"Error while updating data into the database try again after some time.")
    }

    return res.status(201)
    .json(new ApiResponse(201,updatedTableData,"Item successfully added to the cart."))
})

const removefromCart = asyncHandler(async (req,res)=>{
    const fetchedTableData = await Table.findOne({restaurant_Name : req.body.restaurant_Name , tableNo : req.body.tableNo})

    if(!fetchedTableData){
        throw new ApiError(401,"There is no Table Data with the given details available.")
    }

    let cartData = await fetchedTableData.cartData

    if(cartData[req.body.id]>0){
        cartData[req.body.id] -= 1
    }else{
        return res.status(400).json(new ApiResponse(400,"There is no such item in the cart."))
    }

    await Table.findOneAndUpdate(fetchedTableData._id,{cartData : cartData})

    const updatedTableData = await Table.findById(fetchedTableData._id)

    if(!updatedTableData){
        throw new ApiError(401,"Error while updating data into the database try again after some time.")
    }

    return res.status(201)
    .json(new ApiResponse(201,updatedTableData,"Item successfully removed from the cart."))
})

const getCartItems = asyncHandler(async (req,res)=>{
    const fetchedTableData = await Table.findOne({restaurant_Name : req.body.restaurant_Name , tableNo : req.body.tableNo})

    if(!fetchedTableData){
        throw new ApiError(401,"There is no Table Data with the given details available.")
    }

    let cartData = await fetchedTableData.cartData

    if(!cartData){
        return res.status(201).json(new ApiResponse(201,"There is no item in the cart.","Items in the cart fetched successfully."))
    }
    return res.status(201).json(new ApiResponse(201,cartData,"Items in the cart fetched successfully."))
})

export {addToCart,removefromCart,getCartItems}