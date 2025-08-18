








import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "../pages/loginpage";
import SignUpPage from "../pages/signUpPage";
import LandingPage from "../pages/landingPage";

function App(){
    

    return(
        <>
            
            

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
