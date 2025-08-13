import React, { useEffect } from 'react';
import Scene from '../components/Scene.jsx';
import StatusPanel from '../components/StatusPanel.jsx';
import { useIssStore } from '../store/issStore.js';

function LiveTrackerPage() {

  const { issData, isLoading, initialize, disconnect } = useIssStore();

  
  useEffect(() => {
    initialize();
    return () => disconnect();
  }, [initialize, disconnect]);

  return (
    <div className="relative w-screen h-screen bg-black">
      <StatusPanel issData={issData} isLoading={isLoading} />
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
    </div>
  );
}

export default LiveTrackerPage;
