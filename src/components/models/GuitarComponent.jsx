import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelGuitar from '../../assets/3Dmodels/guitar.glb';

const GuitarComponent = ({ ...props }) => {
  const { nodes, materials } = useGLTF(modelGuitar);
  return (
    <mesh
      geometry={nodes.guitar_guitar_0.geometry}
      material={materials['guitar']}
      {...props}></mesh>
  );
};

export default GuitarComponent;
