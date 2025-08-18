

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../src/app.css';
export default function LoginPage(){

  const navigate = useNavigate();
  const handleLandingPage = () => {
    navigate("/")
  }
  const handleSignUp = () => {
    navigate("/signup")
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    if(username === "" || password === "") {
      alert("Please fill all fields!");
    }
  }


  return(
    <>
      <div className="login_container">

        <img id="login_left_image" src="../src/assets/LS20250815190149.png" alt="" />

        <div className="login_card">
          <div className="login_header">
            <img onClick={handleLandingPage} id="login_logo_image" src="../src/assets/logo.png" alt="" />
            <h2>Sign in to DevSync</h2>
          </div>
          

          <div className="login_form">
            <form onSubmit={handleSumbit}>

              <div className="form_div">
                <label htmlFor="login_email">Username</label>
                <input type="email" id="login_email" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div className="form_div">
                <label htmlFor="login_password">Password</label>
                <input type="password" id="login_password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <button type="submit" className="login_btn">Sign in</button>

            </form>


            {/* <div class="divider">
              <hr /><span>or</span><hr />
            </div>

            <div className="login_google">
              <button className="login_google_btn"> <span>G</span>Continue With Google</button>
            </div> */}


            <div className="login_footer">
              <p>New to DevSync? <a onClick={handleSignUp} >Create an account</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}