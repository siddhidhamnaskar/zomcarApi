 
 const jwt=require("jsonwebtoken");

 require("dotenv").config();
 const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;

 const authinticator=(req,res,next)=>{
    let token=req.header.authorisation;
    if(token)
    {
        const decoded=jwt.verify(token,JWT_SECRET_KEY);
        if(decoded)
        {
            let userId=decoded.userId;
            req.body.userId=userId;
            next();
        }
        else{
            res.sendError("Please login first");
        }
    }
    else{
        res.send("Please login first");
    }
 }
 

 module.exports=authinticator;