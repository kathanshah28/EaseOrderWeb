import mongoose, { syncIndexes } from "mongoose";
import { Table } from "../models/table.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from 'jsonwebtoken'
import { ApiResponse } from "../utils/apiResponse.js";

const generateToken = async (id)=>{
    const existtable = await Table.findById(id)
    return jwt.sign(
        {
            restaurant_Name : existtable.restaurant_Name ,
            tableNo : existtable.tableNo

        },process.env.REFRESH_TOKEN_SECRET
    )
}

const registerTable = asyncHandler(async (req,res)=>{
    const {restaurant_Name , tableNo} = req.body

    if(!restaurant_Name || !tableNo){
        throw new ApiError(401,"All fields are required.")
    }

    const existedTable = await Table.findOne({
        $and : [{restaurant_Name , tableNo}]
    })

    if(existedTable){
        throw new ApiError(400,"This tableNo with this restaurantName already exist please try recheck.")
    }

    
    const newTable = await Table.create({
        restaurant_Name : restaurant_Name,
        tableNo : tableNo
    })
    
    const token = await generateToken(newTable)

    return res.status(201)
    .json(new ApiResponse(201,{newTable,token},`Table for restaurant ${restaurant_Name} created successfully.`))

})

const loginTable = asyncHandler(async (req,res)=>{
    const {restaurant_Name,tableNo} = req.body

    if(!restaurant_Name || !tableNo){
        throw new ApiError(401,"All fields are required.")
    }

    const existedTable = await Table.findOne({
        $and : [{restaurant_Name , tableNo}]
    })

    if(!existedTable){
        throw new ApiError(400,"This tableNo with this restaurantName not exist please try recheck or create a new one.")
    }

    const token = await generateToken(existedTable._id)

    return res.status(201)
    .json(new ApiResponse(201,{token},"Table data succesfully synced."))
})

export {registerTable,loginTable}