import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import {
  ContactShadows,
  Html,
  Loader,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  Stars,
} from '@react-three/drei';
import Table from '../components/models/Table';
import GuitarComponent from '../components/models/GuitarComponent';
import Speaker from '../components/models/Speaker';
import Chair from '../components/models/Chair';
import Helmet from '../components/models/Helmet';
import Laptop from '../components/models/Laptop';
import Monitor from '../components/models/Monitor';
import Display from '../components/models/Display';
import SiFiDisplay from '../components/models/SiFiDisplay';
import Camera from '../components/Camera';
import About from '../components/About';
import Projects from '../components/Projects';
import state from '../store';
import Mouse from '../components/models/Mouse';
import Cup from '../components/models/Cup';
import Lamp from '../components/models/Lamp';
import Resume from '../components/Resume';

const Scene = ({ ...props }) => {
  const camera = useRef();
  const controls = useRef();
  const [cameraPosition, setCameraPosition] = useState([3, 3.2, 12]);
  const [targetId, setTargetId] = useState('');
  const [buttonLock, setButtonLock] = useState(false);
  const mobileWidth = window.innerWidth < 600;
  const audioClick = new Audio('./src/assets/sounds/camera-shutter-click-01.mp3');

  audioClick.volume = 0.2;

  const snap = useSnapshot(state);

  const handleCamera = (e) => {
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
      <Canvas shadows className='canvas'>
        <Suspense fallback={null}>
          <Camera
            targetId={targetId}
            setTargetId={setTargetId}
            controls={controls}
            setButtonLock={setButtonLock}>
            <PerspectiveCamera
              ref={camera}
              makeDefault
              position={cameraPosition}
              fov={mobileWidth ? 80 : 50}
              far={mobileWidth ? 40 : 250}
            />
            <OrbitControls
              ref={controls}
              minAzimuthAngle={-1.6}
              maxAzimuthAngle={1.6}
              enablePan={true}
              enableZoom={true}
              minDistance={2.4}
              maxDistance={14}
              target={[0, 0.55, 0]}
              zoomSpeed={1}
              maxPolarAngle={1.8}
            />
          </Camera>

          {!mobileWidth && (
            <Stars radius={100} depth={1} count={600} factor={4} saturation={0} fade speed={1} />
          )}

          <SpotLight
            castShadow
            angle={1.3}
            penumbra={1}
            attenuation={0}
            decay={2}
            position={[0, 9.5, 0]}
            intensity={18}
            distance={25}
            color={'#f1f1f1'}
          />

          <ambientLight args={['#f1f1f1', 0.2]} />

          {!mobileWidth && (
            <ContactShadows
              resolution={mobileWidth ? 32 : 1048}
              frames={1}
              position={[0, -3, 0]}
              scale={20}
              blur={0.5}
              opacity={1}
              far={20}
            />
          )}
          {!mobileWidth && (
            <ContactShadows
              resolution={mobileWidth ? 232 : 1048}
              frames={1}
              position={[0, -0.087, 0]}
              scale={[9, 3]}
              blur={0.3}
              opacity={1.2}
              far={9}
            />
          )}

          {/* <gridHelper
            rotation={[Math.PI / 2, 0, 0]}
            position={[1, 0, -2.4]}
            args={[10, 30, 'blue', 'red']}
          /> */}

          <group position={[0, 0, 0]}>
            <Lamp position={[0, 9, -1.24]} rotation={[0, 0, 0]} scale={0.01} />
            <Laptop castShadow position={[0, -0.03, 0]} rotation={[0, 0, 0]} />
            <Table position={[0.5, -3.1, -0.35]} rotation={[0, 0, 0]} />
            <GuitarComponent
              position={[4.72, -2.1, -0.1]}
              scale={2.3}
              rotation={[4.7, -0.4, 1.6]}
            />
            <Speaker
              castShadow
              key={'leftSpeaker'}
              rotation={[1.57, Math.PI, 2]}
              position={[-1.55, 0.39, -0.6]}
            />
            <Speaker
              key={'rightSpeaker'}
              rotation={[1.57, Math.PI, 1]}
              position={[1.55, 0.39, -0.6]}
            />
            <Chair rotation={[0, 2.7, 0]} position={[-1, -3, 3.5]} />
            <Helmet rotation={[0, 0, 0]} position={[2.8, 1, 0]} scale={2} />
            <Cup rotation={[0, -1.3, 0]} position={[-1.6, -0.1, 0.4]} />
            <Mouse castShadow scale={4} rotation={[0, 0.2, 0]} position={[1.5, -0.08, 0.3]} />
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
              <Monitor rotation={[0, 0, 0]} position={[-2.88, 3.15, -2.37]} scale={2} />
              <Display rotation={[0, 0, 0]} position={[2.8, 2.47, -1.27]} scale={1.5} />
              <SiFiDisplay rotation={[0, 0, Math.PI / 2]} position={[5.21, 2.7, -2.4]} scale={6} />
            </group>
          </group>

          <mesh position={[0, -3.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={mobileWidth ? 0 : 1048}
              mixBlur={0.5}
              mixStrength={150}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color='#101010'
              metalness={0.5}
            />
          </mesh>

          <mesh position={[1.15, 3.1, -2.21]}>
            <planeGeometry args={[3, 1.3]} />
            <meshStandardMaterial color={'black'} metalness={1} roughness={1} />
          </mesh>

          <mesh castShadow position={[1.58, -0.08, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <boxGeometry args={[1, 0.8, 0.01]} />
            <meshLambertMaterial color={'#101010'} emissive={'#101020'} />
          </mesh>
          <mesh position={[0, 0, -3]}>
            <boxGeometry args={[30, 30]} />
            <meshStandardMaterial
              transparent
              opacity={0.5}
              color='#202020'
              metalness={0.1}
              roughness={0.7}
            />
          </mesh>

          <Html
            className='contentLaptop'
            rotation-x={-0.16}
            position={[0, 0.8, -0.82]}
            scale={0.1}
            transform
            occlude={'blending'}>
            <div className='wrapperLaptop' onPointerDown={(e) => e.stopPropagation()}>
              <div
                style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '5px' }}>
                <a id='about' onClick={handleCamera}>
                  About
                </a>
                <a id='projects' onClick={handleCamera}>
                  Projects
                </a>
                <a id='resume' onClick={handleCamera}>
                  Resume
                </a>
              </div>
            </div>
          </Html>
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ justifyContent: 'center' }}
        innerStyles={{ background: '#07b39b', borderRadius: '10px', height: '25px', width: '135px' }}
        barStyles={{ background: '#ffff00', height: '25px', width: '135px', borderRadius: '10px' }}
        dataStyles={{ color: '#ffff00', fontSize: '16px' }}
      />
    </>
  );
};

export default Scene;
