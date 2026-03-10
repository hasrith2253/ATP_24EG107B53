// create a mini-express application(seperate route)
import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash,compare } from "bcryptjs";
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifyToken.js'
const {sign} = jwt
export const userApp = exp.Router()

// create new user
userApp.post("/users",verifyToken, async (req, res) => {
  try {
    const newUser = req.body;

    const hashedPassword = await hash(newUser.password, 10);
    newUser.password = hashedPassword;

    const newUserDocument = new UserModel(newUser);

    await newUserDocument.save();

    res.status(201).json({
      message: "user created successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "error creating user",
      error: err.message
    });
  }
});

// user login
// user login route
userApp.post('/auth', async (req, res) => {

    // get user credentials (email and password) from client request body
    const { email, password } = req.body;

    // check whether the email exists in the database
    let user = await UserModel.findOne({ email: email });

    // if email does not exist in database
    if (!user) {
        return res.status(404).json({ message: "Invalid email" });
    }

    // compare the entered password with the hashed password stored in DB
    let result = await compare(password, user.password);

    // if passwords do not match
    if (!result) {
        return res.status(400).json({ message: "Invalid password" });
    }

    // if password is correct → create JWT token
    // payload contains user email
    const signedToken = sign(
        { email: user.email },   // payload data
        "adjdhd",                // secret key
        { expiresIn: "1h" }      // token expiry time
    );

    // store token in browser as httpOnly cookie
    // httpOnly prevents JavaScript from accessing it (security)
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "lax",   // allows normal cross-site requests
        secure: false      // set true if using HTTPS
    });

    // send success response with user data
    res.status(200).json({
        message: "login success",
        payload: user
    });

});
  // Read all users from db (protected routes)
  userApp.get("/users",verifyToken, async(req,res)=>{
    let userslist = await UserModel.find() ;
    
    //send res
    res.status(200).json({message:"users",payload:userslist})
  });
 
  // read a user by objectid
  userApp.get("/users/:id", async (req, res) => {

    const uid = req.params.id

    const userObj = await UserModel.findById(uid)
    // if user not found
    if(!userObj){
      res.status(404).json({message:"user not found"})
    }


    res.status(200).json({
        message:"user",
        payload:userObj
    })

})

// to update an user
userApp.put("/users/:id",verifyToken, async (req, res) => {

  const modifiedUser = req.body;
  const uid = req.params.id;

const updatedUser = await UserModel.findByIdAndUpdate(
  uid,
  { $set: { ...modifiedUser } },
  { new:true, runValidators: true }
);

  res.status(200).json({
    message: "user modified",
    payload: updatedUser
  });

});

// to delete a user 
userApp.delete("/users/:id",async(req,res)=>{
  const uid = req.params.id
  const duser= await UserModel.findByIdAndDelete(uid)
  if(!duser){
    return res.status(404).json({message:"user not found"})
  }
// send res
  res.status(200).json({message:"user deleted",payload:duser})
});


