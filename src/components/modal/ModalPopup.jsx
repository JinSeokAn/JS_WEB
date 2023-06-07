import React from 'react';
import styles from './ModalPopup.module.scss'

const ModalPopup = ({setIsPopup, isPopup}) => {
  const onClose = e => {
    setIsPopup(false)
  }
  return (
   <>
     <div className={styles.modalPopup}>
      <br />
      <br />
      <br />
      모달팝업
      <br />
      <br />
      <br />
      <button type='button' className={styles.btnClose} onClick={onClose}>close</button>
    </div>
    <div className={styles.dimmed}></div>
   </>
  )
};

export default ModalPopup;