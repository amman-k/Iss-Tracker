import React, { useEffect } from 'react';
import Scene from '/src/components/Scene.jsx';
import StatusPanel from '/src/components/StatusPanel.jsx';
import Header from '/src/components/Header.jsx';
import LoadingScreen from '/src/components/LoadingScreen.jsx';
import { useIssStore } from '/src/store/issStore.js';

function LiveTrackerPage() {
  const { issData, isLoading, initialize, disconnect } = useIssStore();

  useEffect(() => {
    initialize();
    return () => disconnect();
  }, [initialize, disconnect]);

  return (
    <div className="relative w-screen h-screen bg-black text-white">
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <StatusPanel issData={issData} isLoading={isLoading} />
      
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Scene />
      </div>
    </div>
  );
}

export default LiveTrackerPage;