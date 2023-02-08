const mongoose=require('mongoose');
mongoose.set('strictQuery',true);

const connection=async()=>{
    await mongoose.connect("mongodb+srv://siddhidhamnaskar:Siddhi@2000@cluster0.klwghfz.mongodb.net/zoomcar?retryWrites=true&w=majority");
}

module.exports=connection;