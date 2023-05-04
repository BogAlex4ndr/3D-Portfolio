import { Html, useGLTF } from '@react-three/drei';
import React from 'react';

const Monitor = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/sci-fi_display_3.glb');
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Monitor;
