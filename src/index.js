//require('dotenv').config({path :'./env'})
import dotenv from "dotenv"
import express from "express"
import { app } from './app.js'

import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is runing at port :${process.env.PORT}`); 
    })
})
.catch((err)=>{
    console.log("mongo dp connection failtd !!",err);
})
// .then(() =>{
//     app.listen(process.env.PORT || 8000 ,()=>{
//         console.log(`Server is running at port :${process.env.PORT}`)
//     })





// })


// .catch((err) => {
//     console.log("mon/.e")
// }) 
// import express from "express"
// const app = express()
// //wrap try catch
// (async() =>
// {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("ERRR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Appp is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("ERROR:",error)
//         throw err
//     }
// })()