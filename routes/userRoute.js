const express=require('express');
const users=require('../Models/userModel')

const Route=express.Router();
const bcrypt=require("bcryptjs");
const authinticator=require("../middlewares/authinticator")
const jwt=require("jsonwebtoken");

const dotenv=require("dotenv");

const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;


Route.get("/",async(req,res)=>{
    try{
         const char=await users.find();
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
});




Route.post("/register",async(req,res)=>{

    const {name,email,password,gender}=req.body;
    try{
       
        bcrypt.hash(password,7,async(err,hash)=>{
           if(err)
            {            
                
                res.send("registration failed");
            }
            else
            {
                
                const data=new users({name,email,gender,"password":hash});
                await data.save();
                res.send("registration successfull");

            }

        })

    }
    catch(err){
        res.send("registration failed");

    }
})

Route.post("/login",async(req,res)=>{
    try {

        const {
            email, password 
        } = req.body;

        let user = await users.findOne({
            email, 
        })

        if (!user) {
            return res.status(400).send({
                error: 'User with email does not exist'
            })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({
                error: 'Wrong password'
            })
        }

        // Create JWT token
    const{name,gender,_id}=user;
    
    const token= jwt.sign({
        _id, name, email
    },JWT_SECRET_KEY);

        res.send({
          
            data: {
                token,
                user: {
                    _id, name, email
                }
            }
        })

    } catch(err) {
        console.log(err);
        res.status(500).send({
            error: 'Something went wrong'
        })
    }

})

Route.patch("/:id",async(req,res)=>{
    try{
        const char=await users.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
})




module.exports=Route;