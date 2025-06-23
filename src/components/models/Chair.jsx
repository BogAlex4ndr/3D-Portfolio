import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelChair from '../../assets/3Dmodels/gaming_chair.glb';

const Chair = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelChair);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Настройка материала для лучших теней
        if (child.material) {
          child.material.shadowSide = 2; // DoubleSide
        }
      }
    });
  }, [scene]);

  return (
    <primitive key={'chair'} object={scene} scale={0.0011} castShadow receiveShadow {...props} />
  );
};

export default Chair;
