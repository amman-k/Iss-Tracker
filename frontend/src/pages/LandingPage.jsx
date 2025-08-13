import React from 'react';

import Header from '../components/Header.jsx';
import InfoOverlay from '../components/InfoOverlay.jsx';
import Scene from '../components/Scene.jsx';

function LandingPage() {
  return (
    <div className="relative w-screen h-screen bg-black text-white">
      <Header />
      <InfoOverlay />
      
      {/* The 3D Scene as a background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
    </div>
  );
}

export default LandingPage;
