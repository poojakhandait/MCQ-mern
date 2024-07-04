import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register=()=> {
  let navigate=useNavigate()
  let[err,setErr]=useState("")
  let [data,setData]=useState({"_id":"","pwd":"","name":"","phno":""})

let fun=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

let add=()=>{
  axios.post("http://localhost:5000/userreg",data).then((res)=>{
    if(res.data.err==undefined)
      {
        navigate("/")
      }
      else{
        setErr(res.data.err)
      }
  })
}

  return (
    <div className='regcon'>
      <div className='regform'>
        {err!="" &&<div className='err'>{err}</div>}
        <input type='text' placeholder='write your email Id' name='_id' value={data._id} onChange={fun}/>

        <input type='text' placeholder='write your name' name='name' value={data.name} onChange={fun}/>

        <input type='text' placeholder='write your phone number' name='phno' value={data.phno} onChange={fun}/>

        <input type='password' placeholder='write your password' name='pwd' value={data.pwd} onChange={fun}/>

        <button className='btn' onClick={add}>Register </button>

      </div>
      
    </div>
  )
}

export default Register