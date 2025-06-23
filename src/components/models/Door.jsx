import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelCup from '../../assets/3Dmodels/metal_door.glb';

const Door = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelCup);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive key={'door'} object={scene} {...props} />;
};

export default Door;
