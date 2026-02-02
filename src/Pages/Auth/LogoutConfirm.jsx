import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const LogoutConfirm = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Logging Out?</h1>
                    <p className="auth-subtitle">Are you sure you want to log out of AuraMind?</p>
                </div>

                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔓</div>

                <button className="auth-btn-primary" onClick={() => navigate('/login')} style={{ width: '100%', backgroundColor: '#ef4444', background: '#ef4444' }}>
                    Yes, Log Me Out
                </button>

                <button
                    className="auth-btn-primary"
                    onClick={() => navigate(-1)}
                    style={{ width: '100%', background: 'transparent', color: '#64748b', border: '1.5px solid #e2e8f0', marginTop: '10px' }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default LogoutConfirm;
