import React from 'react';
import Header from '../components/Header.jsx';
import InfoOverlay from '../components/InfoOverlay.jsx';
import StaticBackground from '../components/StaticBackground.jsx';

function LandingPage() {
  return (
    <div className="relative w-screen h-screen text-white">
      <Header />
      <InfoOverlay />
      <StaticBackground />
    </div>
  );
}

export default LandingPage;