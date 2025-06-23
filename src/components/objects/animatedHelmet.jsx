// components/models/AnimatedHelmet.jsx
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Helmet from '../models/Helmet';

const AnimatedHelmet = props => {
  const helmetRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (helmetRef.current) {
      const targetX = (mouse.current.x - 0.28) * 1;
      const targetY = -mouse.current.y * 1;

      helmetRef.current.rotation.y = THREE.MathUtils.lerp(
        helmetRef.current.rotation.y,
        targetX,
        0.1
      );
      helmetRef.current.rotation.x = THREE.MathUtils.lerp(
        helmetRef.current.rotation.x,
        targetY,
        0.1
      );
    }
  });

  return <Helmet ref={helmetRef} {...props} />;
};

export default AnimatedHelmet;
