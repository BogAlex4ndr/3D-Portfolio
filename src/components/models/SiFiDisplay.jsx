import { useGLTF } from '@react-three/drei';
import React from 'react';

const SiFiDisplay = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/sci-fi_display_10.glb');
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default SiFiDisplay;
