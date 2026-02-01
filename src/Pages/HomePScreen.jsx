import React from 'react';
import './Styles/HomePScreen.css';

const HomePScreen = () => {
  return (
    <div className="parent-home-wrapper">
      {/* Top Navigation Bar */}
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
          <div className="notification-dot"></div>
          <div className="user-avatar">JD</div>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="welcome-header">
          <h1>Parent Dashboard</h1>
          <p>Monitor and manage your child's developmental journey.</p>
        </header>

        {/* Action: Add Child Details */}
        <div className="interaction-card primary-action">
          <div className="icon-box">
             <span>+</span>
          </div>
          <div className="action-info">
            <h3>Add new child details</h3>
            <p>Start a new AI-enabled screening assessment</p>
          </div>
          <button className="action-btn">Register Child</button>
        </div>

        {/* Insights Section */}
        <div className="stats-grid">
          {/* Autism Score Card */}
          <div className="interaction-card stat-item">
            <div className="stat-header">
              <span className="label">Autism Score</span>
              <span className="status-indicator">Updated today</span>
            </div>
            <div className="score-container">
              <h2 className="score-num">72<span>/100</span></h2>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>

          {/* Reminders Card */}
          <div className="interaction-card stat-item">
            <div className="stat-header">
              <span className="label">Therapy Reminders</span>
            </div>
            <ul className="reminder-stack">
              <li>
                <div className="dot blue"></div>
                <div className="task">Speech Therapy - 4:00 PM</div>
              </li>
              <li>
                <div className="dot mint"></div>
                <div className="task">Daily Behavioral Quiz</div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePScreen;