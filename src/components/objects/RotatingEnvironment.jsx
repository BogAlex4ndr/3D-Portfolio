import { useRef } from 'react';
import { Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import EnvironmentImage from '../../assets/images/citrus_orchard_road_puresky_4k.hdr';

const RotatingEnvironment = () => {
  const groupRef = useRef();

  useFrame(state => {
    if (groupRef.current) {
      // Вращаем группу с окружением вокруг оси Y
      groupRef.current.rotation.y += 1; // скорость вращения можно менять
    }
  });

  return (
    <group ref={groupRef}>
      <Environment files={EnvironmentImage} background={true} />
    </group>
  );
};

export default RotatingEnvironment;
