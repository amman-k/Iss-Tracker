import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';
// Corrected the import paths to be relative and include file extensions.
import { useIssStore } from '../store/issStore.js';
import Earth from './Earth.jsx';
import ISS from './Iss.jsx';


// Helper function to convert coordinates
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
  const controlsRef = useRef(); // <-- Ref for camera controls
  const [isRotating, setIsRotating] = useState(true);
  const [scale, setScale] = useState(1); // State for responsive scaling

  // Effect to adjust scale based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(0.5); // Smaller scale for mobile devices
      } else if (width >= 768 && width <= 1024) {
        setScale(0.7); // Intermediate scale for tablets
      } else {
        setScale(1); // Default scale for larger screens
      }
    };

    handleResize(); // Set initial scale
    window.addEventListener('resize', handleResize); // Adjust on resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  useFrame(({ clock }) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const issPosition = useMemo(() => {
    return latLonToVector3(issData.lat, issData.lng, 5.2); 
  }, [issData]);

  // Function to handle focusing on the ISS
  const handleFocusISS = () => {
    if (controlsRef.current) {
      setIsRotating(false); // Stop auto-rotation
      // Smoothly move the camera's target to the ISS position
      controlsRef.current.setLookAt(
        controlsRef.current.object.position.x,
        controlsRef.current.object.position.y,
        controlsRef.current.object.position.z,
        issPosition.x,
        issPosition.y,
        issPosition.z,
        true // Enable smooth transition
      );
    }
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade />
      
      <group ref={groupRef} scale={scale}> {/* Apply responsive scale here */}
        <Earth />
        <ISS position={issPosition} onFocus={handleFocusISS} />
        
        {pathPoints.length > 1 && (
          <Line points={pathPoints.map(p => p.clone().setLength(5.2))} color="yellow" lineWidth={2} />
        )}
      </group>

      <OrbitControls 
        ref={controlsRef} // <-- Attach the ref
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
