import { Html } from '@react-three/drei';
import React, { useRef } from 'react';
import styles from './Resume.module.scss';

const Resume = ({ handleCamera, targetId, ...props }) => {
  const clickerRef = useRef();
  return (
    <mesh {...props}>
      <Html
        className={styles.htmlResumeWrapper}
        transform
        distanceFactor={10}
        scale={0.1}
        occlude={'blending'}>
        <section className={styles.wprapper}>
          {targetId === 'activeResume' ? (
            <div>
              <div className={styles.imageConteiner}>
                <img src='./src/assets/images/FrontEndCV.jpg' alt='' />
              </div>
              <button
                id='buttonBack'
                className={styles.buttonBack}
                disabled={false}
                onClick={handleCamera}>
                BACK
              </button>
            </div>
          ) : (
            <div
              onClick={handleCamera}
              id='resume'
              ref={clickerRef}
              className={styles.previewProjects}>
              <div className={styles.previewImage} onClick={() => clickerRef.current.click()}>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </Html>
    </mesh>
  );
};

export default Resume;
