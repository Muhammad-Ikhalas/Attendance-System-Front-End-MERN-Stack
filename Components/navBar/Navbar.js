import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigater = useNavigate();
  const token = window.localStorage.getItem("token");
  const logouthandler = () => {
    localStorage.clear();
    navigater("/login");
  };
  const profilehandler = () => {
    // localStorage.clear();
    navigater("/Profile");
  };
  const Admin= JSON.parse(window.localStorage.getItem('admin'))
  const homehandler = () => {
    if (Admin === true) {
      token && navigater('/Admin');
    } else if(Admin===false){
     token && navigater('/Home');
    }
    else{
      prompt("please Login and then try")
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">AttendanceRecord</div>
        <ul className="nav-links">
          <div className="menu">
            <li className="home-btn" onClick={homehandler}>
              Home
            </li>
            <li>About</li>
            {/* <li className='profile' onClick={()=> navigater('/Profile')}>Profile</li> */}
            <li className="profile" onClick={profilehandler}>
              {token ? "Profile" : ""}
            </li>
            {/* <li><a href="/">Contact</a></li> */}
            <li>
              <button class="logout-btn" onClick={logouthandler}>
                {token ? "logout" : ""}{" "}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
