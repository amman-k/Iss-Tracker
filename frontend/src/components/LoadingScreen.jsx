import React from 'react';
import { FaRocket } from 'react-icons/fa';

function LoadingScreen({ isLoading }) {
  return (
    <div 
      className={`absolute inset-0 z-50 flex flex-col justify-center items-center bg-gray-900 transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <FaRocket className="text-white text-5xl animate-pulse" />
      <p className="text-white mt-4 text-lg">Connecting to the ISS...</p>
    </div>
  );
}

export default LoadingScreen;