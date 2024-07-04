import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import Register from './components/Register'
import Home from './components/Home'
import Addqns from './components/Addqns'
import Exam from './components/Exam'
import Report from './components/Report'
import Logout from './components/Logout'
import Ct from './components/Ct'

const App=()=> {
  let[data,setData]=useState({"token":"","_id":"","name":"",isadmin:false})
  let fun=(resdata)=>{
    setData({...resdata})
  }
  let obj={"data":data,"fun":fun}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/addqns' element={<Addqns/>}/>
      <Route path='/exam' element={<Exam/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/logout' element={<Logout/>}/>


    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App