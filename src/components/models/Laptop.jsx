import { useGLTF } from '@react-three/drei';
import React from 'react';

const Laptop = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/cyberpunk_laptop.glb');
  return (
    <mesh {...props}>
      <primitive castShadow object={scene} />
    </mesh>
  );
};

export default Laptop;
