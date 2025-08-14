import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FaRocket className="text-white text-2xl" />
            <span className="text-white font-bold text-xl">ISS Tracker</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/live"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Live Track
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors "
            >
              About ISS
            </Link>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <FiMenu className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <FiX className="text-white text-3xl" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/live"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Live Track
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About ISS
          </Link>
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
