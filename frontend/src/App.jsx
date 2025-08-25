import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LiveTrackerPage from './pages/LiveTrackerPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ModelPage from './pages/ModelPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/live" element={<LiveTrackerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/model" element={<ModelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
