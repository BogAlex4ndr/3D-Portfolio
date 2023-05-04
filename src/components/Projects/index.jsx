import { Html } from '@react-three/drei';
import React, { useRef } from 'react';
import styles from './Projects.module.scss';
const Projects = ({ handleCamera, targetId, ...props }) => {
  const clickerRef = useRef();

  return (
    <mesh {...props}>
      <Html
        className='monitorProjectsWrapper'
        transform
        distanceFactor={10}
        scale={0.1}
        occlude={'blending'}>
        {targetId === 'activeProjects' ? (
          <section className={styles.PojectsWrapper}>
            <img className={styles.circle} src='./src/assets/images/circle2.png' alt='' />
            <img className={styles.circle2} src='./src/assets/images/circle.png' alt='' />
            <img className={styles.circle3} src='./src/assets/images/circle3.png' alt='' />
            <div className={styles.projectsItems}>
              <div className={styles.projectCard}>
                <img src='https://i.ibb.co/HDSsm1K/guitar-Shop.png' alt='' />
                <div className={styles.infoBlock}>
                  <h4>Title</h4>
                  <p>React JavaScript Sass</p>
                  <div className={styles.linksBlock}>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src='./src/assets/images/3Dsite.png' alt='' />
                <div className={styles.infoBlock}>
                  <h4>3D T-shirt</h4>
                  <p>
                    A website where you can customize a 3D t-shirt or ask AI to draw a logo or
                    texture
                  </p>
                  <p className={styles.technologyBlock}>React Three.js Tailwind</p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://t-shirt-customizer3d.netlify.app'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a
                      href='https://github.com/BogAlex4ndr/3Dwebsite'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src='./src/assets/images/photo-gallery-mk.png' alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Photo Gallery</h4>
                  <p>website when you can add, update and delete photo with admin panel.</p>
                  <p className={styles.technologyBlock}>
                    MongoDB Express React Node.js TypeScript Scss
                  </p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://photo-gallery-mk.netlify.app'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src='https://i.ibb.co/Qf0p7Gr/tetris.png' alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Tetris</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nulla alias
                    iusto eligendi tenetur ex ut aperiam cupiditate corporis eveniet.
                  </p>
                  <div className={styles.linksBlock}>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src='https://i.ibb.co/Qf0p7Gr/tetris.png' alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Tetris</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nulla alias
                    iusto eligendi tenetur ex ut aperiam cupiditate corporis eveniet.
                  </p>
                  <div className={styles.linksBlock}>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src='https://i.ibb.co/Qf0p7Gr/tetris.png' alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Tetris</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nulla alias
                    iusto eligendi tenetur ex ut aperiam cupiditate corporis eveniet.
                  </p>
                  <div className={styles.linksBlock}>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.buttonsBlock}>
              <button
                id='buttonBack'
                className={styles.buttonBack}
                disabled={false}
                onClick={handleCamera}>
                BACK
              </button>
              <button
                id='resume'
                className={styles.buttonBack}
                disabled={false}
                onClick={handleCamera}>
                NEXT
              </button>
            </div>
          </section>
        ) : (
          <div
            onClick={handleCamera}
            id='projects'
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
      </Html>
    </mesh>
  );
};

export default Projects;
