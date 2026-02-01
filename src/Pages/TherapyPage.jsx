import React from 'react';
import './Styles/TherapyPage.css';

const TherapyPage = () => {
  return (
    <div className="therapy-wrapper">
      {/* Navigation Header */}
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
          <div className="user-avatar">AD</div>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="welcome-header">
          <h1>Therapy & Progress</h1>
          <p>Active interventions and AI-driven feedback for Alex</p>
        </header>

        {/* Section 1: Therapy Suggested */}
        <div className="interaction-card">
          <div className="stat-header">
            <span className="label">Recommended Therapy</span>
          </div>
          <div className="active-therapy-box">
             <div className="therapy-icon">🧩</div>
             <div className="therapy-details">
                <h4>Social Cognition Training</h4>
                <p>Focus: Recognizing facial expressions through digital storytelling.</p>
             </div>
             <span className="status-badge active">In Progress</span>
          </div>
        </div>

        {/* Section 2: Therapy Activity Scoring */}
        <div className="interaction-card scoring-section">
          <div className="stat-header">
            <span className="label">Current Activity Performance</span>
          </div>
          <div className="score-main">
             <div className="circular-score">
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="20.35" className="percentage">85%</text>
                </svg>
             </div>
             <div className="score-meta">
                <p><strong>Accuracy:</strong> High</p>
                <p><strong>Response Time:</strong> 2.4s</p>
                <p><strong>Engagement:</strong> Steady</p>
             </div>
          </div>
        </div>

        {/* Section 3: Improvement from Therapy Feedback */}
        <div className="interaction-card feedback-section">
          <div className="stat-header">
            <span className="label">Improvement Trends</span>
          </div>
          <div className="feedback-content">
             <p className="ai-insight">
                "Alex has shown a <strong>12% increase</strong> in emotional recognition accuracy over the last 5 sessions. AI suggests moving to Level 2: Complex Scenarios."
             </p>
             <div className="trend-bar">
                <div className="trend-fill" style={{width: '75%'}}></div>
                <span className="trend-label">Overall Improvement: 75%</span>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TherapyPage;