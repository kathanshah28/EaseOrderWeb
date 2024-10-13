import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({

},{versionKey : false, timestamps : true})

const cart = mongoose.model('Cart',cartSchema)

export {cart}