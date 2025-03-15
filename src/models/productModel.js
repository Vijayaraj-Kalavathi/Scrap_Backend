const  mongoose  = require("mongoose");



const productScheme = new mongoose.Schema({
    Product_Name:{
        type:String,
        required:[true,'Please enter the Prodcut Name']
    },
    avater:{
        type: String,
        required:true,
    },
    unit:{
        type:String,
    },
    rate:{
        type:Number,
        required:[true,"Kindly enter the Rate"],
        default:0
    },
    description:{
        type:String,
        required:[true,'Kindly enter the Description']
    }
})

let productModel = mongoose.model("Product",productScheme)

module.exports = productModel;