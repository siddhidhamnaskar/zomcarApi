const express=require('express');
const posts=require('../Models/model')

const route=express.Router();


route.get("/",async(req,res)=>{
    try{
         const char=await posts.find();
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
});




route.post("/",async(req,res)=>{
    try{
        const char=await posts.create(req.body);
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
})

route.patch("/:id",async(req,res)=>{
    try{
        const char=await posts.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
})

route.delete("/:id",async(req,res)=>{
    try{
        const char=await posts.findByIdAndDelete(req.params.id);
        return res.status(200).send(char);

    }
    catch(err){
        res.status(404).send(err.messege);

    }
})




module.exports=route;