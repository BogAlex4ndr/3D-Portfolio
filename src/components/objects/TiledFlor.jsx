import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

import textureColor from '../../assets/textures/rubber_tiles_diff_1k.jpg';
import textureNormal from '../../assets/textures/rubber_tiles_nor_gl_1k.jpg';
import textureRough from '../../assets/textures/rubber_tiles_arm_1k.jpg';

export const TiledFloor = () => {
  const [colorMap, normalMap, roughnessMap, aoMap] = useTexture([
    textureColor,
    textureNormal,
    textureRough,
  ]);

  // Повторяем плитку 10x10 раз
  const repeat = 20;

  // Применяем повторение ко всем картам
  [colorMap, normalMap, roughnessMap].forEach(tex => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeat);
  });

  return (
    <mesh receiveShadow position={[0, -3.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[25, 64]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        metalness={0.1}
        roughness={1}
      />
    </mesh>
  );
};
