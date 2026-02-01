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
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
              stroke="#3366FF" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
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