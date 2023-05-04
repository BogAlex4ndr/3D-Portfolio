import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelLaptop from '../../assets/3Dmodels/cyberpunk_laptop.glb';

const Laptop = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelLaptop);
  return (
    <mesh {...props}>
      <primitive castShadow object={scene} />
    </mesh>
  );
};

export default Laptop;
