import React from "react";
import "./SplashScreen.css";

function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="logo-box">
        <div className="logo">💙</div>
        <h1>AuraMind</h1>
        <p>AI-Enabled Autism Screening & Support</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default SplashScreen;
