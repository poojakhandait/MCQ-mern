import React, { useContext ,useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login=()=> {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [data,setData]=useState({"_id":"","pwd":""})
  let[err,setErr]=useState("")

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let login=()=>{
    axios.post("http://localhost:5000/userlogin",data).then((res)=>{
      
      if(res.data.token!=undefined)
        {
          obj.fun(res.data)
          navigate("/home")
        }
        else{
          setErr(res.data.err)
        }

    })
  }

  return (
    <div className='con'>
      <div className='form'>
        {err!=""&&<div className='err'>{err}</div>}
        <input type='text' placeholder='enter email Id' name='_id' value={data._id} onChange={fun}/>
        <input type='password' placeholder='enter password' name='pwd' value={data.pwd} onChange={fun}/>
        <button  className='btn' onClick={login}>Login</button>
      

      </div>

    </div>
  )
}

export default Login