import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import city from '../../assets/3Dmodels/mafer_city.glb';

const City = ({ ...props }) => {
  const { scene, nodes, materials, animations } = useGLTF(city);

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions['Main']) {
      actions['Main'].play();
    }
  }, [actions]);

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
    <primitive key={'city'} object={scene} scale={0.0025} castShadow receiveShadow {...props} />
  );
};

export default City;
