import React from 'react';
import styles from './Form.module.scss'

const RadioButton = ({ children, value, name, defaultChecked, disabled, onSelectGender }) =>{
  return(
    <label className={styles.chkBoxWrap}>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onSelectGender}
      />
      <span className={styles.text}>{children}</span>
    </label>
  )
};

export default RadioButton;