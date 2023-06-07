import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserPhoneForm = ({ name, guideTxt }) => {
  // 초기값 세팅 - 전화번호
  const [userPhone, setUserPhone] = useState('');
  // 오류메세지 상태 저장
  const [phoneMessage, setPhoneMessage] = useState('');
  // 유효성 검사
  const [isUserPhone, setIsUserPhone] = useState(true)

  const onChangeUserPhone = (e) => {
    const currentPhone = e.target.value;
    setUserPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsUserPhone(false)
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsUserPhone(true)
    }
  };
  
  return(
    <>
      <input 
        className={styles.textform} 
        id={name}
        name={name}
        type='text'
        placeholder={guideTxt}
        onChange={ e => {
          onChangeUserPhone(e)
        }}
      /> 
      { userPhone.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isUserPhone ? styles.success : styles.error }` }>{phoneMessage}</p>
      )}
    </>
  )
};

export default UserPhoneForm;