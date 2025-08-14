import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import * as THREE from "three";
import { useIssStore } from "../store/issStore.js";
import Earth from "./Earth.jsx";
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
  const controlsRef = useRef();
  const [isRotating, setIsRotating] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(0.5);
      } else if (width >= 768 && width <= 1024) {
        setScale(0.7);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(({ clock }) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const issPosition = useMemo(() => {
    return latLonToVector3(issData.lat, issData.lng, 5.2);
  }, [issData]);

  const handleFocusISS = () => {
    if (controlsRef.current) {
      setIsRotating(false);

      controlsRef.current.setLookAt(
        controlsRef.current.object.position.x,
        controlsRef.current.object.position.y,
        controlsRef.current.object.position.z,
        issPosition.x,
        issPosition.y,
        issPosition.z,
        true
      );
    }
  };

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <group ref={groupRef} scale={scale}>
        <Earth />
        <ISS position={issPosition} onFocus={handleFocusISS} />

        {pathPoints.length > 1 && (
          <Line
            points={pathPoints.map((p) => p.clone().setLength(5.2))}
            color="yellow"
            lineWidth={2}
          />
        )}
      </group>

      <OrbitControls
        ref={controlsRef}
        onStart={() => setIsRotating(false)}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={6}
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
