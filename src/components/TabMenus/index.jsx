import React from 'react';
import styles from './TabMenus.module.scss'
import { Link } from 'react-router-dom';

const TabMenus = (props) => {
  return (
    <div className={styles.tabMenus}>
      <h2 className={styles.title}>이유있는 <br />베스트 아이템</h2>
      <ul className={styles.tabs}>
        <li>
          <Link className={styles.on} to="">전체</Link>
        </li>
        <li>
          <Link to="">여성</Link>
        </li>
        <li>
          <Link to="">남성</Link>
        </li>
        <li>
          <Link to="">키즈</Link>
        </li>
      </ul>
    </div>
  )
};

export default TabMenus;