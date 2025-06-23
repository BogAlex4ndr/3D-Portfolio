import { Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import styles from './About.module.scss';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { SiGmail, SiTelegram, SiLinkedin, SiGithub } from 'react-icons/si';
import TopBorder from './TopBorder';
import audioClick from '../../assets/sounds/button-49.mp3';
const About = ({ targetId, handleCamera, ...props }) => {
  const buttons = useRef();
  const [currentShownPage, setCurrentShownPage] = useState('aboutBlock');
  const CategoryAudioClick = new Audio(audioClick);
  CategoryAudioClick.volume = 0.15;

  const Clicker = useRef();

  const snap = useSnapshot(state);

  const changePage = e => {
    CategoryAudioClick.play();

    switch (e.target.id) {
      case 'aboutBlock':
        setCurrentShownPage('aboutBlock');
        break;
      case 'skillsBlock':
        setCurrentShownPage('skillsBlock');
        break;
      case 'contactsBlock':
        setCurrentShownPage('contactsBlock');
        break;
      default:
        break;
    }
  };

  return (
    <group {...props} dispose={null}>
      <Html
        className={styles.monitorAboutWrapper}
        transform
        distanceFactor={10}
        scale={0.1}
        occlude={'blending'}
      >
        {targetId === 'activeAbout' ? (
          <section className="wrapperMonitor">
            <div className={styles.leftTop}>
              <TopBorder />
            </div>
            <div className={styles.rightTop}>
              <TopBorder />
            </div>
            {currentShownPage === 'aboutBlock' && (
              <div className={styles.gradientBorder}>
                <div className={styles.mainInfo}>
                  <h2 className={styles.title}>Hi, I'm Alex</h2>
                  <h4>Front-end developer</h4>
                  <p>
                    I’m a well-organized and dedicated individual with a strong focus on
                    problem-solving. Always eager to learn new technologies and grow as a developer,
                    I strive to build high-quality, user-friendly applications.
                    <br />
                    Feel free to reach out — I’m open to job opportunities where I can contribute,
                    develop my skills, and grow together with the company.
                  </p>
                </div>
              </div>
            )}
            {currentShownPage === 'skillsBlock' && (
              <div>
                <ul className={styles.skillsList}>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Redux Toolkit</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                  <li>Three.js</li>
                  <li>REST API</li>
                  <li>Socket.io</li>
                  <li>Firebase</li>
                  <li>AdMob</li>
                </ul>
              </div>
            )}
            {currentShownPage === 'contactsBlock' && (
              <div className={styles.contacts}>
                <ul>
                  <a target="_blank" href="mailto:bog.alex4ndr@gmail.com">
                    <SiGmail className={styles.contactIcon} /> Gmail
                  </a>
                  <a href="https://t.me/ALEX_B0G" target="_blank">
                    <SiTelegram className={styles.contactIcon} /> Telegram
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/alexandr-bohar-33045b182/">
                    <SiLinkedin className={styles.contactIcon} /> LinkedIn
                  </a>
                  <a href="https://github.com/BogAlex4ndr" target="_blank">
                    <SiGithub className={styles.contactIcon} /> Github
                  </a>
                </ul>
              </div>
            )}

            <div className={styles.buttonsBlock}>
              <button
                id="buttonBack"
                className={styles.buttonBack}
                disabled={false}
                onClick={handleCamera}
              >
                BACK
              </button>
              <button
                id="projects"
                className={styles.buttonBack}
                disabled={false}
                onClick={handleCamera}
              >
                NEXT
              </button>
            </div>
          </section>
        ) : (
          <div id="about" ref={Clicker} onClick={handleCamera} className={styles.PreviewAbout}>
            <div className={styles.previewImage} onClick={() => Clicker.current.click()}>
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
      {targetId === 'activeAbout' && (
        <Html
          position={[-1.266, 0.12, 0.007]}
          className={styles.monitorAboutNavigation}
          transform
          distanceFactor={10}
          scale={0.1}
          occlude={'blending'}
        >
          <div id="buttons" ref={buttons} className={styles.wrapperNavigation}>
            <button
              onClick={changePage}
              id="aboutBlock"
              className={styles.buttonAbout}
              aria-current={false}
            >
              ABOUT
            </button>
            <button
              onClick={changePage}
              id="skillsBlock"
              className={styles.buttonAbout}
              aria-current={false}
            >
              SKILLS
            </button>
            <button
              onClick={changePage}
              id="contactsBlock"
              className={styles.buttonAbout}
              aria-current={false}
            >
              CONTACTS
            </button>
          </div>
        </Html>
      )}
    </group>
  );
};

export default About;
