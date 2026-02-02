import React, { useState } from 'react';
import './Styles/DoctorConnect.css';

const DoctorConnect = () => {
  const [activeTab, setActiveTab] = useState('doubts');

  return (
    <div className="connect-wrapper">
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
          <h1>Doctor Connect</h1>
          <p>Direct channel for appointments and clarifying clinical doubts.</p>
        </header>

        {/* Interaction Tabs */}
        <div className="tab-container">
          <button 
            className={`tab-btn ${activeTab === 'doubts' ? 'active' : ''}`} 
            onClick={() => setActiveTab('doubts')}
          >
            Clarify Doubts
          </button>
          <button 
            className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`} 
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </button>
        </div>

        {/* Section: Doctor Parent Interactions (Doubts) */}
        {activeTab === 'doubts' && (
          <div className="interaction-card doubts-card">
            <div className="stat-header">
              <span className="label">Active Inquiries</span>
            </div>
            <div className="chat-preview">
              <div className="message incoming">
                <p>Hello! I noticed Alex is struggling with the new visual exercises. Is this normal?</p>
                <span className="timestamp">10:45 AM</span>
              </div>
              <div className="message outgoing">
                <p>It's quite common in the first week. Try reducing the session length by 5 minutes.</p>
                <span className="timestamp">11:02 AM</span>
              </div>
            </div>
            <div className="input-area">
              <input type="text" placeholder="Type your doubt here..." />
              <button className="send-btn">Send</button>
            </div>
          </div>
        )}

        {/* Section: Appointments */}
        {activeTab === 'appointments' && (
          <div className="interaction-card appointment-card">
            <div className="stat-header">
              <span className="label">Schedule & Reminders</span>
            </div>
            <div className="apt-list">
              <div className="apt-item">
                <div className="apt-info">
                  <h4>Monthly Progress Review</h4>
                  <p>with Dr. Sarah Miller</p>
                </div>
                <div className="apt-date">
                  <span className="date">Feb 20</span>
                  <span className="time">02:00 PM</span>
                </div>
              </div>
            </div>
            <button className="action-btn full-width">Book New Appointment</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorConnect;