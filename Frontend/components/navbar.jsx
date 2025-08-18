import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../src/app.css';

export default function Navbar (){

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate ("/login")
    }
    const handleSignUp = () => {
        navigate ("/signup")
    }
    return(
        <>
            <nav className="navbar_container">
                <a href="#"><div className="navbar_container_left">
                    <img src="../src/assets/logo.png" alt="" />
                    <h1>DevSync</h1>
                </div></a>
                <div className="navbar_container_right">
                    <button onClick={handleLogin} id="navbar_container_login_btn">Login</button>
                    <button onClick={handleSignUp} id="navbar_container_signup_btn">Signup</button>
                </div>
                
            </nav>
        </>
    );
}