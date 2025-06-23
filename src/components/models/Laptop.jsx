import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import modelLaptop from '../../assets/3Dmodels/cyberpunk_laptop.glb';

const Laptop = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelLaptop);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive castShadow object={scene} {...props} />;
};

export default Laptop;
