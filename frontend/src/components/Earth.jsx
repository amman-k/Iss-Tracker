import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const EARTH_TEXTURE_URL =
  "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

const EARTH_RADIUS = 5;

function Earth() {
  const texture = useLoader(TextureLoader, EARTH_TEXTURE_URL);

  const geometry = useMemo(
    () => new THREE.SphereGeometry(EARTH_RADIUS, 64, 64),
    []
  );

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.7} />
    </mesh>
  );
}

export default Earth;
