import React from 'react';
import Scene from '../components/Scene';

function LiveTrackerPage() {
  return (
    <div className="relative w-screen h-screen bg-black">
      {/* UI Overlay will go here later */}
      
      {/* The 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
    </div>
  );
}

export default LiveTrackerPage;
