import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccessDenied from './Pages/Auth/AccessDenied';
import AccountDisabled from './Pages/Auth/AccountDisabled';
import ChangePassword from './Pages/Auth/ChangePassword';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Login from './Pages/Auth/Login';
import LogoutConfirm from './Pages/Auth/LogoutConfirm';
import Onboarding from './Pages/Auth/Onboarding';
import Privacy from './Pages/Auth/Privacy';
import Register from './Pages/Auth/Register';
import ResetPassword from './Pages/Auth/ResetPassword';
import RoleSelection from './Pages/Auth/RoleSelection';
import SessionExpired from './Pages/Auth/SessionExpired';
import Settings from './Pages/Auth/Settings';
import Terms from './Pages/Auth/Terms';
import VerifyEmail from './Pages/Auth/VerifyEmail';
import VerifyOTP from './Pages/Auth/VerifyOTP';

const AuthRoutes = () => (
  <Routes>
    <Route path="/auth/access-denied" element={<AccessDenied />} />
    <Route path="/auth/account-disabled" element={<AccountDisabled />} />
    <Route path="/auth/change-password" element={<ChangePassword />} />
    <Route path="/auth/forgot-password" element={<ForgotPassword />} />
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/logout-confirm" element={<LogoutConfirm />} />
    <Route path="/auth/onboarding" element={<Onboarding />} />
    <Route path="/auth/privacy" element={<Privacy />} />
    <Route path="/auth/register" element={<Register />} />
    <Route path="/auth/reset-password" element={<ResetPassword />} />
    <Route path="/auth/role-selection" element={<RoleSelection />} />
    <Route path="/auth/session-expired" element={<SessionExpired />} />
    <Route path="/auth/settings" element={<Settings />} />
    <Route path="/auth/terms" element={<Terms />} />
    <Route path="/auth/verify-email" element={<VerifyEmail />} />
    <Route path="/auth/verify-otp" element={<VerifyOTP />} />
  </Routes>
);

export default AuthRoutes;
