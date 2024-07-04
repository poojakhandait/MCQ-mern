import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'
const Exam=()=> {
  let navigate=useNavigate()
  let obj=useContext(Ct)
  let[qns,setQns]=useState([])
  let[ans,setAns]=useState({})

  let fun=(e)=>{
    setAns({...ans,[e.target.name]:e.target.value})
    // console.log(ans)
    console.log(e.target.name)
  }
  let sub=()=>{
    let sc=0
    for(let i=0;i<qns.length;i++)
      {
        // console.log(ans[qns[i]._id],"......")
        if(ans[qns[i]._id]==qns[i].ans)
        
          {
            sc++;
          }
      }
      axios.post('http://localhost:5000/upmarks',{"ans":ans,"sc":sc,"_id":obj.data._id},{"headers":{"Authorization":obj.data.token}}).then(()=>{
        obj.fun({"qns":qns,"ans":ans,...obj.data,"sc":sc})
        navigate("/report")
      })

  }
  useEffect(()=>{
    if(obj.data.token=="")
      {
        navigate('/')
      }
      else{
    axios.get("http://localhost:5000/getqns",{"headers":{"Authorization":obj.data.token}}).then((res)=>{
      setQns(res.data)
    })
  }
  },[])
  return (
    <div className='qnscon'>
      {
        qns.map((item,i)=>{
          return(<div className='qns'>
            <p>{i+1}. {item.title}</p>
            <p><input type='radio' value="op1" name={item._id} onChange={fun}/>{item.op1}</p>

            <p><input type='radio' value="op2" name={item._id} onChange={fun}/>{item.op2}</p>
            {
              item.op3!="" &&<p><input type='radio' value="op3" name={item._id} onChange={fun}/>{item.op3}</p>
            }
            {
              item.op4!="" &&<p><input type='radio' value="op4" name={item._id} onChange={fun}/>{item.op4}</p>
            }
            {
              
              item.op5!="" &&<p><input type='radio' value="op5" name={item._id} onChange={fun}/>{item.op5}</p>
            }
           
          </div>)
        })


      }
      <button className='subbtn' onClick={sub}>Submit</button>
      

    </div>
    
  )
}

export default Exam