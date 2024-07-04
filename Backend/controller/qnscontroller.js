const qnsmodel = require("../model/qnsmodel")
let{v4:uuidv4}=require("uuid")

let addqns=async(req,res)=>{
    try{
        let id=uuidv4()
        let qns= new qnsmodel({...req.body,"_id":id})
        await qns.save()
        res.json({"msg":"Question Is Added"})

    }
    catch(err)
    {
        console.log(err)
    }
}

let getqns=async(req,res)=>{
    let data=await qnsmodel.aggregate([{$sample:{"size":7}}])
    res.json(data)
}

module.exports={addqns,getqns}