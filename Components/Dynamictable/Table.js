
import React from 'react'
import './Table.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
// const data=[
// {Name :"M-Ikhalas",Day: "Monday", Date:"12/14/22",Status:"Present"},
// {Name :"FareedUlah",Day: "Monday", Date:"12/14/22",Status:"Present"},
// {Name :"Zahid",Day: "Monday", Date:"12/14/22",Status:"Present"},
// {Name :"Umar",Day: "Monday", Date:"12/14/22",Status:"Present"},
// {Name :"SanaUllah",Day: "Monday", Date:"12/14/22",Status:"Present"}
// ];
function Table({userData})  {
  const navigater=useNavigate();
  const [student, setStudent] = useState({})
  const apiCall =   async () => {
  const response = await axios.get(`http://localhost:8000/getstudentrequests/${window.localStorage.getItem('userId')}` ,
  {headers: {
    Authorization: `BEARER ${window.localStorage.getItem('token')}`}})
  if(response.status === 200){
setStudent(response.data.student)
  }
}
useEffect(() => {
  apiCall()
}, [])

   
  return (
    <>
    {/* <button className='hideBtn' onClick={()=>navigater('/login')} >Logout</button >    */}
    
      <div className='App'>
        <h1>Attendance Table</h1>
        
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Requestfor</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody > 
          {student?.requests?.map((request) => (
                <tr key={request._id}>
                
              <td>{request.date}</td>
              <td>{request.day}</td>
              <td>{request.requestFor}</td>
              <td>{request.status}</td>
              </tr>
          ))}
            </tbody>
           
        </table>
        </div>
    
    </>
  )
}

export default Table;