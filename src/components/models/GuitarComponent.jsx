import { useGLTF } from '@react-three/drei';
import React from 'react';

const GuitarComponent = ({ ...props }) => {
  const { nodes, materials } = useGLTF('./src/assets/3Dmodels/guitar.glb');
  return (
    <mesh
      geometry={nodes.guitar_guitar_0.geometry}
      material={materials['guitar']}
      {...props}></mesh>
  );
};

export default GuitarComponent;
