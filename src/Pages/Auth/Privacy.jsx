import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Privacy = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card" style={{ maxWidth: '600px' }}>
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Privacy Policy</h1>
                    <p className="auth-subtitle">How we protect your data</p>
                </div>

                <div className="legal-content">
                    <h3>1. Information We Collect</h3>
                    <p>We collect developmental data, screening results, and profile information to provide personalized support. This includes sensitive health-related information about children.</p>

                    <h3>2. AI Data Usage</h3>
                    <p>AuraMind uses AI to analyze patterns. Your data is anonymized when possible and used to improve the accuracy of our screening assessments.</p>

                    <h3>3. Data Sharing</h3>
                    <p>We do not sell your data. Information is shared only with nominated medical professionals (if you choose) and for essential service provision.</p>

                    <h3>4. Your Rights</h3>
                    <p>You have the right to access, export, or request deletion of your data at any time through the Account Settings.</p>
                </div>

                <button className="auth-btn-primary" onClick={() => navigate(-1)} style={{ width: '100%', marginTop: '20px' }}>I Understand</button>
            </div>
        </div>
    );
};

export default Privacy;
