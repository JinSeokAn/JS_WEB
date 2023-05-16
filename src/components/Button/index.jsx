import React from 'react';
import styles from './Button.module.scss'

const Button = ({type, text, size, state }) => {
  return(
    <button className={`${styles[size]} ${styles[state]}`} type={type}>{text}</button>
    )
};

export default Button;