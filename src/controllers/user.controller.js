import { asyncHandler  } from "../utils/asyncHandlers.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";



const registerUser = asyncHandler(async(req,res)=>{



  const {fullName,email,username,password} = req.body
  console.log("email: ",email);
  if(
  [fullName,email,username,password].some((field)=> field?.trim === "")

  ){
    throw new ApiError(400,"All feild are required")
  }
  const existedUser  = User.findOne({
        $or:[{username},{email}]
  })
  if(existedUser){
    throw new ApiError(409,"User with email or username already exists")

  }
  const avatarLocalPath = req.files?.avatar[0]?.path
 const converImageLocalPath =  req.files?.coverImage[0]?.path;
 if(!avatarLocalPath){
    throw new ApiError(400,"avatar file is required")
 }
 //upload on cloud
 const avatar = await uploadOnCloudinary(avatarLocalPath)
 const coverImage = uploadOnCloudinary(converImageLocalPath)
 if(!avatar){
    throw new ApiError(400,"Avatar file is required")
 }
 const user = await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
 })
const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
)
if(!createdUser){
    throw new ApiError(500,"Some went wrong while registering the user")

}
return res.status(201).json(
    new ApiResponse(200,createdUser,"User registed succesfully")
)




})



export { registerUser }