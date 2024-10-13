import express from 'express'
import cors from 'cors'
import { ApiResponse } from './utils/apiResponse.js'
import dotenv from 'dotenv'
import { connectDB } from './db/index.js'

//.env file config

dotenv.config({
    path : './.env'
})


//app config

const app = express()

//middleware


app.use(express.json())           //body parser to json
app.use(cors())                   //access backend from any frontend


app.get('/api/v1/',(req,res)=>{
    res.status(201).json(new ApiResponse(201,{},"Server Connection Succesful"))
})

//food router setup 

import foodRouter from './routes/food.route.js'
app.use('/api/v1/food',foodRouter)

//user router setup

import userRouter from './routes/user.route.js'
app.use('/api/v1/user',userRouter)

//table router setup

import tableRouter from './routes/table.route.js'
app.use('/api/v1/table',tableRouter)

//cart roter setup

import cartRouter from './routes/cart.route.js'
app.use('/api/v1/cart',cartRouter)

//order router setup

import orderRouter from './routes/order.route.js'
app.use('/api/v1/order',orderRouter)


//MenuCategory router setup 

import menuRouter from './routes/menu.route.js'
app.use('/api/v1/menu',menuRouter)

//for fetching all the data from cloudinary

// import { fetchallImages } from './utils/cloudinary.js'

// app.use('/images',async (req,res)=>{
//     try {
//         const images = await fetchallImages();
//         res.json(new ApiResponse(400, images, "success hit end point."));
//       } catch (error) {
//         res.json(new ApiResponse(500, null, error.message));
//       }
// })
//DBconnection

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("Failed to establish connection between app and database.",error)
    })
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server started at port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("database connection failed",err)
})    