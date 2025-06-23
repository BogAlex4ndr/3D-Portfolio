import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EXRLoader } from 'three-stdlib';

import EnvironmentImage from '../../assets/images/NightSkyHDRI008_2K-HDR.exr';

const EXREnvironment = () => {
  const { scene } = useThree();
  const textureRef = useRef();

  useEffect(() => {
    new EXRLoader().load(EnvironmentImage, texture => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;
      scene.background = texture; // или убрать, если фон не нужен

      textureRef.current = texture;
    });
  }, [scene]);

  // если хочешь вращать (необязательно)
  useFrame(state => {
    if (textureRef.current) {
      textureRef.current.rotation = (state.clock.elapsedTime * 0.1) % (Math.PI * 2);
    }
  });

  return null;
};

export default EXREnvironment;
