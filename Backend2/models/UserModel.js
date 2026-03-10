// create user schema
import { Schema,model} from "mongoose";          // string --- js datatypes
                                            // String --- mongoose schema type

// create user schema(username,password,email,age)  
const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min Length of Username is 4 Chars"],
        maxLength:[6,"Username size exceed 6 chars"],
        unique:[true, "username exist"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number
    },
},{
    versionKey:false,
    timestamps:true,
},
);

// generate UserModel
export const UserModel = model("user",userSchema)