let express=require("express")
const { adminreg, adminlogin, islogin, isadmin } = require("../controller/admincontroller")
const { userreg, userlogin, getdet, upscore } = require("../controller/usercontroller")
const { addqns, getqns } = require("../controller/qnscontroller")


let route=new express.Router()
route.post("/adminreg",adminreg)
route.post("/adminlogin",adminlogin)
route.post("/userreg",userreg)
route.post("/userlogin",userlogin)
route.post("/addqns",islogin,isadmin,addqns)
route.get("/getqns",islogin,getqns)
route.get("/getuser/:name",islogin,getdet)
route.post("/upmarks",islogin,upscore)


module.exports=route