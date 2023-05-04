import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelLamp from '../../assets/3Dmodels/wall_lamp.glb';

const Lamp = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelLamp);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Lamp;
