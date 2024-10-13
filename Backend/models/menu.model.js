import mongoose, { mongo } from "mongoose";

const menuSchema = new mongoose.Schema({
    menu_name : {
        type : String,
        required : true,
        unique : true
    },
    menu_image : {
        type : String,
        required : true
    }
},{
    versionKey: false,
    timestamps :false
})

const Menu = mongoose.model('Menu',menuSchema)

export {Menu}