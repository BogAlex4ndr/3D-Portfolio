import { useGLTF } from '@react-three/drei';
import modelLamp from '../../assets/3Dmodels/wall_lamp.glb';

export const Lamp = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(modelLamp);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Lamp;
