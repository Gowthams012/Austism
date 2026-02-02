import React from 'react';
import './Styles/HomeDScreen.css';

const HomeDScreen = () => {
  // Mock data for patient list
  const patients = [
    { id: 1, name: "Liam Johnson", age: "6y", status: "Screening Pending" },
    { id: 2, name: "Sophia Chen", age: "4y", status: "Report Ready" },
    { id: 3, name: "Noah Williams", age: "7y", status: "Follow-up" },
  ];

  return (
    <div className="doctor-home-wrapper">
      <nav className="home-nav">
        <div className="brand-group">
          <div className="brand-logo-small">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3366FF" strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span className="brand-text">AuraMind <span className="badge">Pro</span></span>
        </div>
        <div className="profile-section">
          <span className="dr-name">Dr. Sarah Miller</span>
          <div className="user-avatar">SM</div>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="welcome-header">
          <h1>Doctor Dashboard</h1>
          <p>Manage patient screenings and review AI-generated insights.</p>
        </header>

        {/* Action Card: Add New Child Details */}
        <div className="interaction-card primary-action">
          <div className="icon-box">
             <span>+</span>
          </div>
          <div className="action-info">
            <h3>Add new child details</h3>
            <p>Onboard a new patient to the AuraMind system</p>
          </div>
          <button className="action-btn">Register Patient</button>
        </div>

        {/* Patient List Section */}
        <div className="interaction-card list-card">
          <div className="stat-header">
            <span className="label">List of child patients under you</span>
            <button className="btn-text">View All</button>
          </div>
          
          <div className="patient-table">
            <div className="table-header">
              <span>Patient Name</span>
              <span>Age</span>
              <span>Current Status</span>
              <span>Action</span>
            </div>
            {patients.map(patient => (
              <div key={patient.id} className="table-row">
                <span className="patient-name">{patient.name}</span>
                <span className="patient-age">{patient.age}</span>
                <span className={`status-tag ${patient.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {patient.status}
                </span>
                <button className="view-link">Review</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeDScreen;