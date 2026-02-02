import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashScreen from './Pages/SplashScreen';
import HomePScreen from './Pages/HomePScreen';
import HomeDScreen from './Pages/HomeDScreen';
import ChildPage from './Pages/ChildPage';
import TherapyPage from './Pages/TherapyPage';
import ScreeningPage from './Pages/ScreeningPage';
import DoctorConnect from './Pages/DoctorConnect';
import Chatbot from './Pages/ChatBot';

// Authentication & Account Pages
import RoleSelection from './Pages/Auth/RoleSelection';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import VerifyEmail from './Pages/Auth/VerifyEmail';
import VerifyOTP from './Pages/Auth/VerifyOTP';
import Onboarding from './Pages/Auth/Onboarding';
import Settings from './Pages/Auth/Settings';
import ChangePassword from './Pages/Auth/ChangePassword';
import AccessDenied from './Pages/Auth/AccessDenied';
import SessionExpired from './Pages/Auth/SessionExpired';
import AccountDisabled from './Pages/Auth/AccountDisabled';
import Terms from './Pages/Auth/Terms';
import Privacy from './Pages/Auth/Privacy';
import LogoutConfirm from './Pages/Auth/LogoutConfirm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        {/* Auth Routes */}
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Account Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/logout-confirm" element={<LogoutConfirm />} />

        {/* Security & Info Routes */}
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path="/account-disabled" element={<AccountDisabled />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Existing Functional Routes */}
        <Route path="/parenthome" element={<HomePScreen />} />
        <Route path="/doctorhome" element={<HomeDScreen />} />
        <Route path="/childpage" element={<ChildPage />} />
        <Route path="/therapypage" element={<TherapyPage />} />
        <Route path="/screeningpage" element={<ScreeningPage />} />
        <Route path="/doctorconnect" element={<DoctorConnect />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
