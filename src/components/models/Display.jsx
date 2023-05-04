import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelDisplay from '../../assets/3Dmodels/sci-fi_display.glb';

const Display = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelDisplay);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Display;
