import React from 'react';
import styles from './Button.module.scss'

const Button = ({type, text, size, state, onClick }) => {
  return(
    <button className={`${styles[size]} ${styles[state]}`} type={type} onClick={onClick}>{text}</button>
    )
};

export default Button;