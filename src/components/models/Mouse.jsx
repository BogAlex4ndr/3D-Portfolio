import { useGLTF } from '@react-three/drei';
import React from 'react';

const Mouse = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/mouse.glb');
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Mouse;
