import { Html } from '@react-three/drei';
import React, { useRef } from 'react';
import styles from './Projects.module.scss';
import tShirtImg from '../../assets/images/3Dsite.png';
import circle from '../../assets/images/circle.png';
import circle2 from '../../assets/images/circle2.png';
import circle3 from '../../assets/images/circle3.png';
import pizzaImg from '../../assets/images/pizza.png';
import chessImg from '../../assets/images/chess.png';
import tetrisImg from '../../assets/images/tetris.png';
import galleryImg from '../../assets/images/photo-gallery-mk.png';

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
            <img className={styles.circle} src={circle} alt='' />
            <img className={styles.circle2} src={circle2} alt='' />
            <img className={styles.circle3} src={circle3} alt='' />
            <div className={styles.projectsItems}>
              <div className={styles.projectCard}>
                <img src='https://i.ibb.co/HDSsm1K/guitar-Shop.png' alt='' />
                <div className={styles.infoBlock}>
                  <h4>Guitar shop</h4>
                  <p>A simple adaptive landing page for a guitar store using BEM methodology</p>
                  <p className={styles.technologyBlock}>HTML CSS</p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://bogalex4ndr.github.io/Guitar-shop-html-css/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a
                      href='https://github.com/BogAlex4ndr/Guitar-shop-html-css'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src={tShirtImg} alt='' />
                <div className={styles.infoBlock}>
                  <h4>T-shirt customizer</h4>
                  <p>
                    A website where you can customize a 3D t-shirt or ask AI to draw a logo or
                    texture
                  </p>
                  <p className={styles.technologyBlock}>
                    React JavaScript Three.js Tailwind Express
                  </p>
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
                <img src={galleryImg} alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Photo gallery</h4>
                  <p>
                    A website where you can add, update and delete photo with simple admin panel
                  </p>
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
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src={tetrisImg} alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Tetris</h4>
                  <p>
                    Simple tetris game on HTML, Vanilla JS and CSS where you can chose game
                    difficulty and change background
                  </p>
                  <p className={styles.technologyBlock}>HTML CSS JavaScript</p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://bogalex4ndr.github.io/Tetris/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a
                      href='https://github.com/BogAlex4ndr/Tetris'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src={pizzaImg} alt='tetris' />
                <div className={styles.infoBlock}>
                  <h4>Pizza</h4>
                  <p>pizzeria website with sorting, searching and shopping cart</p>
                  <p className={styles.technologyBlock}>React Redux JavaScript Scss Rest API</p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://pizza-ab.netlify.app'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a
                      href='https://github.com/BogAlex4ndr/Pizza'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <img src={chessImg} alt='chess' />
                <div className={styles.infoBlock}>
                  <h4>Chess</h4>
                  <p>Chess game using class-based coding style</p>
                  <p className={styles.technologyBlock}>React TypeScript Scss</p>
                  <div className={styles.linksBlock}>
                    <a
                      href='https://chess-ab.netlify.app'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Demo
                    </a>
                    <a
                      href='https://github.com/BogAlex4ndr/Chess'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Github
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
