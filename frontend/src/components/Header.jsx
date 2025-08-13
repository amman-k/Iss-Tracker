import React from 'react';
import { FaRocket } from 'react-icons/fa';

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaRocket className="text-white text-2xl" />
          <span className="text-white font-bold text-xl">ISS Tracker</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white font-bold">Live Track</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About ISS</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>

        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
