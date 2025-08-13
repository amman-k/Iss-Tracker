import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LiveTrackerPage from './pages/LiveTrackerPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/live" element={<LiveTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
