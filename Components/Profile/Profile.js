import React from 'react'
import './Profile.css'
// import { useNavigate } from 'react-router-dom';
 function Profile() {
    const name = window.localStorage.getItem('name')
    const email = window.localStorage.getItem('email')
    const isAdmin = window.localStorage.getItem('admin')
   
  return (
    <>
   <div className="avatar">
  <div className="user-icon"><span></span>
  </div>
</div>
<div className='Maincontainer'>
<div className='Name-info'> Name: </div>
<div className='Name-info2'> {name} </div>
<div className='Email-info'> Email: </div>
<div className='Email-info2'> {email}</div>
<div className='User-info'> IsAdmin: </div>
<div className='User-info2'> {isAdmin} </div>



</div>
    </>
  )
}
export default Profile;