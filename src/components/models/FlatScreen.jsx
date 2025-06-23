import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import modelScreen from '../../assets/3Dmodels/flat_screen_television.glb';

const FlatScreen = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelScreen);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);

  return <primitive key={'screen'} object={scene} scale={0.012} castShadow {...props} />;
};

export default FlatScreen;
