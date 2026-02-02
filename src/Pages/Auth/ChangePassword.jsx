import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const ChangePassword = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Change Password</h1>
                    <p className="auth-subtitle">Enter your current and new password</p>
                </div>

                <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/settings'); }}>
                    <div className="form-group">
                        <label>Current Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="auth-btn-primary">Update Password</button>
                </form>

                <button className="auth-btn-primary" onClick={() => navigate('/settings')} style={{ background: 'transparent', color: '#64748b', fontSize: '14px', marginTop: '10px' }}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
