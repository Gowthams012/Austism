import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth/Auth.css';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/verify-email');
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">Join AuraMind to start your journey</p>
                </div>

                <button className="auth-btn-google">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" />
                    Sign up with Google
                </button>

                <div className="divider">or register with email</div>

                <form className="auth-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>I am a...</label>
                        <select required>
                            <option value="parent">Parent / Caregiver</option>
                            <option value="doctor">Medical Professional</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <p style={{ fontSize: '12px', color: '#64748b', margin: '0' }}>
                        By clicking "Create Account", you agree to our <a href="/terms" style={{ color: '#4A90E2' }}>Terms of Service</a> and <a href="/privacy" style={{ color: '#4A90E2' }}>Privacy Policy</a>.
                    </p>

                    <button type="submit" className="auth-btn-primary">Create Account</button>
                </form>

                <div className="auth-footer">
                    Already have an account? <a href="/login">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
