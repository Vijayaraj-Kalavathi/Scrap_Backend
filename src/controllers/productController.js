const connectDataBase = require("../config/database");
const catchAsyncError = require("../middlewares/catchAsyncError");
const productModel = require("../models/productModel");


exports.PostProduct = catchAsyncError(async(req,res,next)=>{

    const {Product_Name,avater,unit,rate,description} = req.body;
    console.log("body",req.body);

    const product = await productModel.create({Product_Name,avater,unit,rate,description})
    console.log("product",product);
    //  res.status(200).json({
    //     sucess:true,
    //     user,
    //     token
    
    // })

})


exports.GetProductAll = catchAsyncError(async(req,res,next)=>{
   const db = await connectDataBase();
   const collection = db.collection('products')
   const first = await collection.find().toArray();
   console.log("Products:", first);

   // Send the response
   res.status(200).json({
       success: true,
       data: first,
   });
})

exports.UpdateSingleProduct = catchAsyncError(async(req,res,next)=>{
  const {id,Product_Name,avater,unit,rate,description}  = req.body
  const product = await productModel.findByIdAndUpdate(id,{Product_Name,avater,unit,rate,description},{ new: true, runValidators: true })
  console.log("product",product);
})