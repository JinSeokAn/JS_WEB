import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PrdLists.module.scss'

const PrdLists = ({prdData, images}) => {
  console.log(prdData);
  return (
    <div className={styles.prdWrap}>
      <ul className={styles.lists}>
      { prdData.map(({content, limitedTimeOffer, costPrice, image, kind, no, productName, profitPrice, salesPrice})=>(
         <li key={no}>
          <Link to="">
            <img src={image} alt={`배너이미지 test`} />
          </Link>
          <div className={styles.details}>
            <p className={styles.title}>{productName}</p>
            <p className={styles.price}>{profitPrice} <span className={styles.before}>{salesPrice}</span></p>
            <div className={styles.desc}>
              <span className={styles.event}>{limitedTimeOffer}</span>
              <p className={styles.text}>{content}</p>
            </div>
          </div>
        </li>
        ))
      }
      </ul>
    </div>
  )
};

export default PrdLists;