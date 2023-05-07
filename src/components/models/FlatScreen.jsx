import { useGLTF } from '@react-three/drei';
import React from 'react';
import modelScreen from '../../assets/3Dmodels/flat_screen_television.glb';

const FlatScreen = ({...props}) => {
    const { scene, nodes, materials } = useGLTF(modelScreen);
    return (
      <mesh {...props}>
        <primitive key={'screen'} object={scene} scale={0.012} />
      </mesh>
    );
}

export default FlatScreen