import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Account Settings</h1>
                    <p className="auth-subtitle">Manage your account preferences</p>
                </div>

                <div className="auth-form">
                    <div className="form-group" onClick={() => navigate('/change-password')} style={{ cursor: 'pointer', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>🔒 Change Password</span>
                        <span>➔</span>
                    </div>
                    <div className="form-group" style={{ cursor: 'pointer', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>👤 Update Profile</span>
                        <span>➔</span>
                    </div>
                    <div className="form-group" style={{ cursor: 'pointer', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>🔔 Notifications</span>
                        <span>➔</span>
                    </div>

                    <button
                        className="auth-btn-primary"
                        onClick={() => navigate('/logout-confirm')}
                        style={{ background: 'white', color: '#ef4444', border: '1.5px solid #ef4444', marginTop: '20px' }}
                    >
                        Logout
                    </button>
                </div>

                <button className="auth-btn-primary" onClick={() => navigate('/parenthome')} style={{ background: 'transparent', color: '#64748b', fontSize: '14px', marginTop: '10px' }}>
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Settings;
