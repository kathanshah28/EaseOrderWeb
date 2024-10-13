import mongoose, { trusted } from "mongoose";

const orderSchema = new mongoose.Schema({
    fname: {
        type : String,
        required : true
    },

    lname: {
        type: String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    restaurant_Name : {
        type : String,
        required : true
    },

    tableNo:{
        type: Number,
        required : true
    },
    
    items : {
        type : Object,
        default : {},
    },

    amount : {
        type :Number,
        required : true
    },

    payment : {
        type : Boolean,
        default : false
    },

    status : {
        type : String,
        enum : ["accepting","accepted","rejected","Preparing","served"],
        default : "accepting"
    },

    special_Instruction : {
        type : String,
    }
},{versionKey : false, timestamps : true , minimize : false})

const order = mongoose.model('Orders',orderSchema)

export {order}