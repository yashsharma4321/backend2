// import express from "express"
// const app = express()
// export { app }

import cors  from "cors"
import cookieParser from "cookie-parser";
 
import express from "express";
const app = express();
//cookkies is 2 way 
app.use(cors({//middleware
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//routes import 
import  userRouter from './routes/user.routes.js'
//routes declaration
app.use("/api/v1/users",userRouter)

export { app }
