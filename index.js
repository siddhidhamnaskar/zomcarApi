const express =require('express');
const mongoose=require('mongoose')
const connection=require('./Config/db');
const authinticator = require('./middlewares/authinticator');
 const route=require('./routes/postRoute')
 const Route=require('./routes/userRoute')
const app=express();

app.use(express.json());

app.use('/',Route);
app.use(authinticator);
app.use('/insta',route);

const PORT=2025;
// app.get("/",async(req,res)=>{
//     res.send(`<h1>Hello</h1>`);
// })
app.listen(PORT,()=>{
    try{
        connection();
       console.log("http://localhost:2025");

    }
    catch(err){
    

        console.log("error found");

    }
   
})