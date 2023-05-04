import { useGLTF } from '@react-three/drei';
import React from 'react';

const Cup = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/cup.glb');
  return (
    <mesh {...props}>
      <primitive key={'cup'} object={scene} scale={3} />
    </mesh>
  );
};

export default Cup;
