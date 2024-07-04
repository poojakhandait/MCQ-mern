let mongoose=require("mongoose")
let adminsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String
})
let admin=mongoose.model("admin",adminsch)
module.exports=admin