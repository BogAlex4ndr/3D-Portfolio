import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import {
  Cloud,
  ContactShadows,
  Environment,
  FlyControls,
  Html,
  Loader,
  MeshReflectorMaterial,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  Sky,
  SpotLight,
  Stars,
  Stats,
} from '@react-three/drei';
import {
  Table,
  GuitarComponent,
  Speaker,
  Chair,
  Laptop,
  Monitor,
  Display,
  SiFiDisplay,
  Mouse,
  Cup,
  Lamp,
} from '../components/models';
import Camera from '../components/Camera';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import camereSound from '../assets/sounds/camera-shutter-click-01.mp3';
import FlatScreen from '../components/models/FlatScreen';
import AnimatedHelmet from '../components/objects/animatedHelmet';
import { DynamicSpotLight } from '../components/objects/DynamicSpotLight';
import { TiledFloor } from '../components/objects/TiledFlor';
import City from '../components/models/city';
import ColorTransitionDome from '../components/objects/ColorTransitionDome';
import RotatingEnvironment from '../components/objects/RotatingEnvironment';
import Door from '../components/models/Door';

// Компонент для динамического света, следующего за объектом

// Анимированный источник света
const AnimatedLight = () => {
  const lightRef = useRef();

  useFrame(state => {
    if (lightRef.current) {
      // Свет движется по кругу
      const time = state.clock.elapsedTime;
      lightRef.current.position.x = Math.sin(time * 0.5) * 5;
      lightRef.current.position.z = Math.cos(time * 0.5) * 5;
      lightRef.current.position.y = 3 + Math.sin(time * 0.3) * 2;
    }
  });

  return (
    <SpotLight
      ref={lightRef}
      castShadow
      position={[0, 5, 0]}
      target-position={[0, 0, 0]}
      intensity={8}
      angle={1.2}
      penumbra={1}
      decay={2}
      distance={25}
      shadow-mapSize-width={4048}
      shadow-mapSize-height={4048}
      color="red"
    />
  );
};

const Scene = () => {
  const camera = useRef();
  const controls = useRef();
  const helmetRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([3, 3.2, 12]);
  const [targetId, setTargetId] = useState('');
  const [buttonLock, setButtonLock] = useState(false);
  const mobileWidth = window.innerWidth < 600;
  const audioClick = new Audio(camereSound);
  audioClick.volume = 0.2;

  const handleCamera = e => {
    e.stopPropagation();
    if (buttonLock === false) {
      setButtonLock(true);
      audioClick.play();
      switch (e.target.id) {
        case 'about':
          setTargetId('about');
          setTimeout(() => {
            setTargetId('activeAbout');
            setButtonLock(false);
          }, 1200);
          break;
        case 'projects':
          setTargetId('projects');
          setTimeout(() => {
            setTargetId('activeProjects');
            setButtonLock(false);
          }, 1200);
          break;
        case 'resume':
          setTargetId('resume');
          setTimeout(() => {
            setTargetId('activeResume');
            setButtonLock(false);
          }, 1000);
          break;
        case 'buttonBack':
          setTargetId('default');
          setTimeout(() => {
            setTargetId('');
            setButtonLock(false);
          }, 1000);
          break;
        default:
          setButtonLock(false);
          break;
      }
    }
  };

  return (
    <>
      <Canvas shadows dpr={[1, 1.5]} className="canvas">
        <Suspense fallback={null}>
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

            {/* <OrbitControls /> */}
          </Camera>

          {!mobileWidth && (
            <Stars radius={150} depth={1} count={5000} factor={4} saturation={0} fade speed={1} />
          )}

          {/* <Environment files={EnvironmentImage} background={true} /> */}

          <RotatingEnvironment />

          {/* <Sky
            distance={45000}
            sunPosition={[0, -1, 0]}
            inclination={0}
            azimuth={0.25}
            mieCoefficient={0.01}
            mieDirectionalG={0.9}
            rayleigh={30}
            turbidity={1}
          /> */}

          <ColorTransitionDome />

          {/* {!mobileWidth && <BlackHole position={[0, -13.5, 300]} scale={100} />} */}

          {/* <AnimatedLight /> */}

          {/* Динамический свет */}
          <DynamicSpotLight target={helmetRef} position={[0, 9.5, 0]} intensity={25} />

          <ambientLight args={['#f1f1f1', 0.15]} />

          <group position={[0, 0, 0]}>
            <Lamp position={[0, 9, -1.24]} rotation={[0, 0, 0]} scale={0.01} />
            <Laptop castShadow receiveShadow position={[0, -0.03, 0]} rotation={[0, 0, 0]} />
            <Table castShadow receiveShadow position={[0.5, -0.1, -0.35]} rotation={[0, 0, 0]} />
            {/* <GuitarComponent
              castShadow
              receiveShadow
              position={[4.72, -2.1, -0.1]}
              scale={2.3}
              rotation={[4.7, -0.4, 1.6]}
            /> */}
            <Door
              rotation={[0, 0, 0]}
              castShadow
              receiveShadow
              position={[0, -3.2, 23.8]}
              scale={0.05}
            />
            <Speaker
              castShadow
              key={'leftSpeaker'}
              rotation={[1.57, Math.PI, 2]}
              position={[-1.55, 0.39, -0.6]}
            />
            <Speaker
              castShadow
              key={'rightSpeaker'}
              rotation={[1.57, Math.PI, 1]}
              position={[1.55, 0.39, -0.6]}
            />
            <Chair castShadow receiveShadow rotation={[0, 2.7, 0]} position={[-1, -3, 3.5]} />
            <AnimatedHelmet
              ref={helmetRef}
              castShadow
              rotation={[0, 0, 0]}
              position={[3.8, 1, 0]}
              scale={2}
            />

            <Cup castShadow rotation={[0, -1.3, 0]} position={[-1.6, -0.1, 0.4]} />
            <Mouse castShadow scale={4} rotation={[0, 0.2, 0]} position={[1.5, -0.08, 0.3]} />
            <City castShadow receiveShadow position={[-3.3, -0.1, -0.35]} rotation={[0, 0, 0]} />
            <About
              rotation={[0, 0, 0]}
              position={[-2.17, 2.69, -2.35]}
              handleCamera={handleCamera}
              targetId={targetId}
            />
            <Projects
              rotation={[0, 0, 0]}
              position={[1.15, 2.8, -2.2]}
              handleCamera={handleCamera}
              targetId={targetId}
            />
            <Resume
              rotation={[0, 0, 0]}
              position={[4.26, 2.75, -2.41]}
              handleCamera={handleCamera}
              targetId={targetId}
            />
            <group>
              <Monitor castShadow rotation={[0, 0, 0]} position={[-2.88, 3.15, -2.37]} scale={2} />
              <Display castShadow rotation={[0, 0, 0]} position={[2.8, 2.47, -1.27]} scale={1.5} />
              <SiFiDisplay
                castShadow
                receiveShadow
                rotation={[0, 0, Math.PI / 2]}
                position={[5.21, 2.7, -2.4]}
                scale={6}
              />
              <FlatScreen
                castShadow
                receiveShadow
                rotation={[0, 0, -Math.PI / 2]}
                position={[5.25, 2.6, -2.5]}
              />
            </group>
          </group>

          {/* Пол с получением теней */}
          {/* <mesh receiveShadow position={[0, -3.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[30, 30]} />

            <meshStandardMaterial
              transparent
              opacity={1}
              color="black"
              metalness={0.1}
              roughness={0.7}
            />
          </mesh> */}

          <TiledFloor />
          {/* <mesh receiveShadow position={[0, 0, 0]}>
            <sphereGeometry args={[25, 64, 64]} />
            <meshStandardMaterial
              transparent
              opacity={0.5}
              color={'#5588ff'}
              metalness={0.2}
              roughness={0.8}
              side={THREE.BackSide} // <-- важно!
            />
          </mesh> */}

          <mesh receiveShadow position={[1.15, 3.1, -2.21]}>
            <planeGeometry args={[3, 1.3]} />
            <meshStandardMaterial color={'black'} metalness={1} roughness={1} />
          </mesh>

          <mesh
            receiveShadow
            castShadow
            position={[1.58, -0.08, 0.4]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <boxGeometry args={[1, 0.8, 0.01]} />
            <meshLambertMaterial color={'#101010'} emissive={'#101020'} />
          </mesh>

          <mesh receiveShadow castShadow position={[0, 10, -3]}>
            <boxGeometry args={[50, 30]} />
            <MeshReflectorMaterial
              blur={[0.5, 0.5]}
              resolution={mobileWidth ? 0 : 2048}
              mixStrength={150}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.7}
              roughness={1}
            />
          </mesh>

          <Html
            className="contentLaptop"
            rotation-x={-0.16}
            position={[0, 0.8, -0.82]}
            scale={0.1}
            transform
            occlude={'blending'}
          >
            <div className="wrapperLaptop" onPointerDown={e => e.stopPropagation()}>
              <div
                style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '5px' }}
              >
                <a id="about" onClick={handleCamera}>
                  About
                </a>
                <a id="projects" onClick={handleCamera}>
                  Projects
                </a>
                <a id="resume" onClick={handleCamera}>
                  Resume
                </a>
              </div>
            </div>
          </Html>
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ justifyContent: 'center' }}
        innerStyles={{
          background: '#07b39b',
          borderRadius: '10px',
          height: '25px',
          width: '135px',
        }}
        barStyles={{ background: '#ffff00', height: '25px', width: '135px', borderRadius: '10px' }}
        dataStyles={{ color: '#ffff00', fontSize: '16px' }}
      />
    </>
  );
};

export default Scene;
