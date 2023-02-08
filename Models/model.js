const mongoose=require('mongoose');


const postschema=new mongoose.Schema({
  
  "title":{type:"String",required:true},
  "body":{type:"String",required:true},
  "device":{type:"String",required:true},
  "user":{type:"String",required:true}
  
 

});

const posts=mongoose.model("post",postschema);
module.exports=posts;