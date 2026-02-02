import React, { useState } from 'react';
import '../Styles/Auth/Auth.css';

const ForgotPassword = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Forgot Password?</h1>
                    <p className="auth-subtitle">
                        {submitted
                            ? "Check your email for recovery instructions"
                            : "Enter your email to reset your password"}
                    </p>
                </div>

                {!submitted ? (
                    <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="name@example.com" required />
                        </div>
                        <button type="submit" className="auth-btn-primary">Send Reset Link</button>
                    </form>
                ) : (
                    <div className="info-status success">
                        A password reset link has been sent to your email address. It will expire in 1 hour.
                    </div>
                )}

                <div className="auth-footer">
                    Remember your password? <a href="/login">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
