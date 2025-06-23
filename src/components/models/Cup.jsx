import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelCup from '../../assets/3Dmodels/cup.glb';

const Cup = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelCup);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive key={'cup'} object={scene} scale={3} {...props} />;
};

export default Cup;
