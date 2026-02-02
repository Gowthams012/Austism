import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedRole = location.state?.role || 'Parent';

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login success
        if (selectedRole.toLowerCase() === 'doctor') {
            navigate('/doctorhome');
        } else {
            navigate('/parenthome');
        }
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to your {selectedRole} account</p>
                </div>

                <button className="auth-btn-google">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" />
                    Continue with Google
                </button>

                <div className="divider">or sign in with email</div>

                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '-10px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#64748b' }}>
                            <input type="checkbox" style={{ width: '16px', height: '16px' }} /> Remember me
                        </label>
                        <a href="/forgot-password" style={{ color: '#4A90E2', fontWeight: '600', textDecoration: 'none' }}>Forgot Password?</a>
                    </div>

                    <button type="submit" className="auth-btn-primary">Sign In</button>
                </form>

                <div className="auth-footer">
                    Don't have an account? <a href="/register">Create Account</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
