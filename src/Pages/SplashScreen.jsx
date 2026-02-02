import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/SplashScreen.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Navigate to role selection after splash
      setTimeout(() => {
        navigate('/role-selection');
      }, 500); // Small delay for fade-out animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`splash-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="logo-card">
          {/* AuraMind Brain Icon */}
          <img src="/auramind-icon.png" alt="AuraMind Brain Icon" className="brain-icon" />
        </div>
        <h1 className="splash-title">AuraMind</h1>
        <p className="splash-subtitle">AI-ENABLED AUTISM SCREENING & SUPPORT</p>

        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;