import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelCup from '../../assets/3Dmodels/cup.glb';

const Cup = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelCup);
  return (
    <mesh {...props}>
      <primitive key={'cup'} object={scene} scale={3} />
    </mesh>
  );
};

export default Cup;
