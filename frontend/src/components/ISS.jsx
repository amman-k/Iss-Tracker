import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function ISS({ position, onFocus }) { 
  const { scene } = useGLTF('/iss.glb'); 
  const issRef = useRef();

  useFrame(() => {
    if (issRef.current) {
      issRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <primitive
      ref={issRef}
      object={scene}
      position={position}
      scale={0.0615}

      onClick={(event) => {
        event.stopPropagation(); 
        onFocus();
      }}
    />
  );
}

useGLTF.preload('/iss.glb');

export default ISS;
