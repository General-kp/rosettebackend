const mongoose=require('mongoose')
const usersschema=new mongoose.Schema({
    name:{type:String,required:true},
    password:String
})
module.exports=new mongoose.model("User",usersschema)