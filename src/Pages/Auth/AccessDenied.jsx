import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">403 - Access Denied</h1>
                    <p className="auth-subtitle">You don't have permission to access this page.</p>
                </div>

                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🚫</div>

                <div className="info-status error">
                    This area is restricted to specific user roles. If you believe this is a mistake, please contact support.
                </div>

                <button className="auth-btn-primary" onClick={() => navigate('/parenthome')} style={{ width: '100%' }}>Return to Safety</button>
            </div>
        </div>
    );
};

export default AccessDenied;
