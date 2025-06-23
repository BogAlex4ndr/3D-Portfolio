import { Html, useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelmonitor from '../../assets/3Dmodels/sci-fi_display_3.glb';

const Monitor = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelmonitor);
  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Monitor;
