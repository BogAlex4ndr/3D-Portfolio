import { useGLTF } from '@react-three/drei';
import React from 'react';

const Display = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/sci-fi_display.glb');
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Display;
