import { Decal, Html, useGLTF } from '@react-three/drei';
import React, { useEffect, useLayoutEffect } from 'react';
import modelSpeaker from '../../assets/3Dmodels/speaker.glb';

const Speaker = ({ ...props }) => {
  const { nodes, materials } = useGLTF(modelSpeaker);

  useLayoutEffect(() => {
    materials['Speaker'].color.set('rgb(125, 125, 125)');
  }, [materials]);

  return (
    <mesh
      geometry={nodes.Cube001_Speaker_0.geometry}
      material={materials['Speaker']}
      scale={0.3}
      dispose={0}
      {...props}
    ></mesh>
  );
};

export default Speaker;
