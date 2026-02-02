import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card" style={{ maxWidth: '500px' }}>
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Complete Profile</h1>
                    <p className="auth-subtitle">Tell us more about yourself to personalize your experience</p>
                </div>

                <div className="form-group" style={{ alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '24px' }}>
                        📸
                    </div>
                    <span style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>Upload Photo</span>
                </div>

                <form className="auth-form" onSubmit={(e) => { e.preventDefault(); navigate('/parenthome'); }}>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className="form-group">
                        <label>Location / City</label>
                        <input type="text" placeholder="Mumbai, India" required />
                    </div>
                    <div className="form-group">
                        <label>Bio (Optional)</label>
                        <textarea
                            style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid #e2e8f0', height: '80px', outline: 'none' }}
                            placeholder="A few words about yourself..."
                        ></textarea>
                    </div>

                    <button type="submit" className="auth-btn-primary">Finish Setup</button>
                </form>
            </div>
        </div>
    );
};

export default Onboarding;
