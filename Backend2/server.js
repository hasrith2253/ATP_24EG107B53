// create express app
import exp from 'express'
import {connect} from 'mongoose';
import {userApp} from "./APIs/UserAPIs.js";
import { ProductApp } from './apis/product.js'
import cookieParser from 'cookie-parser';
const app=exp()

app.use(exp.json())

app.use(cookieParser())

app.use("/user-api",userApp)
app.use('/product-api',ProductApp)
// start server


// connect to mongoose

async function  connectDB(){
    try{
        await connect("mongodb://localhost:27017/mydb");
        console.log("DB connection success")
        app.listen(4000,()=>console.log("server on port 4000..."))

    }catch(err){
        console.log("err in db connection",err)
    }
}
    
connectDB()

// error handling miidlewares
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }
})