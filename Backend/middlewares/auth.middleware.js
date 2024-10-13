import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/apiError.js'

const authMiddleware = async (req,res,next)=>{
    const {token} = req.headers

    if(!token){
        throw new ApiError(401,"Not authorized login again.")
    }

    const decodedtoken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)

    if(!decodedtoken){
        throw new ApiError(401,"error while decoding.")
    }

    req.body.restaurant_Name = decodedtoken.restaurant_Name
    req.body.tableNo = decodedtoken.tableNo
    next()
}

export {authMiddleware}