import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserIdForm = ({ name, guideTxt, changeText }) => {
  const [userId, setUserId] = useState(''); // 초기값 세팅 - 아이디
  const [idMessage, setIdMessage] = useState(''); // 오류메세지 상태 저장
  const [isUserId, setIsUserId] = useState(true); // 유효성 검사
  
  const handleValid = (e) => {
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;    //공백없는 숫자와 영문자 대소문자 4-12글자

    const currentId = e.target.value;
    setUserId(currentId);

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsUserId(false)
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsUserId(true)
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
          handleValid(e)
          changeText(e)
        }}
      /> 
      { userId.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isUserId ? styles.success : styles.error }` }>{idMessage}</p>
      )}
    </>
  )
};

export default UserIdForm;