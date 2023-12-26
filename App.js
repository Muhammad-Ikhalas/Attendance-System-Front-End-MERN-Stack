import Login from './Components/login/Login';
import {Routes, Route} from "react-router-dom"
import Registrition from './Components/registerition/Registrition';
import Buttons from './Components/mainPage/Home';
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/navBar/Navbar';
import React from 'react';
import Profile from './Components/Profile/Profile';
import './App.css';
import Table from './Components/Dynamictable/Table';
import Admin from './Admintable/Admin';
import { useNavigate} from 'react-router-dom';

function App() {
  const navigator=useNavigate();
  const Location=useLocation();
  const [userData , setUserData] = useState();
  const token = window.localStorage.getItem('token')
  useEffect(()=>{
    if(Location.pathname ==='/login'){
      if(token){
      Admin ? navigator('/Admin') : navigator('/Table')
    }}
    else if(Location.pathname ==='/Home' && token){
      Admin === false && navigator('/Home')
    }
    else if(Location.pathname ==='/register'){
      if(token){
      Admin === false ? navigator('/Home') : navigator('/Admin')
    }}
    else if(Location.pathname ==='/Home'){
      Admin && token && navigator('/Admin')
    }

  },[Location, navigator,token]);
  const userDataHandler=(user)=>{
    setUserData(user)
  }


  return (
    <>
    <Navbar/>
    <Routes>
   <Route path='/login' element={<Login userDataHandler={userDataHandler}/>} /> 
   <Route path='/Table' element={<Table userData={userData}/>} /> 
   <Route path='/register' element={<Registrition/>} /> 
   <Route path='/Home' element={<Buttons/>} /> 
   <Route path='/Admin' element={<Admin/>} /> 
   <Route path='/Profile' element={<Profile/>} />
    </Routes>
    </>
    
  );
}

export default App;
