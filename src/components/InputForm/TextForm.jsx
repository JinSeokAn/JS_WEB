import React, { useState } from 'react';
import styles from './Form.module.scss'

const TextForm = ({formType, guideTxt, type = 'text'}) => {
  // 초기값 세팅
  const [text, setText] = useState('');

  const onChangeText = (e) => {
    let currentValue = e.target.value
    setText(currentValue)
  }
  return(
    <input 
      className={styles.textform} 
      id="input1" 
      type={type}
      value={text}
      placeholder={guideTxt} 
      onChange={onChangeText}
    /> 
  )
};

export default TextForm;