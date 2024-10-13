import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    restaurant_Name : {
        type : String,
        required : true
    },
    tableNo : {
        type : Number,
        required : true
    },
    cartData : {
        type : Object,
        default : {}
    }
},{versionKey:false,timestamps:true,minimize : false})

const Table = mongoose.model("Tables",tableSchema)

export { Table }