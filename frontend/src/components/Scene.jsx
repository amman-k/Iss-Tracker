import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

import { useIssStore } from '/src/store/issStore.js';
import Earth from '/src/components/Earth.jsx';
import Iss from './Iss';



const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

function Scene() {
  const { issData, pathPoints, isLoading } = useIssStore();

  const issPosition = useMemo(() => {
    if (isLoading) {

      return new THREE.Vector3(1000, 1000, 1000);
    }
    return latLonToVector3(issData.lat, issData.lng, 5);
  }, [issData, isLoading]);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade />
      
      <Earth />
      <Iss position={issPosition} />
      
      {pathPoints.length > 1 && (
        <Line points={pathPoints} color="yellow" lineWidth={2} />
      )}

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={6} maxDistance={20} />
    </Canvas>
  );
}

export default Scene;
