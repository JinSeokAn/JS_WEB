import React from 'react';
import styles from './Hambuger.module.scss'

const HambugerMenu = ({openMoMenu}) => {
  return (
    <button type='button' className={`${styles.hambuger}`} onClick={openMoMenu}>
      <span className={styles.hambugerBar}></span>
    </button>
  )
};

export default HambugerMenu;