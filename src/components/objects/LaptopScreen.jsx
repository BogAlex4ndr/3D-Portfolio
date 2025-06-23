import { Html } from '@react-three/drei';
import React from 'react';

const LaptopScreen = ({ handleCamera }) => {
  return (
    <Html
      className="contentLaptop"
      rotation-x={-0.16}
      position={[0, 0.8, -0.82]}
      scale={0.1}
      transform
      occlude={'blending'}
    >
      <div className="wrapperLaptop" onPointerDown={e => e.stopPropagation()}>
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '5px' }}>
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
  );
};

export default LaptopScreen;
