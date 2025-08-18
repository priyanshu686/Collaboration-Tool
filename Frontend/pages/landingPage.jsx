import React, { useState } from "react";
import Navbar from "../components/navbar"
import Home from "../components/home"
import Footer from "../components/footer"
import '../modules/landingPage.css'
import '../src/app.css';

export default function LandingPage () {


    return(
        <>
            <div className="landing_page_wrapper">
                <Navbar />
                <Home />
                <Footer />
            </div>
            
        </>
    );
}