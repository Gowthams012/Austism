import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Reset Password</h1>
                    <p className="auth-subtitle">Enter your new password below</p>
                </div>

                <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
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
            </div>
        </div>
    );
};

export default ResetPassword;
