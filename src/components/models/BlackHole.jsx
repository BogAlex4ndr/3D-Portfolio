import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import blackHole from '../../assets/3Dmodels/blackhole.glb';

const BlackHole = ({ ...props }) => {
  const groupRef = useRef(); // for rotation
  const { scene, animations } = useGLTF(blackHole);
  const { actions } = useAnimations(animations, scene);

  // Start animation with custom speed
  useEffect(() => {
    if (actions && actions['Take 001']) {
      const action = actions['Take 001'];
      action.timeScale = 0.1;
      action.play();
    }
  }, [actions]);

  // Enable shadows
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

  // Rotate the object every frame
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // 0.5 rad/sec = ~28 deg/sec
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default BlackHole;
