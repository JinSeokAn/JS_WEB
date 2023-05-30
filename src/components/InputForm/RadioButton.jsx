import React, { useState } from 'react';
import styles from './Form.module.scss'

const RadioButton = ({ children, value, name, current, setFormData }) =>{
  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
      setFormData((prevData) => ({
      ...prevData,
      gender: selectedValue, 
    }));
  }
  return(
    <label className={styles.chkBoxWrap}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={current === value}
        onChange={handleRadioChange}
      />
      <span className={styles.text}>{children}</span>
    </label>
  )
};

export default RadioButton;