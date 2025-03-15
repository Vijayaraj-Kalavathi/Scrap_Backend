const catchAsyncError = require("../middlewares/catchAsyncError");
const userModel = require("../models/userModel");
const sendToken = require("../Utils/jwt");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  console.log("req", req);
  const { username, email, password, avater } = req.body;

  const userEmail = await userModel.findOne({ email });

  console.log("userEmail", userEmail);
  if (userEmail) {
    return res.status(409).json({ Msg: "User Already Exist. Please Login" });
  }

  const user = await userModel.create({ username, email, password, avater });
  console.log("Uaser", user);

  sendToken(user, 201, res); // reuseFunction
  // const token = user.getJwtToken()

  // console.log("Token",token);

  // res.status(201).json({
  //     sucess:true,
  //     user,
  //     token

  // })
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  console.log("login", req);
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  const user = await userModel.findOne({ email }).select("+password");

  console.log("user", user);

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

 // console.log("isValidPassword", !user.isValidPassword(password));
  if (!(await user.isValidPassword(password))) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 201, res);
});
