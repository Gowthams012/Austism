import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';

import SplashScreen from './Pages/SplashScreen';
import HomePScreen from './Pages/HomePScreen';
import HomeDScreen from './Pages/HomeDScreen';
import ChildPage from './Pages/ChildPage';
import TherapyPage from './Pages/TherapyPage';
import ScreeningPage from './Pages/ScreeningPage';
import DoctorConnect from './Pages/DoctorConnect';
import Chatbot from './Pages/ChatBot';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />}/>
        <Route path="/parenthome" element={<HomePScreen />} />
        <Route path="/doctorhome" element={<HomeDScreen />} />
        <Route path="/childpage" element={<ChildPage />} />
        <Route path="/therapypage" element={<TherapyPage />} />
        <Route path="/screeningpage" element={<ScreeningPage />} />
        <Route path="/doctorconnect" element={<DoctorConnect />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;