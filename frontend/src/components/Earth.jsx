import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';


const dayTextureUrl = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
const nightTextureUrl = 'https://unpkg.com/three-globe/example/img/earth-night.jpg';

const EARTH_RADIUS = 5;


const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
  }
`;

function Earth() {
  const [dayMap] = useLoader(TextureLoader, [dayTextureUrl]);

  return (
    <>
      {/* The main Earth sphere */}
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          shininess={10}
        />
      </mesh>
      
      {/* The atmospheric glow */}
      <mesh scale={[1.04, 1.04, 1.04]}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

export default Earth;
