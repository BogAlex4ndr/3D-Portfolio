import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import modelMouse from '../../assets/3Dmodels/mouse.glb';

const Mouse = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelMouse);
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
export default Mouse;
