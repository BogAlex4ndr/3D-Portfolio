import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React from 'react';

const targetCameraPosition = {
  default: [4, 3.2, 12],
  about: [-2.5, 2.7, 0.5],
  projects: [1.15, 2.8, 0.6],
  resume: [4.3, 2.75, 1.1],
};

const targetControlsPosition = {
  default: [0, 0.55, 0],
  about: [-2.5, 2.7, -1.6],
  projects: [1.15, 2.8, -1.5],
  resume: [4.3, 2.75, -1.5],
};

const Camera = ({ children, controls, targetId }) => {
  useFrame((state, delta) => {
    switch (targetId) {
      case 'default':
        easing.damp3(state.camera.position, targetCameraPosition.default, 0.25, delta);
        easing.damp3(controls.current.target, targetControlsPosition.default, 0.25, delta);
        controls.current.enablePan = true;
        controls.current.enableZoom = true;
        controls.current.enableRotate = true;
        controls.current.maxDistance = 14;

        break;
      case 'about':
        easing.damp3(state.camera.position, targetCameraPosition.about, 0.25, delta);
        easing.damp3(controls.current.target, targetControlsPosition.about, 0.25, delta);
        controls.current.enableRotate = false;

        break;
      case 'projects':
        easing.damp3(state.camera.position, targetCameraPosition.projects, 0.25, delta);
        easing.damp3(controls.current.target, targetControlsPosition.projects, 0.25, delta);

        break;
      case 'resume':
        easing.damp3(state.camera.position, targetCameraPosition.resume, 0.25, delta);
        easing.damp3(controls.current.target, targetControlsPosition.resume, 0.25, delta);
        break;
      case 'activeAbout':
        controls.current.enablePan = false;
        controls.current.enableZoom = true;
        controls.current.enableRotate = false;
        controls.current.maxDistance = 3;
        controls.current.minDistance = 1.5;
        break;
      case 'activeProjects':
        controls.current.enablePan = false;
        controls.current.enableZoom = true;
        controls.current.enableRotate = false;
        controls.current.maxDistance = 3;
        controls.current.minDistance = 1.5;
        break;
      case 'activeResume':
        controls.current.enablePan = false;
        controls.current.enableZoom = true;
        controls.current.enableRotate = false;
        controls.current.maxDistance = 3;
        controls.current.minDistance = 1.65;
        break;
      default:
        break;
    }
  });
  return <group>{children}</group>;
};

export default Camera;
