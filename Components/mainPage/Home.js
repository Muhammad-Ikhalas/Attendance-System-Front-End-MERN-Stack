import React from 'react'
import './Home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Table from '../Dynamictable/Table';
 function Home(props) {
  const [presentclicked, setPresentClicked]=useState(false)
  const [leaveclicked, setLeaveClicked]=useState(false)
  // const [date, setDate] = useState(new Date());
  const navigater= useNavigate();
  const [student , setStudent] = useState({
      date: "",
      day: "",
     status: "pending",
     requestFor: "",
     createdBy: ""
  })
  function changeHandler(event){
    setStudent({...student, day: event.target.value})
    console.log(student)
   }
function dateHandler(event){
    setStudent({...student, date: event.target.value})
    console.log(student)
}
useEffect(() => {
            
  setStudent({
    date: new Date().toLocaleDateString(),
    day: new Date().toLocaleDateString('default', { weekday: 'long' }),
    status: "pending"
  });

}, []);

const presentHandler = (event) =>{
  event.preventDefault()
  // setDate(new Date());
      axios.post("http://localhost:8000/present", student, {headers: {
        Authorization: `BEARER ${window.localStorage.getItem('token')}`
      }})
      .then(res => {
        return  console.log(res)
  })
  if(setPresentClicked){
  setPresentClicked({disabled:true})
  setLeaveClicked({disabled:true})
  }
}
const leaveHandler = (event) =>{
  event.preventDefault()

      axios.post("http://localhost:8000/leave", student ,{ headers: {
        Authorization: `BEARER ${window.localStorage.getItem('token')}`}
})
      .then(res => {
        return  console.log(res)
  })
  if(setLeaveClicked){
    setPresentClicked({disabled:true})
    setLeaveClicked({disabled:true})
    }

}
  return (
    <>
    <div className='mainClass'>
      <div className='mainDev'>
        <button disabled={presentclicked} className='presentBtn' onClick={presentHandler} > Present </button>
        <button disabled={leaveclicked} className='leaveBtn'  onClick={leaveHandler}> Leave </button>
        <button className='viewtBtn' onClick={()=>navigater("/Table")}> View </button>
      </div>

      </div>
    </>
  )
}

export default Home;