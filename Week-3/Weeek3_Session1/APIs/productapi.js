// create mini-express app(seperate Route)

import exp from 'express'
 export const productapp=exp.Router()



let products =[]

// create API (REST API) - representational state tranfer
// ROUTE to handle GET(to read) request OF CLIENT(http://localhost:5353/products)
productapp.get('/products',(req,res)=>{
    // send respone to client
    res.json({message:"all products",data:products})
})

// to find a product with Brand
productapp.get('/products/:Brand',(req,res)=>{
    let brnd = String(req.params.Brand)
    console.log(brnd)
    //find prodcts
    let product=products.find(prd=>prd.Brand==brnd)
    // if product not found
    if(product==-1){
        return res.json({message:"product not found"})
    }
    res.json({message:"a product ",data:product})
})


// ROUTE to handle POST(to create) request of CLIENT
productapp.post('/products',(req,res)=>{
   // get product from client
  const newproduct =  req.body
  products.push(newproduct)
  // send responce
  res.json({message:"products created"})
})


// ROUTE to handle PUT(to update)request of CLIENT
productapp.put('/products',(req,res)=>{
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
productapp.delete('/products/:id', (req, res) => {

    const idofurl = parseInt(req.params.id)

    const index = products.findIndex(prd => prd.id === idofurl)

    if (index === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    products.splice(index, 1)

    res.status(200).json({ message: "products deleted successfully" })
})
   