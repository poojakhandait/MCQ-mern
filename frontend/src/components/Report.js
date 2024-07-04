import React, { useContext } from 'react'
import Ct from './Ct'

const Report=()=> {
  let obj=useContext(Ct)
  let qns=obj.data.qns
  let ans=obj.data.ans
  return (
    <div className='qnscon'>
      <h1>Result Page</h1>
      <h2>Your Score Is:{obj.data.sc}</h2>
  
        {
        qns.map((item,i)=>{
          return(<div className='qns'>
            <p>{i+1}. {item.title}</p>
            <span className={ans[item._id]=="op1"&&item.ans!="op1"?"red":item.ans=="op1"?"green":""}><input type="radio" readOnly checked={ans[item._id]=="op1"}/>
            {item.op1}
            </span><br></br>

            <span className={ans[item._id]=="op2"&&item.ans!="op2"?"red":item.ans=="op2"?"green":""}><input type="radio" readOnly checked={ans[item._id]=="op2"}/>
            {item.op2}
            </span><br></br>

            {
              item.op3!="" && <span className={ans[item._id]=="op3"&&item.ans!="op3"?"red":item.ans=="op3"?"green":""}><input type="radio" readOnly checked={ans[item._id]=="op3"}/>
              {item.op3}
              </span>
            }<br></br>

            {
              item.op4!="" && <span className={ans[item._id]=="op4"&&item.ans!="op4"?"red":item.ans=="op4"?"green":""}><input type="radio" readOnly checked={ans[item._id]=="op4"}/>
              {item.op4}
              </span>
            }<br></br>
            {
              item.op5!="" && <span className={ans[item._id]=="op5"&&item.ans!="op5"?"red":item.ans=="op5"?"green":""}><input type="radio" readOnly checked={ans[item._id]=="op5"}/>
              {item.op5}
              </span>
            }<br></br>

          </div>)
        })

        }
      

    </div>
  )
}

export default Report