import { useGLTF } from '@react-three/drei';
import React from 'react';

const Chair = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/gaming_chair.glb');
  return (
    <mesh {...props}>
      <primitive key={'chair'} object={scene} scale={0.0011} />
    </mesh>
  );
};

export default Chair;
