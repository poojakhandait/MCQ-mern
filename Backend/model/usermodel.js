let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "phno":String,
    "bscore":String,
    "atm":{
        "type":Number,
        "default":0
    },
    "scores":[],
    "responce":[]
})
let user=mongoose.model("user",usersch)
module.exports=user