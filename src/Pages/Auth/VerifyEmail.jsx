import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [resending, setResending] = useState(false);

    const handleResend = () => {
        setResending(true);
        setTimeout(() => setResending(false), 2000);
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Verify Email</h1>
                    <p className="auth-subtitle">We've sent a verification link to your email</p>
                </div>

                <div style={{ fontSize: '60px', marginBottom: '20px' }}>📧</div>

                <div className="info-status success" style={{ textAlign: 'left' }}>
                    Please click the link in the email to activate your account. If you don't see it, check your spam folder.
                </div>

                <button
                    className="auth-btn-primary"
                    onClick={() => navigate('/onboarding')}
                    style={{ width: '100%' }}
                >
                    I've Verified My Email
                </button>

                <div className="auth-footer">
                    Didn't receive the email? <a href="#" onClick={handleResend}>
                        {resending ? "Sending..." : "Resend Link"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
