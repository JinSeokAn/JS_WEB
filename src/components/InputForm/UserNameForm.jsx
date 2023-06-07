import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'

const UserNameForm = ({ name, guideTxt, value, setFormData }) => {
  // url
  const orderPayURL = window.location.pathname === '/order/:id'

  // 초기값 세팅 - 네임
  const [userName, setUserName] = useState('');
  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = useState('');
  // 유효성 검사
  const [isUserName, setIsUserName] = useState(true)

  useEffect(() => {
    if(!orderPayURL){
      setFormData((prevData) => ({
        ...prevData,
        [name]: userName
      }));
    }
  
  }, [setFormData])

  const onChangeUserName = (e) => {
    const currentName = e.target.value
    const { name, value } = e.target;
    setUserName(value)
    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsUserName(false)
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsUserName(true)
    }
  };


  return(
    <>
       <input
          className={styles.textform} 
          id={name} 
          name={name}
          placeholder={guideTxt}
          value={value}
          onChange={ e => {
            onChangeUserName(e)
          }}
        /> 
        { !orderPayURL && userName.length > 0 && (
          <p className={ `${styles.warningMsg} ${ isUserName ? styles.success : styles.error }` }>{nameMessage}</p>
        )}
    </>
  )
};

export default UserNameForm;