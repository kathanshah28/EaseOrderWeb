import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'
import validator from 'validator'
import { user} from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";



const generateToken = async (id)=>{
    return jwt.sign(
        {
            id
        },process.env.REFRESH_TOKEN_SECRET
    )
}

// next v2 update customer can also login and view there history and all in our interface.below is that updated code but now not needed.

const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password,tableNo} = req.body

    if([name,email,password].some((field)=>field?.trim() === "")){
        throw new ApiError(400,"Each field is required.")
    }
    else if(!tableNo){
        throw new ApiError(401,"tableNo filed is required.")
    }

    if(!validator.isEmail(email)){
        throw new ApiError(401,"Please provide valid email address.")
    }

    const existedUser = await user.findOne({
        $or : [{email , tableNo}]
    })

    if(existedUser){
        throw new ApiError(401,"User with the similar email or already table exist address already existed.")
    }

    const newUser = await user.create({
        name : name,
        email : email,
        password : bycrypt.hashSync(password,8),
        tableNo : tableNo
    })

    if(!newUser){
        throw new ApiError(401,"error while registering new user please try again.")
    }

    const token = await generateToken(newUser._id)

    return res.status(201)
    .json(new ApiResponse(201,{newUser , token},"user successfully registered."))
})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body

    if([email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(401,"all fields are required to fill.")
    }

    const existedUser = await user.findOne({email})

    if(!existedUser){
        throw new ApiError(401,"There is no user with such email, Please create one or try again checking.")
    }

    const isPasswordMatch = await bycrypt.compareSync(password,existedUser.password)

    if(!isPasswordMatch){
        throw new ApiError(400,"Invalid credential, Please check and try again.")
    }

    const token = await generateToken(existedUser._id)

    return res.status(201)
    .json(new ApiResponse(201,{existedUser,token},"User successful registered."))
})


export {loginUser, registerUser}