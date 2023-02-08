const mongoose=require('mongoose');


const userschema=new mongoose.Schema({
  "name":{type:"String",required:true},
  "email":{type:"String",required:true},
  "gender":{type:"String",required:true},
  "password":{type:"String",required:true},
  "cart":{type:"Array"}
 

},{
  "version":{required:false}
});

const users=mongoose.model("user",userschema);
module.exports=users;