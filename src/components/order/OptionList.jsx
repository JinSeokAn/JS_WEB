import React from 'react';
import styles from './TableFormLists.module.scss'

const OptionList = ({item, idx}) => {
  idx = idx + 1
  const optionTotalPrice = item.price * item.count   // 옵션 종류 별 합계
  return (
    <p>
      {idx}_{item.name} 
      <em className={styles.extraCount}>{item.count}</em>개
      <em className={styles.extraCharge}> ({optionTotalPrice}원)</em>
    </p>
  )
};

export default OptionList;