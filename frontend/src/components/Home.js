import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home=()=> {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [user,setUser]=useState({})

  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/")

    }
    else{
      axios.get(`http://localhost:5000/getuser/${obj.data._id}`,{"headers":{"Authorization":obj.data.token}}).then((res)=>{
        setUser(res.data)
      })
    }
  })

  return (
    <div className='home'>
      <h2 className='h2'>Welcome To Python MCQ Test</h2>
      <div className='homecon'>
      <h3>Your Name:{user.name}</h3>
      <h3>Your Email:{user._id}</h3>
      <h3>Test Attempt:{user.atm+1}</h3>
      {user.bscore!=undefined &&<h4>Your Previous Best Score Is:{user.bscore}</h4>}
      <button className='homebtn'><Link to="/exam">Click to start exam</Link></button>
      </div>

    </div>
  )
}

export default Home