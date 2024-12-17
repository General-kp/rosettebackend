const express= require('express')
const db=require('./app')
db()
const Usermodel=require('./usermodel')
const app = express()
app.get('/register',async(req, res) => {
    try{
    const user1=new UserModel({
        name:req.body.email,
        password:req.body.password
    })
    await user1.save()
    res.status(200).json({message:"User registered successfully"})
    }
    catch (error) {
        console.error(error)
        console.log("demo123")
        res.status(500).json({ message: 'An error occurred during registration' })
      }
})
app.get('/login',async(req, res) => {
    try{
    const all=await user1.find({
        name:req.body.email,
        password:req.body.password
    })
    if(!all)
    {
        res.status(404).json({message:"User not found"})
    }
    else{
        res.status(200).json({message:"USer found"})
    }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login' });
      }
})
