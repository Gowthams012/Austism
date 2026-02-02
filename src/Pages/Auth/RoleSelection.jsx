import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Stethoscope, Lock } from 'lucide-react';
import '../Styles/Auth/Auth.css';

const RoleSelection = () => {
    const navigate = useNavigate();

    const roles = [
        { id: 'parent', name: 'Parent', icon: <User size={40} strokeWidth={1.5} />, desc: 'Screening & Support' },
        { id: 'doctor', name: 'Doctor', icon: <Stethoscope size={40} strokeWidth={1.5} />, desc: 'Expert Consultations' },
        { id: 'admin', name: 'Admin', icon: <Lock size={40} strokeWidth={1.5} />, desc: 'System Management' }
    ];

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="/auramind-icon.png" alt="AuraMind Logo" className="auth-logo" />
                    <h1 className="auth-title">Welcome to AuraMind</h1>
                    <p className="auth-subtitle">Please select your role to continue</p>
                </div>

                <div className="role-grid">
                    {roles.map(role => (
                        <div
                            key={role.id}
                            className="role-card"
                            onClick={() => navigate('/login', { state: { role: role.id } })}
                        >
                            <div className="role-icon">{role.icon}</div>
                            <div className="role-name">{role.name}</div>
                            <p style={{ fontSize: '11px', color: '#64748b', margin: '5px 0 0' }}>{role.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="auth-footer">
                    Already have an account? <a href="/login">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default RoleSelection;
