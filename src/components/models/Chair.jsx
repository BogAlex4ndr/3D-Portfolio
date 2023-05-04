import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelChair from '../../assets/3Dmodels/gaming_chair.glb';

const Chair = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelChair);
  return (
    <mesh {...props}>
      <primitive key={'chair'} object={scene} scale={0.0011} />
    </mesh>
  );
};

export default Chair;
