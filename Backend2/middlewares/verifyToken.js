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

        next()

    }catch(err){

        res.status(403).json({message:"session expired. please relogin"})

    }
}