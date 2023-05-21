import React from 'react';
import styles from './Avatar.module.scss'

const Avatar = ({user: {photoURL, displayName}}) => {
  return(
      <div className={styles.avatar}>
        <span className={styles.thumb}>
          <img src={photoURL} alt={`${displayName}의 프로필`} />
        </span>
        <p className={styles.name}>{displayName}</p>
      </div>
  )
};

export default Avatar;