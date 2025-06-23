import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelSciFiDisplay from '../../assets/3Dmodels/sci-fi_display_10.glb';

const SiFiDisplay = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelSciFiDisplay);

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

export default SiFiDisplay;
