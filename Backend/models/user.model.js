import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type: String,
    },

    tableNo : {
        type : Number,
        required : true,
        unique : true,
    },
    cartData : {
        type : Object,
        default : {},

    }
},{versionKey : false, timestamps : true , minimize : false})

const user = mongoose.model('User',userSchema)

export {user}