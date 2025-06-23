import { Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import styles from './Resume.module.scss';
import cv from '../../assets/images/cv-2.png';
import cvImage from '../../assets/images/CV_Frontend_Alex-Bohar.png';

const Resume = ({ handleCamera, targetId, ...props }) => {
  const clickerRef = useRef();
  return (
    <mesh {...props}>
      <Html
        className={styles.htmlResumeWrapper}
        transform
        distanceFactor={10}
        scale={0.1}
        occlude={'blending'}
      >
        <section className={styles.wprapper}>
          {targetId === 'activeResume' ? (
            <div>
              <div className={styles.imageConteiner}>
                <img src={cvImage} alt="" />
              </div>
            </div>
          ) : (
            <div
              onClick={handleCamera}
              id="resume"
              ref={clickerRef}
              className={styles.previewProjects}
            >
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
      {targetId === 'activeResume' && (
        <Html
          className={styles.buttonsScreen}
          transform
          distanceFactor={10}
          scale={0.1}
          occlude={'blending'}
          position={[1.21, -0.16, -0.065]}
        >
          <div className={styles.buttonsScreenWrapper}>
            <a
              href="https://drive.google.com/file/d/1vnQrLKzcBfy4mnRTqf22Rw2yxpa6PHAh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.buttonDownload}>download</button>
            </a>
            <button
              id="buttonBack"
              className={styles.buttonBack}
              disabled={false}
              onClick={handleCamera}
            >
              BACK
            </button>
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default Resume;
