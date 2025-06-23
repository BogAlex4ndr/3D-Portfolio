import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ColorTransitionDome = () => {
  const materialRef = useRef();

  // Цвета между которыми будет переход
  const colorStart = useMemo(() => new THREE.Color('#5588ff'), []);
  const colorEnd = useMemo(() => new THREE.Color('#55f8ff'), []);
  const lerpedColor = new THREE.Color();

  //   useFrame(({ clock }) => {
  //     const t = (Math.sin(clock.getElapsedTime() * 0.5) + 1) / 2; // значение от 0 до 1
  //     lerpedColor.copy(colorStart).lerp(colorEnd, t);

  //     if (materialRef.current) {
  //       materialRef.current.color = lerpedColor.clone();
  //     }
  //   });

  return (
    <mesh receiveShadow position={[0, 0, 0]}>
      <sphereGeometry args={[25, 64, 64]} />

      <meshStandardMaterial
        ref={materialRef}
        transparent
        opacity={0.4}
        color={colorStart}
        metalness={0.2}
        roughness={0.8}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default ColorTransitionDome;
