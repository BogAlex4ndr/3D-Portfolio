import React from 'react';
import styles from './About.module.scss';

const TopBorder = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
      <g id='Layer_1'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0' className={styles.gradient1} />
            <stop offset='.5' className={styles.gradient2} />
            <stop offset='1' className={styles.gradient1} />
          </linearGradient>
        </defs>
        <path
          stroke="url('#grad1')"
          id='svg_42'
          d='m2.57492,108.47058l8.26415,-5.63194l0,-93.91259l86.20644,0l7.77802,-5.63194l-103.05882,0l0.81021,105.17647z'
          opacity='1'
          strokeWidth='15'
          fill='red'
        />
      </g>
    </svg>
  );
};

export default TopBorder;
