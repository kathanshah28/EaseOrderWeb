import { Menu } from '../models/menu.model.js';
import fs from 'fs'
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { deletebyfilename, uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const addMenuItem = asyncHandler(async (req,res)=> {
    const {name} = req.body

    if([name].some((field)=>field?.trim()==='')){
        throw new ApiError(400,"Name is required.")
    }

    const existedMenuCategory = await Menu.findOne({menu_name : name})

    if(existedMenuCategory){
        throw new ApiError(400,"Category with similar name already exist.")
    }

    //if item exist reply item already exist

    if(existedMenuCategory){
        fs.unlinkSync(req.file?.path)
        throw new ApiError(401,"Item with similar name already exist.")
    }

    const menucategoryimagelocalpath = req.file?.path

    if(!menucategoryimagelocalpath){
        throw new ApiError(401,"Image local path not find.")
    }

    const uploadedMenuImage = await uploadOnCloudinary(menucategoryimagelocalpath)

    if(!uploadedMenuImage){
        throw new ApiError(400,"Image upload on cloudinary failed.")
    }

    const newMenuCategory = await Menu.create({
        menu_name : name,
        menu_image : uploadedMenuImage.url
    })

    if(!newMenuCategory){
        throw new ApiError(402,"Error while updating data to the database.")
    }

    return res
    .status(201)
    .json(new ApiResponse(201,newMenuCategory,"New Menu category successfully added to the database."))
})

const fetchMenuCategory = asyncHandler(async (req,res)=>{
    const menu = await Menu.find({})

    return res
    .status(201)
    .json(new ApiResponse(201,menu,"Menu fetched successfully."))
})

export {addMenuItem,fetchMenuCategory}
