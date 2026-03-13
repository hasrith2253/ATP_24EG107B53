import jwt from "jsonwebtoken"
const { verify } = jwt

export function verifyToken(req, res, next){

    const token = req.cookies?.token;

    // if request from unauthenticated user
    if(!token){
        return res.status(401).json({message:"must login!!!"})
    }

    try{

        const decodedToken = verify(token,'adjdhd') // must match login secret
        console.log(decodedToken)

       req.user = decodedToken

        next()

    }catch(err){

        res.status(403).json({message:"session expired. please relogin"})

    }
}


// cross origin req
// cross origin request means when the client and server applications are running in differnet domains 

// Same orgin req
// same origin req means the client also running on the same domain on the server 

// cookies will send along with req atomatically in same origin request. but for cross aorigin request , the token should be explicitly included to the request.