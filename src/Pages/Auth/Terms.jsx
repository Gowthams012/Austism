import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Terms = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card" style={{ maxWidth: '600px' }}>
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Terms of Service</h1>
                    <p className="auth-subtitle">Last updated: February 1, 2026</p>
                </div>

                <div className="legal-content">
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using AuraMind, you agree to be bound by these terms. This platform is designed for autism screening and support and should not replace professional medical advice.</p>

                    <h3>2. Health Disclaimer</h3>
                    <p>AuraMind provides AI-enabled screening tools. Results are indicative and for informational purposes only. Always consult with a qualified healthcare professional.</p>

                    <h3>3. User Responsibilities</h3>
                    <p>Users must provide accurate information and maintain the security of their accounts. Misuse of the platform or AI tools is strictly prohibited.</p>

                    <h3>4. Data Privacy</h3>
                    <p>We take your privacy seriously. Please review our Privacy Policy to understand how we handle your and your child's sensitive data.</p>
                </div>

                <button className="auth-btn-primary" onClick={() => navigate(-1)} style={{ width: '100%', marginTop: '20px' }}>Accept & Close</button>
            </div>
        </div>
    );
};

export default Terms;
