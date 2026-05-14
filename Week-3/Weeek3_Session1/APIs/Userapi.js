// create http server

import exp from 'express'
 export const userApp=exp.Router()



let users =[]

// create API (REST API) - representational state tranfer
// ROUTE to handle GET(to read) request OF CLIENT(http://localhost:5353/users)
userApp.get('/users',(req,res)=>{
    // send respone to client
    res.json({message:"all users",data:users})
})

// to find a user with id
userApp.get('/users/:id',(req,res)=>{
    let idofurl = Number(req.params.id)
    //find user
    let user=users.find(usr=>usr.id==idofurl)
    // if user not found
    if(user==undefined){
        return res.json({message:"user not found"})
    }
    res.json({message:"a user",data:user})
})


// ROUTE to handle POST(to create) request of CLIENT
userApp.post('/users',(req,res)=>{
   // get user from client
  const newuser =  req.body
  users.push(newuser)
  // send responce
  res.json({message:"user created"})
})


// ROUTE to handle PUT(to update)request of CLIENT
userApp.put('/users',(req,res)=>{
    // get modified user from client{}
    let moduser = req.body

    // get index of existing user in users array

    let index = users.findIndex(usr=>usr.id==moduser.id)
    //if user not found
    if(index==-1){
        return res.json({message:"user not found"})
    }else{
    // update user with index
    users.splice(index,1,moduser)
    }
    // send the response
    res.json({message:"user updated"})
 




})

   
// ROUTE to handle DELETE request of CLIENT
userApp.delete('/users/:id', (req, res) => {

    const idofurl = parseInt(req.params.id)

    const index = users.findIndex(usr => usr.id === idofurl)

    if (index === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users.splice(index, 1)

    res.status(200).json({ message: "User deleted successfully" })
})
   