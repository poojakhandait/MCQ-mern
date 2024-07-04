let user=require("../model/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
const { isadmin } = require("./admincontroller")

let userreg=async(req,res)=>{
    try{
    let hashcode=await bcrypt.hash(req.body.pwd,10)
    let data=new user({...req.body,"pwd":hashcode})
    await data.save()
    res.json({"msg":"user account is created"})
    }
    catch(err)
    {
        res.json({"msg":"account is exists"})
    }
}

let userlogin=async(req,res)=>{
    try{
    let obj =await user.findById({"_id":req.body._id})
    if(obj)
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
                {
                    res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"_id":obj._id,"name":obj.name,isadmin:false})
                }
                else{
                    res.json({"err":"check pwd"})
                }
        }
        else{
            res.json({"msg":"wrong email"})
        }
    }
    catch(err)
    {
      console.log(err)
    }
}
let getdet=async(req,res)=>{
    try{

    let obj= await user.findById({"_id":req.params.name})
    
    let data={"_id":obj._id,"name":obj.name,"atm":obj.atm}
    if(obj.atm>0)
        {
            data=({...data,"bscore":obj.bscore})
        }
        res.json(data)
    }
    catch(err)
    {
        console.log(err)
    }
}
let upscore=async(req,res)=>{
    let obj=await user.findById({"_id":req.body._id})
    if(obj.atm==0 || obj.bscore<req.body.sc)
        {
            await user.findByIdAndUpdate({"_id":obj._id},{"bscore":req.body.sc,"atm":obj.atm+1,$push:{"scores":req.body.sc,"responce":req.body.ans}})
        }
        else{
            await user.findByIdAndUpdate({"_id":obj._id},{"atm":obj.atm+1,$push:{"scores":req.body.sc,"responce":req.body.ans}})
        }
        res.json({"msg":"Done"})

}
module.exports={userreg,userlogin,getdet,upscore}