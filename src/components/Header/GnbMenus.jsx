import React from 'react';
import { Link } from 'react-router-dom/dist';

import styles from './Header.module.scss'
import SubMenus from './SubMenus';

const GnbMenus = ({category, link, subMenu}) => {
  return (
    <li>
      <Link className={styles.gnb} to={link}>
        {category}
        <ul className={styles.lnb}>
          {
            subMenu.map(({id, menu}) => (
              <SubMenus key={id} menu={menu}  />
            ))
          }
        </ul>
      </Link>
    </li>
  )
};

export default GnbMenus;