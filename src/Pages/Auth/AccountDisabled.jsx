import React from 'react';
import '../Styles/Auth/Auth.css';

const AccountDisabled = () => {
    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Account Disabled</h1>
                    <p className="auth-subtitle">Your account has been deactivated</p>
                </div>

                <div style={{ fontSize: '60px', marginBottom: '20px' }}>⛔</div>

                <div className="info-status error" style={{ textAlign: 'left' }}>
                    Your account was disabled by an administrator or due to suspicious activity. Please reach out to <a href="mailto:support@auramind.ai" style={{ color: 'inherit', fontWeight: 'bold' }}>support@auramind.ai</a> to resolve this.
                </div>

                <button className="auth-btn-primary" onClick={() => window.location.href = '/'} style={{ width: '100%' }}>Back to Homepage</button>
            </div>
        </div>
    );
};

export default AccountDisabled;
