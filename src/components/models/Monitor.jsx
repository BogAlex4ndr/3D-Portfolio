import { Html, useGLTF } from '@react-three/drei';
import React from 'react';
import modelmonitor from '../../assets/3Dmodels/sci-fi_display_3.glb';

const Monitor = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelmonitor);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Monitor;
