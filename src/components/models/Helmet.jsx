import { useGLTF, useAnimations } from '@react-three/drei';
import { forwardRef, useEffect } from 'react';
import modelRobot from '../../assets/3Dmodels/360_sphere_robot.glb';

export const Helmet = forwardRef((props, ref) => {
  const { scene, animations } = useGLTF(modelRobot);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Включаем тени на всех мешах
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Запускаем нужную анимацию, если есть
    const animationName = 'sphere body|sphere bodyAction';
    const action = actions?.[animationName];
    if (action) {
      action.reset().fadeIn(0.5).setEffectiveTimeScale(1).play(); // можно менять timeScale
    }
  }, [scene, actions]);

  return <primitive ref={ref} object={scene} castShadow receiveShadow {...props} />;
});

Helmet.displayName = 'Helmet';

export default Helmet;
