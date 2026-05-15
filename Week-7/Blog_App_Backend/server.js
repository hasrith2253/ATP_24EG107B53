import exp from 'express'
import {config} from 'dotenv'

import {connect} from 'mongoose'

import {userApp} from './APIs/UserAPI.js'
import {authorApp} from './APIs/AuthorAPI.js'
import {adminApp}from './APIs/AdminAPI.js'
import { commanApp } from './APIs/CommanAPI.js'
import cookieParser from "cookie-parser";
import cors from "cors";

config()

const app  = exp()


// body parser middleware
app.use(exp.json())

app.use('/uploads', exp.static('uploads'))

app.use(cookieParser())

app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [process.env.FRONTEND_URL];
        const isLocalhost = origin && (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1'));
        if (!origin || allowedOrigins.indexOf(origin) !== -1 || isLocalhost || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}))

// path level middleware
app.use("/user-api",userApp);
app.use("/author-api",authorApp);
app.use("/admin-api",adminApp);
app.use("/auth",commanApp);

const connectDB = async ()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("db connected");
// asign the port
        const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server listening on ${port}..`));

    } catch(error){
        console.error("Database connection error details:");
        console.error("Name:", error.name);
        console.error("Message:", error.message);
        console.error("Code:", error.code);
        console.error("Stack:", error.stack);
    }
};

connectDB()


// to handle invalid paths
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path${req.url} is invalid`})
})
// to handle errors
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }
})