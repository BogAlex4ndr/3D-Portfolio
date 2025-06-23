import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';
import ColorTransitionDome from '../objects/ColorTransitionDome';
import RotatingEnvironment from '../objects/RotatingEnvironment';
import { TiledFloor } from '../objects/TiledFlor';

const CustomEnvironment = () => {

  const mobileWidth = window.innerWidth < 600;
  return (
    <>
      <ColorTransitionDome />
      <RotatingEnvironment />
      <TiledFloor />
      <mesh receiveShadow position={[1.15, 3.1, -2.21]}>
        <planeGeometry args={[3, 1.3]} />
        <meshStandardMaterial color={'black'} metalness={1} roughness={1} />
      </mesh>

      <mesh receiveShadow castShadow position={[1.58, -0.08, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[1, 0.8, 0.01]} />
        <meshLambertMaterial color={'#101010'} emissive={'#101020'} />
      </mesh>

      <mesh receiveShadow castShadow position={[0, 10, -3]}>
        <boxGeometry args={[50, 30]} />
        <MeshReflectorMaterial
          mirror={1}
          blur={[0.5, 0.5]}
          resolution={mobileWidth ? 0 : 2048}
          mixStrength={150}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.7}
          roughness={1}
        />
      </mesh>
    </>
  );
};

export default CustomEnvironment;
