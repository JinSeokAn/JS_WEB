import React from 'react';
import styles from './Form.module.scss'

const CheckBox = ({text, val}) => {
  return(
    <label className={styles.chkBox} htmlFor={val}>
        <input id={val} type="checkbox" /><span>{text}</span>
    </label>
  )
}

export default CheckBox;