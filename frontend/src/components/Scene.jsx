import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import * as THREE from "three";
import { useIssStore } from "../store/issStore";
import Earth from "./Earth";
import ISS from "./Iss.jsx";

const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

function SceneContent() {
  const { issData, pathPoints, isLoading } = useIssStore();
  const groupRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  useFrame(({ clock }) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const issPosition = useMemo(() => {
    return latLonToVector3(issData.lat, issData.lng, 5.2);
  }, [issData]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <group ref={groupRef}>
        <Earth />

        <ISS position={issPosition} />

        {pathPoints.length > 1 && (
          <Line
            points={pathPoints.map((p) => p.clone().setLength(5.2))}
            color="yellow"
            lineWidth={2}
          />
        )}
      </group>

      <OrbitControls
        onStart={() => setIsRotating(false)}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={20}
      />
    </>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <SceneContent />
    </Canvas>
  );
}

export default Scene;
