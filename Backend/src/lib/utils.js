import jwt from "jsonwebtoken"

export const generateToken =  (userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
   res.cookie("jwt",token,{
     maxAge: 7 * 24 * 60 * 60 *100,
     httpOnly: true,//prevent xss attacks cross site scripting attacks
     sameSite: "strict",// CSRF attacks cross-site request forgery attacks
     secure: process.env.NODE_ENV !== "development",
   })
}
//This function generates a JWT token containing the
// user ID, signs it using a secret key, and securely
// stores it in an HTTP-only cookie with protections
// against XSS and CSRF attacks.


//Uses JWT for authentication
// Uses environment variable for secret
//Uses httpOnly cookies
// Protects against XSS & CSRF
// Separates token logic into utility function
