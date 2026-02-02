import React, { useEffect, useState } from 'react';
import './Styles/SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationEnd) onAnimationEnd();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`splash-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="logo-card">
          {/* Custom AuraMind Heart Icon */}
          <img src="/auramind-icon.png" alt="AuraMind Logo" className="splash-logo" />
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