import React from 'react'

const Iss = ({position}) => {
   return (
    <mesh position={position}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
    </mesh>
  );
}

export default Iss