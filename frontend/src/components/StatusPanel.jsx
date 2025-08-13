import React from "react";
import { FaSatellite } from "react-icons/fa6";

function StatusPanel({ issData }) {
  if (!issData) {
    return (
      <div className="absolute bottom-4 left-4 z-10 p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg text-white w-64">
        <h2 className="text-lg font-bold mb-2">ISS Status</h2>
        <p>Awaiting data...</p>
      </div>
    );
  }

  return (
    <div className="absolute bottom-4 left-4 z-10 p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg text-white w-64 font-sans">
      <h2 className="text-lg font-bold mb-2">ISS Status</h2>
      <div className="space-y-1 text-sm">
        <p>
          Latitude:{" "}
          <span className="font-mono float-right">
            {issData.lat.toFixed(4)}°
          </span>
        </p>
        <p>
          Longitude:{" "}
          <span className="font-mono float-right">
            {issData.lng.toFixed(4)}°
          </span>
        </p>

        <p>
          Altitude:{" "}
          <span className="font-mono float-right">
            {issData.alt.toFixed(2)} km
          </span>
        </p>
        <p>
          Speed:{" "}
          <span className="font-mono float-right">
            {issData.vel.toFixed(2)} km/h
          </span>
        </p>
      </div>
      <div className="flex items-center mt-3 pt-2 border-t border-gray-600">
        <FaSatellite className="text-green-400" />
        <p className="text-xs text-green-400 ml-2">Live Tracking</p>
      </div>
    </div>
  );
}

export default StatusPanel;
