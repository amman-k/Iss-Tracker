import React from "react";
import { FaSatellite } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function InfoOverlay() {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate("/live");
  };
  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 pointer-events-none">
      <div className="relative pointer-events-auto">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <FaSatellite style={{ color: "rgb(0 255 255)" }} />
          <span className="font-semibold" style={{ color: "rgb(0 255 255)" }}>
            Live ISS Tracking
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Track the{" "}
          <span
            style={{
              color: "rgb(0 255 255)",
              textShadow: "0 0 8px rgba(0, 255, 255, 0.3)",
            }}
          >
            International
            <br />
            Space Station
          </span>
        </h1>

        <p className="text-gray-300 mt-4 max-w-md mx-auto text-lg">
          Experience its journey around our planet in real-time.
        </p>

        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 bg-black/20 backdrop-blur-sm p-2 px-4 rounded-full border border-white/10">
          <p className="text-sm font-mono">Orbital Velocity: ~27,600 km/h</p>
        </div>

        <div className="mt-24 flex justify-center space-x-4">
          <button
            onClick={handleStartTracking}
            className="font-bold py-3 px-6 rounded-4xl transition-all duration-300 ease-in-out bg-transparent border border-[#03FFFF] text-[#03FFFF] shadow-lg hover:bg-cyan-400/10 hover:shadow-cyan-400/50"
            style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.3)" }}
          >
            Start Tracking
          </button>
          <button
            onClick={handleLearnMore}
            className="font-bold py-3 px-6 rounded-4xl transition-all duration-300 ease-in-out bg-transparent border border-white text-white shadow-lg hover:bg-cyan-400/10 hover:shadow-white/50"
            style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.5)" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoOverlay;
