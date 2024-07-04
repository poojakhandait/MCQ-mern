let express=require('express')
let mongoose=require("mongoose")
let cors=require ("cors")
let route=require("./routers/route")

let app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/mcqdb").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.listen(5000)