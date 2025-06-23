import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import modelChair from '../../assets/3Dmodels/gaming_chair.glb';

const Chair = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelChair);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.shadowSide = 2;
        }
      }
    });
  }, [scene]);

  return (
    <primitive key={'chair'} object={scene} scale={0.0011} castShadow receiveShadow {...props} />
  );
};

export default Chair;
