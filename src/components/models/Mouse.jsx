import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelMouse from '../../assets/3Dmodels/mouse.glb';

const Mouse = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelMouse);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Mouse;
