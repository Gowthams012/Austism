import React, { useState } from 'react';
import './Styles/ScreeningPage.css';

const ScreeningPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="screening-wrapper">
      {/* Brand Navigation */}
      <nav className="home-nav">
        <div className="brand-group">
          <div className="brand-logo-small">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3366FF" strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span className="brand-text">AuraMind</span>
        </div>
        <div className="profile-section">
          <div className="step-indicator">Step {currentStep} of 2</div>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="welcome-header">
          <h1>Developmental Screening</h1>
          <p>AI-assisted assessment and observation testing</p>
        </header>

        {/* Section 1: Video Test Area */}
        <div className="interaction-card video-card">
          <div className="stat-header">
            <span className="label">Step 1: Video Interaction Test</span>
          </div>
          <div className="video-player-placeholder">
             <div className="play-button">▶</div>
             <p>AI is monitoring gaze and expression...</p>
          </div>
          <div className="video-controls">
             <button className="action-btn-outline">Replay Segment</button>
             <button className="action-btn" onClick={() => setCurrentStep(2)}>Confirm Observation</button>
          </div>
        </div>

        {/* Section 2: Ques/Ans based auto-scoring */}
        <div className={`interaction-card assessment-card ${currentStep === 2 ? 'active-step' : 'locked'}`}>
          <div className="stat-header">
            <span className="label">Step 2: Behavioral Questionnaire</span>
          </div>
          <div className="question-box">
             <p className="question-text">Does the child maintain eye contact during the video segment?</p>
             <div className="options-grid">
                <button className="option-btn">Never</button>
                <button className="option-btn">Sometimes</button>
                <button className="option-btn active">Frequently</button>
                <button className="option-btn">Always</button>
             </div>
          </div>
          
          <div className="auto-scoring-preview">
             <div className="score-badge">
                <span className="scoring-label">Real-time Score:</span>
                <span className="scoring-value">Calculating...</span>
             </div>
             <button className="submit-assessment-btn">Submit for Final Review</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScreeningPage;