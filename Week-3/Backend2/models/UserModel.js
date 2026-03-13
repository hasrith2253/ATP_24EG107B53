// create user schema
import { Schema,model,Types} from "mongoose";          // string --- js datatypes
                                            // String --- mongoose schema type

// create cart Schema { product,count, }

const cartSchema= new Schema({
    product :{
        type:Types.ObjectId,
        ref:"product"
    },
    count:{
        type:Number,
        default:1
    }
})

// create user schema(username,password,email,age)  
const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[3,"min Length of Username is 4 Chars"],
        maxLength:[7,"Username size exceed 6 chars"],
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
    cart:[cartSchema]
},
{
    versionKey:false,
    timestamps:true,
},
);

// generate UserModel
export const UserModel = model("user",userSchema)