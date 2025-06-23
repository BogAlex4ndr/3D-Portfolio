import { SpotLight } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const DynamicSpotLight = ({ target, position, intensity = 5 }) => {
  const lightRef = useRef();

  const mobileWidth = window.innerWidth < 600;

  useFrame(() => {
    if (lightRef.current && target && target.current) {
      try {
        // Свет направлен на целевой объект
        const targetPosition = new THREE.Vector3();
        target.current.getWorldPosition(targetPosition);
        lightRef.current.target.position.copy(targetPosition);
        lightRef.current.target.updateMatrixWorld();
      } catch (error) {
        console.warn('Error updating light target:', error);
      }
    }
  });

  return (
    <SpotLight
      ref={lightRef}
      castShadow
      angle={1.3}
      penumbra={1}
      attenuation={0}
      decay={2}
      position={position}
      intensity={intensity}
      distance={25}
      color={'#f1f1f1'}
      shadow-mapSize-width={mobileWidth ? 0 : 2048}
      shadow-mapSize-height={mobileWidth ? 0 : 2048}
      shadow-bias={-0.004}
      shadow-camera-near={1}
      shadow-camera-far={20}
      shadow-camera-fov={30}
    />
  );
};
