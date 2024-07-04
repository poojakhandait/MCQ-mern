import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import {useNavigate} from 'react-router-dom'

const Logout=()=> {
  let navigate=useNavigate()
  let obj=useContext(Ct)
  useEffect(()=>{
    obj.fun({"token":"","_id":"","name":""})
    navigate("/")
  },[])
  return (
    <div></div>
  )
}

export default Logout