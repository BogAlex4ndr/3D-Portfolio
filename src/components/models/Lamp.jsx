import { useGLTF } from '@react-three/drei';
import React from 'react';

const Lamp = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('./src/assets/3Dmodels/wall_lamp.glb');
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Lamp;
