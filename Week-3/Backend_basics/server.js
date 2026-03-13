// create http server

import exp from 'express'
const app=exp()


import{userApp} from "./APIs/Userapi.js"
import{productapp} from "./APIs/productapi.js"

// use body body parser middleware
app.use(exp.json())

// create custom middleware
function middleware1(req,res,next){
//send res frm middleware
//res.json { message:"this res from middleware"}
//forward req to next


    console.log("middleware1 executed")
    next();
}
function middleware2(req,res,next){
//send res frm middleware
//res.json { message:"this res from middleware"}
//forward req to next


    console.log("middleware2 executed")
    next();
}

app.use(middleware1)
app.use(middleware2)

app.use('/users-api',userApp)
//forword req to productapi if path starts with /product-api
app.use('/products-api',productapp)




// set a port number
const port=5353
// use to assign port number to http
app.listen(port,()=> console.log(`server listening to port${port}...`));

