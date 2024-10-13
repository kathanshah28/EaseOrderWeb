import mongoose from "mongoose";
import { Food } from "../models/food.model.js";
import fs from 'fs'
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { deletebyfilename, uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";


//add foodItem

const addFood = asyncHandler(async (req,res)=>{
    const {name,description,price,image,category} = req.body

    //check if all data are coming or not

    if([name,description,price,image,category].some((field)=>field?.trim()==='')){
        throw new ApiError(400,"Each field is required.")
    }

    //check whether the item with similar name exist on database or not

    const existeditem = await Food.findOne({name})

    //if item exist reply item already exist

    if(existeditem){
        fs.unlinkSync(req.file?.path)
        throw new ApiError(401,"Item with similar name already exist.")
    }

    //check for images

    const imageLocalPath = req.file?.path

    if(!imageLocalPath){
        throw new ApiError(400,"image file path not found.")
    }

    const uploadedImage = await uploadOnCloudinary(imageLocalPath)

    if(!uploadedImage){
        throw new ApiError(400,"Image upload on cloudinary failed.")
    }

    const food = await Food.create({
        name : name ,
        description : description,
        price : price,
        image : uploadedImage.url,
        category : category
    })

    const createdFooditem = await Food.findById(food._id)

    if(!createdFooditem){
        throw new ApiError(500,"error while addidng food data to the database.")
    }

    return res
    .status(201)
    .json(new ApiResponse(201,food,"Succesfully food added to the list"))
})

const listFood = asyncHandler(async (req,res)=>{
    const food_list = await Food.find({})

    if(!food_list){
        throw new ApiError(401,'error fetching food_list')
    }

    return res.status(201).json(new ApiResponse(201,food_list,"food_list succesfully fetched"))
})

const removeFoodItem = asyncHandler(async (req,res)=>{

    const {id} = req.body

    if(!id){
        throw new ApiError(401,"please provide id of the food item you want to delete.")
    }

    const fetchedFoodItem = await Food.findById(id)

    if(!fetchedFoodItem){
        throw new ApiError(400,"There is no such food item with the provided id.")
    }

    const deletedimg = await deletebyfilename(fetchedFoodItem.image.split('/').pop().split('.')[0])

    if(!deletedimg){
        throw new ApiError(400,"error while deleting image from cloud.")
    }

    const deletedFood = await Food.findByIdAndDelete(id)

    if(!deletedFood){
        throw new ApiError(401,"Error while deleting item from the database.")
    }

    return res.status(201).json(new ApiResponse(201,deletedFood,"item Succesfully deleted from the database."))
})

const searchFoodItem = asyncHandler(async (req,res)=>{
    const {name} = req.body

    const matchedfoods = await Food.find({ name : { $regex: name, $options : 'i' } })

    if(!matchedfoods){
        // return res.status(401).json(new ApiResponse(401))
        throw new ApiError(401,"there is no food with such name or category.")
    }

    return res.status(201)
    .json(new ApiResponse(201,matchedfoods,"Foods with similar name successfully fetched."))
})

export {addFood,listFood,removeFoodItem,searchFoodItem}
