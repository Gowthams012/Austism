import React from 'react';
import './Styles/ChildPage.css';

const ChildPage = () => {
  return (
    <div className="child-page-wrapper">
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
          <div className="header-flex">
             <div>
                <h1>Alex's Profile</h1>
                <p>Shared collaborative dashboard for Parents & Doctors</p>
             </div>
             <div className="age-badge">Age: 6y</div>
          </div>
        </header>

        {/* Section 1: Shared Dashboard Overview */}
        <div className="interaction-card shared-metrics">
          <div className="stat-header">
            <span className="label">Shared Analytics Dashboard</span>
          </div>
          <div className="metrics-grid">
            <div className="metric">
              <span className="metric-title">Attention Span</span>
              <div className="mini-progress"><div className="fill" style={{width: '65%'}}></div></div>
            </div>
            <div className="metric">
              <span className="metric-title">Social Interaction</span>
              <div className="mini-progress"><div className="fill" style={{width: '40%'}}></div></div>
            </div>
          </div>
        </div>

        {/* Section 2: Therapy Suggestion and Verify */}
        <div className="interaction-card therapy-section">
          <div className="stat-header">
            <span className="label">Therapy Suggestions & Verification</span>
          </div>
          <div className="suggestion-box">
             <div className="suggestion-info">
                <h4>Visual Scheduling Exercises</h4>
                <p>Recommended to improve daily transition routine.</p>
             </div>
             <button className="verify-btn">Verify Activity</button>
          </div>
        </div>

        {/* Section 3: Scheduling & Communication */}
        <div className="interaction-card schedule-section">
          <div className="stat-header">
            <span className="label">Appointments & Communication</span>
          </div>
          <div className="schedule-content">
             <div className="next-apt">
                <strong>Next Appointment:</strong>
                <span>Feb 15, 2026 - 10:30 AM</span>
             </div>
             <div className="comm-actions">
                <button className="action-btn-outline">Clarify Doubt</button>
                <button className="action-btn">Schedule New</button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildPage;