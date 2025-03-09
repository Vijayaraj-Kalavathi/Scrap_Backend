const connectDataBase = require("../config/database");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.getSocial = catchAsyncError(async(req,res,next)=>{
    const {username, email,password,avater} = req.body;

   

    // Connect to the database and get the database instance
    const db = await connectDataBase();

    // Access the collection
    const collection = db.collection('social_analytics');

    // Find the first document in the collection
    const first = await collection.find().toArray();
    console.log("First document:", first);

    // Send the response
    res.status(200).json({
        success: true,
        data: first,
    });

    
})