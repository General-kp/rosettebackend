const mongoose=require('mongoose')
try{
const usersschema=await new mongoose.Schema({
    name:{type:String,required:true},
    password:String
})
module.exports=new mongoose.model("User",usersschema)
}
catch(e){console.log(e)}
