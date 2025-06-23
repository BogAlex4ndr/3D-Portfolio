import React, { useRef, useState } from 'react';
import Lamp from './Lamp';
import Laptop from './Laptop';
import Table from './Table';
import Door from './Door';
import Speaker from './Speaker';
import Chair from './Chair';
import AnimatedHelmet from '../objects/animatedHelmet';
import Cup from './Cup';
import Mouse from './Mouse';
import City from './city';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Monitor from './Monitor';
import Display from './Display';
import SiFiDisplay from './SiFiDisplay';
import FlatScreen from './FlatScreen';
import { handleCameraClick } from '../../helpers/handleCamera';
import camereSound from '../../assets/sounds/camera-shutter-click-01.mp3';

const ModelsComponent = ({ setTargetId, setButtonLock, buttonLock, targetId }) => {
  const helmetRef = useRef();
  const audioClick = new Audio(camereSound);
  audioClick.volume = 0.2;

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
    </>
  );
};

export default ModelsComponent;
