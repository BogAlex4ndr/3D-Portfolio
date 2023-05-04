import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import modelTable from '../../assets/3Dmodels/futuristic_desk.glb';

const Table = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelTable);
  return (
    <mesh receiveShadow={true}>
      <primitive scale={15} castShadow object={scene} {...props} />
      <shadowMaterial transparent opacity={0.4} />
    </mesh>
  );
};

export default Table;
