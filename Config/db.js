const mongoose=require('mongoose');
mongoose.set('strictQuery',true);

const connection=async()=>{
    await mongoose.connect("mongodb+srv://zoomcar:zoomcar_123@cluster0.kokkwza.mongodb.net/?retryWrites=true&w=majority");
}

module.exports=connection;