






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../src/app.css';

export default function SignUpPage(){

  const navigate = useNavigate();
  const handleLandingPage = () => {
    navigate("/")
  }
  const handleLogin = () => {
    navigate("/login")
  }

  const [yourname, setYourname] = useState("");
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
            <h2>Signup to DevSync</h2>
          </div>
          

          <div className="login_form">
            <form onSubmit={handleSumbit}>

              <div className="form_div">
                <label htmlFor="">Your name</label>
                <input type="email" id="login_email" placeholder="Enter name" value={yourname} onChange={(e) => setYourname(e.target.value)}/>
              </div>

              <div className="form_div">
                <label htmlFor="">Username or email address</label>
                <input type="email" id="login_email" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div className="form_div">
                <label htmlFor="">Password</label>
                <input type="password" id="login_password" placeholder="passowrd" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <button type="submit" className="login_btn">Sign up</button>

            </form>


            {/* <div class="divider">
              <hr /><span>or</span><hr />
            </div>

            <div className="login_google">
              <button className="login_google_btn"> <span>G</span>Continue With Google</button>
            </div> */}


            <div className="login_footer">
              <p>Already a member? <a onClick={handleLogin}>Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
