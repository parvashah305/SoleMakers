const express = require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose')
const Book=require("./models/Bookmodel")
const cors=require('cors')
const bodyParser=require('body-parser')
const bcryptjs=require('bcryptjs')
const User=require("./models/Usermodel")
const app = express()
const port = 3000

dotenv.config()
const allowedOrigins = ['https://solemakers-parvashah.vercel.app/'];
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(bodyParser.json())

dbUrl=process.env.MONGO_URI

try {
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log("Connected to Mongodb")
} catch (error) {
    console.log("Error :",error)
}

app.get("/",(req,res)=>{
    return res.send("Hello")
})

app.get('/book', async (req, res) => {
    try {
        const book=await Book.find()
        return res.status(200).json(book)
    } catch (error) {
        console.log("Error :",error)
    }
})

app.post("/user/signup",async(req,res)=>{
    try {
        const {fullname,email,password}=req.body
        const user=await User.findOne({email})
        if(user){
          return  res.status(400).json({message : "Email already exists"})
        }

        const hashPassword=await bcryptjs.hash(password,10)

        const newUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })


        await newUser.save()
        res.status(201).json({message:"User Created Succesfully"})

    } catch (error) {
        console.log("Error :",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
})

app.post("/user/login",async(req,res)=>{
    try {
        const{email,password}=req.body
        const user =await User.findOne({email})
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Username or Password"})

        }
        else{
            return res.status(200).json({message:"Login successfull",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email,
                }
            })
        }
    } catch (error) {
        console.log("Error :",error.message)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})