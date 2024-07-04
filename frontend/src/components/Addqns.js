import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Ct from './Ct'

function Addqns() {
  let [qns,setQns]=useState({"title":"","op1":"","op2":"","op3":"","op4":"","op5":"","ans":""})
  let [msg,setMsg]=useState("")
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
      {
        navigate("/")
      }

  },[])
 
let fun=(e)=>{
  if(e.target.value=="")
    {
      delete qns[e.target.name]
      setQns({...qns})
    }
    else{
      setQns({...qns,[e.target.name]:e.target.value})
    }
}

let add=()=>{
  axios.post("http://localhost:5000/addqns",qns,{"headers":{"Authorization":obj.data.token,"_id":obj.data._id}}).then((res)=>{
    setMsg(res.data.msg)
    setQns({"title":"","op1":"","op2":"","op3":"","op4":"","op5":"","ans":""})
  })
}



  return (
    <div className='regcon'>
      <div className='regform'>
        <div className='msg'>{msg}</div>
        <textarea placeholder='Write the question here' value={qns.title} onChange={fun} name='title'></textarea>
        <input type='text' placeholder='op1' value={qns.op1} onChange={fun} name='op1'/>
        <input type='text' placeholder='op2'  value={qns.op2} onChange={fun} name='op2'/>
        <input type='text'  placeholder='op3' value={qns.op3} onChange={fun} name='op3'/>
        <input type='text' placeholder='op4' value={qns.op4} onChange={fun} name='op4'/>
        <input type='text' placeholder='op5'  value={qns.op5} onChange={fun} name='op5'/>
        {/* {console.log(op4,op5)} */}
        <select value={qns.ans}  className='btn' name='ans' onChange={fun}>
          <option value="" selected disabled>Select Ans</option>
          <option value="op1">op1</option>
          <option value="op2">op2</option>
          <option value="op3">op3</option>
          <option value="op4">op4</option>
          <option value="op5">op5</option>
        </select>
        <button className='btn' onClick={add}>Add Qns</button>

      </div>

    </div>
  )
}

export default Addqns