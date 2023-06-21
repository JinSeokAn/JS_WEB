import React, { useState } from 'react';

import styles from './OrderTotalFoot.module.scss'

const OrderTotalFoot = ({totalPrice}) => {
  const totalWithDelivery =  totalPrice > 50000 ? totalPrice : totalPrice + 3000
  
  return(
    <tr className={styles.total}>
      <td colSpan={4}><span>합계</span></td>
      <td colSpan={3} className={styles.totalPrice}><span> {totalPrice}원 + {totalPrice > 50000 ? '무료배송' : '3000원(배송비)'} = {totalWithDelivery}원</span></td>
    </tr>
  )
};

export default OrderTotalFoot;