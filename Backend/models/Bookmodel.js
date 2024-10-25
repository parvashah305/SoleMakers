const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})

Book=mongoose.model("Book",bookSchema)

module.exports=Book