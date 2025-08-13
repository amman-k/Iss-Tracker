import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Basic lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      {/* A starfield background */}
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <Earth />

      {/* Camera controls to allow user interaction */}
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
