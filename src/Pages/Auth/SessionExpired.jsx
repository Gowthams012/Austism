import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const SessionExpired = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Session Expired</h1>
                    <p className="auth-subtitle">Your session has timed out due to inactivity.</p>
                </div>

                <div style={{ fontSize: '60px', marginBottom: '20px' }}>⌛</div>

                <div className="info-status error">
                    For your security, we've logged you out. Please sign in again to continue.
                </div>

                <button className="auth-btn-primary" onClick={() => navigate('/login')} style={{ width: '100%' }}>Sign In Again</button>
            </div>
        </div>
    );
};

export default SessionExpired;
