// create http server

import exp from 'express'
const app=exp()

// use body body parser middleware
app.use(exp.json())




// set a port number
const port=5353
// use to assign port number to http
app.listen(port,()=> console.log(`server listening to port${port}...`));

let products =[]

// create API (REST API) - representational state tranfer
// ROUTE to handle GET(to read) request OF CLIENT(http://localhost:5353/products)
app.get('/products',(req,res)=>{
    // send respone to client
    res.json({message:"all products",data:products})
})

// to find a product with Brand
app.get('/products/:Brand',(req,res)=>{
    let brnd = String(req.params.Brand)
    //find prodcts
    let product=products.find(prd=>prd.Brand==brnd)
    // if product not found
    if(product==undefined){
        return res.json({message:"product not found"})
    }
    res.json({message:"a product ",data:products})
})


// ROUTE to handle POST(to create) request of CLIENT
app.post('/products',(req,res)=>{
   // get product from client
  const newproduct =  req.body
  products.push(newproduct)
  // send responce
  res.json({message:"products created"})
})


// ROUTE to handle PUT(to update)request of CLIENT
app.put('/products',(req,res)=>{
    // get modified product from client{}
    let modproduct = req.body

    // get index of existing user in users array

    let index = products.findIndex(prd=>prd.id==modproduct.id)
    //if user not found
    if(index==-1){
        return res.json({message:"products not found"})
    }else{
    // update product with index
    products.splice(index,1,modproduct)
    }
    // send the response
    res.json({message:"product updated"})
 




})

   
// ROUTE to handle DELETE request of CLIENT
app.delete('/products/:id', (req, res) => {

    const idofurl = parseInt(req.params.id)

    const index = products.findIndex(prd => prd.id === idofurl)

    if (index === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    products.splice(index, 1)

    res.status(200).json({ message: "products deleted successfully" })
})
   