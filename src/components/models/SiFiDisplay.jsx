import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelSciFiDisplay from '../../assets/3Dmodels/sci-fi_display_10.glb';

const SiFiDisplay = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelSciFiDisplay);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default SiFiDisplay;
