import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const VerifyOTP = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Two-Step Verification</h1>
                    <p className="auth-subtitle">Enter the 6-digit code sent to your phone</p>
                </div>

                <div className="otp-box-container">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <input key={i} type="text" maxLength="1" className="otp-input" />
                    ))}
                </div>

                <button className="auth-btn-primary" onClick={() => navigate('/onboarding')} style={{ width: '100%' }}>Verify Code</button>

                <div className="auth-footer" style={{ marginTop: '20px' }}>
                    00:59 remaining <br />
                    <a href="#">Resend Code</a>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;
