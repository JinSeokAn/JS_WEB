import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Banner.module.scss'
import "swiper/scss";
import "swiper/css/navigation";

const LinkBanner = ({ num, imgURL }) => {
  return  (
    <div className={styles.linkBanner}>
      <div className={styles.contextBox}>
        <p className={styles.cate}>SWIM</p>
        <p className={styles.title}>안입은듯 가벼운 초경량 <br />무게 답답함이 없는 완벽한 기능성</p>
        <p className={styles.desc}>멀티 커버업 원피스 집업</p>
      </div>
      <Link className={styles.slide}><img src={require(`asset/${imgURL}`)} alt={`배너이미지 ${num}`} /></Link>
    </div>
  )
};

export default LinkBanner;