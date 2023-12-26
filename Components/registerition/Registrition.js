import './Registrition.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';

function Registrition() {
    const navigator= useNavigate();
    const [form,setForm]=useState({
      name:"",
      email:"",
      password:"",
      rePassword:"",
      isAdmin: false
    })
    const handelerChange =e=>{
      const {name,value}=e.target
      setForm({
      ...form,[name]: value

      })
      console.log(form)
    }
    const register=(event)=>{
      event.preventDefault()
      // console.log('hello')
      const {name,email,password,rePassword}=form ;
      if(name && email && password && (password === rePassword))
      {
      axios.post("http://localhost:8000/signup", form)
      .then(res => {
        console.log(res)
        if(res.status === 200){
          navigator('/login')
        alert("You are Registered Now!")
        }
    }
      )
      }
      else{
        console.log('registration failed.')
      }
    }
  return (
    <>
      <div className="center">
        <h1>Registration</h1>
        <form method="post" onSubmit={register}>
            <div className="txt_field">
                <input type="text" name='name' value={form.name} onChange={handelerChange}/>
                <span></span>
                <label >Name</label>
            </div>
            <div className="txt_field">
            <input type="text" name='email' value={form.email} onChange={handelerChange}/>
            <span></span>
            <label >Email</label>
        </div>

        <div className="txt_field">
            <input type="password" name='password' value={form.password} onChange={handelerChange}/>
            <span></span>
            <label >Password</label>
        </div>
        <div className="txt_field">
        <input type="password" name='rePassword' value={form.rePassword} onChange={handelerChange}/>
        <span></span>
        <label >Password</label>
    </div>
    <div className='gotoMainPage' >
         <input type="submit" value="Submit" />
          </div>
          <div className="signup_link">
          <div onClick={()=>navigator("/login")}>Login</div>
        </div>
        </form>
     </div>
     
    </>
  )
}

export default Registrition;