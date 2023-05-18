
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   mrp:{
    type:Number,
    required:true,
   },
   discount:{
    type:Number,
    required:true,
   },     
   shipcharge:{
    type:Number,
    required:true
   },
   total:{
    type:Number,
    required:true
   },
   des:{
    type:String,
    required:true
   },
   image:{
    type:Array,
    required:true
   }
})


module.exports = mongoose.model('Products',productSchema)