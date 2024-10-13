import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"
import dotenv from 'dotenv'
import { ApiError } from './apiError.js'
import { resolve } from 'path'

dotenv.config({
    path : './.env'
})



cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        console.log("on error part",error)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

const fetchallImages = async()=>{
    return new Promise((resolve, reject) => {
        cloudinary.api.resources({
          type: 'upload',
          max_results: 100
        }, (error, result) => {
          if (error) {
            reject(new ApiError(500, 'error while fetching data from the cloudinary', error));
          } else {
            resolve(result.resources);
          }
        });
    })
}

const deletebyfilename = async(name)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.api.delete_resources([name],{type : 'upload' , resource_type : 'image'})
    }),(error,result)=>{
        if(error){
            reject(new ApiError(500,"error while deleting data from the cloudinary"))
        }else{
            resolve(result.response)
        }
    }
}
export {uploadOnCloudinary,fetchallImages,deletebyfilename}