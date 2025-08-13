import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import * as THREE from "three";
import axios from "axios";
import io from "socket.io-client";

import Earth from "./Earth";
import Iss from "./Iss";

const BACKEND_URL = "http://localhost:4000";
const EARTH_RADIUS = 5;
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

function Scene({ setIssData }) {
  const [pathPoints, setPathPoints] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/iss-history`);
        if (response.data.length > 0) {
          const historyVectors = response.data
            .map((p) => latLonToVector3(p.latitude, p.longitude, EARTH_RADIUS))
            .reverse();
          setPathPoints(historyVectors);

          const latestPoint = response.data[0];

          setIssData({
            lat: latestPoint.latitude,
            lng: latestPoint.longitude,
            alt: latestPoint.altitude,
            vel: latestPoint.velocity,
          });
        }
      } catch (error) {
        console.error("Failed to fetch ISS history:", error);
      }
    };

    fetchHistory();

    const socket = io(BACKEND_URL);
    socket.on("connect", () => console.log("Connected to backend server!"));
    socket.on("iss-location-update", (data) => {
      const newVector = latLonToVector3(data.lat, data.lng, EARTH_RADIUS);
      setPathPoints((prevPoints) => [...prevPoints.slice(-999), newVector]);
      setIssData(data);
    });
    socket.on("disconnect", () =>
      console.log("Disconnected from backend server.")
    );

    return () => socket.disconnect();
  }, [setIssData]);

  const issPosition =
    pathPoints.length > 0
      ? pathPoints[pathPoints.length - 1]
      : new THREE.Vector3();

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <Earth />
      <Iss position={issPosition} />

      {pathPoints.length > 1 && (
        <Line points={pathPoints} color="yellow" lineWidth={2} />
      )}

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={6}
        maxDistance={20}
      />
    </Canvas>
  );
}

export default Scene;
