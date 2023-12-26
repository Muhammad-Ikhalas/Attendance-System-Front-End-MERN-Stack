
import React from 'react'
import './Admin.css';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

function Admin({userData})  {
    // const navigater = useNavigate()
      const [student, setStudent] = useState({})
    const apiCall =   async () => {
      const response = await axios.get(`http://localhost:8000/getadminrequests`,   { headers: {
          Authorization: `BEARER ${window.localStorage.getItem('token')}`
        }})
      if(response.status === 200){
        console.log(response)
  setStudent(response.data.admin)
      }
    }
    useEffect(() => {
      apiCall()
    }, [])
  
  
  
    const acceptHandler = (requestId) =>{
          axios.post(`http://localhost:8000/acceptRequest/${requestId}`, student, { headers: {
            Authorization: `BEARER ${window.localStorage.getItem('token')}`
          }})
          .then(res => console.log(res))
          alert("Accepted")
          // if(checkpresent){
          //   setCheckpresent({disabled: true})
          //   setCheckleave({disabled: true})
          // }
   
      }
  
  
  
      const rejectHandler = (requestId) =>{
        axios.post(`http://localhost:8000/rejectRequest/${requestId}`, student, { headers: {
          Authorization: `BEARER ${window.localStorage.getItem('token')}`
        }})
        .then(res => console.log(res))
        alert("Rejected")
      }
  return (
    <>
    {/* <button className='hideBtn' onClick={()=>navigater('/Home')} >Hide</button >    */}
    
      <div className='App'>
        <h1>Attendance Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Requestfor</th>
                    <th>Status</th>
                    <th>Accept & Reject</th>
                </tr>
            </thead>
            <tbody>
                
          {student?.requests?.map((request) => (
              <tr key={request._id}>
              <td>{request.createdBy.name}</td>
              <td>{request.date}</td>
              <td>{request.day}</td>
              <td>{request.requestFor}</td>
              <td>{request.status}</td>
              <td> 
                <button className='buttons2' onClick={() => acceptHandler(request._id)}>Accept</button>
                <button className='buttons2' onClick={() => rejectHandler(request._id)}>Reject</button>
              </td>
              </tr>
            
          ))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Admin;