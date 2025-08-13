import React from 'react';
import { FaSatellite } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function InfoOverlay() {
    const navigate=useNavigate();

    const handleStartTracking=()=>{
        navigate('/live');
    }
  return (

   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 pointer-events-none">
      <div className="pointer-events-auto">
        <div className="flex justify-center items-center space-x-2 mb-4">
            <FaSatellite className="text-blue-400" />
            <span className="text-blue-400 font-semibold">Live ISS Tracking</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Track the <span className="text-blue-400">International</span><br/>Space Station
        </h1>
        <p className="text-gray-300 mt-4 max-w-md mx-auto">
            Watch the ISS orbit Earth in real-time at ~27,600 km/h
        </p>
        <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={handleStartTracking} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
                Start Tracking
            </button>
            <button className="bg-transparent border border-gray-500 hover:bg-gray-800 hover:border-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Learn More
            </button>
        </div>
      </div>
    </div>
  );
}

export default InfoOverlay;
