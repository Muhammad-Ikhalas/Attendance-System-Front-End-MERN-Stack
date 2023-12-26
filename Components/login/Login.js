import './Login.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login({userDataHandler}) {
    const navigator= useNavigate();
    const [form,setForm]=useState({
    email:"",
    password:"",
      })
      const handelerChange =e=>{
      const {name,value}=e.target
      setForm({
      ...form,[name]: value
        })
        console.log(form)
      }
      const signin=(event)=>{
        event.preventDefault()

        const {email,password}=form ;
        if(email && password )
        {
        axios.post("http://localhost:8000/signin", form)
        .then(res => {
          userDataHandler(res.data.user)
          // window.localStorage.setItem('admin',res.data.user)
          window.localStorage.setItem('token',res.data.token)
          window.localStorage.setItem('userId',res.data.user._id)
          window.localStorage.setItem('name',res.data.user.name)
          window.localStorage.setItem('email',res.data.user.email)
          window.localStorage.setItem('admin',res.data.user.isAdmin)
          console.log(res)
            
            if(res.data.user.isAdmin===false){
              navigator('/Home')
            }
            else{
              navigator('/Admin')
            }

          
        })
        }
        else{
          alert("Login Failed")
        }
      }
  return (
      <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div className="txt_field">
                <input type="name" name='email' value={form.email} onChange={handelerChange}/>
                <span></span>
                <label >Username</label>
            </div>
            <div className="txt_field">
            <input type="password" name='password' value={form.password} onChange={handelerChange}/>
            <span></span>
            <label >Password</label>
        </div>
        <div className='Loginto' onClick={signin}>
            <input type="submit" value="Login"/>
            </div>
            <div className="signin_link">
            Not a member <div onClick={()=> navigator('/register')}>Signup</div>
        </div>
        </form>
     </div>
  )
}
export default Login;