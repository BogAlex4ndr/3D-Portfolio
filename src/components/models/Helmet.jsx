import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

const Helmet = ({ ...props }) => {
  const { scene, nodes, materials, animations } = useGLTF(
    './src/assets/3Dmodels/360_sphere_robot.glb',
  );

  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions['sphere body|sphere bodyAction'].play();
  }, []);
  return (
    <mesh {...props}>
      <primitive key={'helmet'} object={scene} />
    </mesh>
  );
};

export default Helmet;
