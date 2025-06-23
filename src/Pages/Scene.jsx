import { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import Camera from '../components/Camera';
import camereSound from '../assets/sounds/camera-shutter-click-01.mp3';
import { DynamicSpotLight } from '../components/objects/DynamicSpotLight';
import { handleCameraClick } from '../helpers/handleCamera';
import ModelsComponent from '../components/models/ModelsComponent';
import CustomEnvironment from '../components/Environment/CustomEnvironment';
import LaptopScreen from '../components/objects/LaptopScreen';
import CustomLoader from '../components/objects/CustomLoader';

const Scene = () => {
  const camera = useRef();
  const controls = useRef();
  const helmetRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([3, 3.2, 12]);
  const [targetId, setTargetId] = useState('');
  const [buttonLock, setButtonLock] = useState(false);
  const mobileWidth = window.innerWidth < 600;

  const audioClick = useMemo(() => {
    const audio = new Audio(camereSound);
    audio.volume = 0.2;
    return audio;
  }, []);

  const handleCamera = e => {
    handleCameraClick({
      e,
      setTargetId,
      setButtonLock,
      buttonLock,
      audioClick,
    });
  };

  return (
    <>
      <Canvas shadows dpr={[1, 1.5]} className="canvas">
        <Suspense fallback={<CustomLoader />}>
          <Camera
            targetId={targetId}
            setTargetId={setTargetId}
            controls={controls}
            setButtonLock={setButtonLock}
          >
            <PerspectiveCamera
              ref={camera}
              makeDefault
              position={cameraPosition}
              fov={mobileWidth ? 80 : 50}
              far={mobileWidth ? 60 : 450}
            />
            <OrbitControls
              ref={controls}
              minAzimuthAngle={-1.4}
              maxAzimuthAngle={1.4}
              enablePan={false}
              enableZoom={true}
              minDistance={2.4}
              maxDistance={18}
              target={[0, 0.55, 0]}
              zoomSpeed={1}
              maxPolarAngle={1.7}
            />
          </Camera>
          {!mobileWidth && (
            <Stars radius={150} depth={1} count={5000} factor={4} saturation={0} fade speed={1} />
          )}
          <DynamicSpotLight target={helmetRef} position={[0, 9.5, 0]} intensity={25} />
          <ambientLight args={['#f1f1f1', 0.15]} />
          <CustomEnvironment />
          <ModelsComponent
            targetId={targetId}
            setTargetId={setTargetId}
            buttonLock={buttonLock}
            setButtonLock={setButtonLock}
          />
          <LaptopScreen handleCamera={handleCamera} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
