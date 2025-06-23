import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelDisplay from '../../assets/3Dmodels/sci-fi_display.glb';

const Display = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelDisplay);
  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
};

export default Display;
