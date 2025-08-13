import React, { useState } from 'react';
import Scene from '../components/Scene';
import StatusPanel from '../components/StatusPanel';

function LiveTrackerPage() {
  const [issData, setIssData] = useState(null);

  return (
    <div className="relative w-screen h-screen bg-black">

      <StatusPanel issData={issData} />
      

      <div className="absolute inset-0 z-0">

        <Scene setIssData={setIssData} />
      </div>
    </div>
  );
}

export default LiveTrackerPage;