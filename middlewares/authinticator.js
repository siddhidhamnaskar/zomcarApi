 
 const jwt=require("jsonwebtoken");

 require("dotenv").config();

 const authinticator=(req,res,next)=>{
    let token=req.header.authorisation;
    if(token)
    {
        const decoded=jwt.verify(token,process.env.key);
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