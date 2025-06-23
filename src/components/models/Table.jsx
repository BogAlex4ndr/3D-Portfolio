import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import modelTable from '../../assets/3Dmodels/futuristic_desk.glb';
import scifiTable from '../../assets/3Dmodels/sci-fi_table.glb';

const Table = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF(scifiTable);

  useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group {...props}>
      <primitive scale={4.3} castShadow receiveShadow object={scene} />
    </group>
  );
};

export default Table;
