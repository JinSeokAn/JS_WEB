import React from 'react';
import styles from './ModalPopup.module.scss'

const ModalPopup = (props) => {
  const { open, close, children } = props
  // const onClose = e => {
  //   setIsPopup(false)
  // }
  return (
   <>
   { open && <>
    <div className={styles.modalPopup}>
      <br />
      <br />
      {children.title}
      <br />
      <br />
      <button type='button' className={styles.btnClose} onClick={close}>close</button>
    </div>
    <div className={styles.dimmed}></div>
   </> }
    
   </>
  )
};

export default ModalPopup;