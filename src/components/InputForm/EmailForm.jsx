import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'

const EmailForm = ({setFormData, email = '@'}) => {

  // 초기값 세팅 - 이메일
  const propsEmail = email.split('@'); // props 받아서 메일 구분

  const [emailFront, setEmailFront] = useState(propsEmail[0] || '')
  const [emailBack, setEmailBack] = useState(propsEmail[1] || '')

  const [emailMessage, setEmailMessage] = useState(''); // 오류메세지 상태 저장
  const [isEmail, setIsEmail] = useState(true);   // 유효성 검사

  // 내용이 변경될 때
  const onChangeEmailFront = (e) => {
    const currentValue = e.target.value;
    setEmailFront(currentValue)
  }
  const onChangeEmailBack = (e) => {
    const currentValue = e.target.value;
    setEmailBack(currentValue)
  }

  useEffect(()=>{
    let total = emailFront + '@' + emailBack; // 풀메일 주소

    setFormData((prevData) => ({
      ...prevData, email: total
    }));
   
    const emailRegExp = /([a-zA-z0-9]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegExp.test(total)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false)
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true)
    }
  }, [emailFront, emailBack])

  return (
    <div className={styles.emailform}>
      <input
        className={styles.inputEmail} 
        name='email'
        type="text" 
        placeholder='이메일' 
        value={emailFront || ''}
        onChange={ e => {
          onChangeEmailFront(e)
        }}
      />
      <span className={styles.at}>@</span>
      <select 
        className={styles.selectEmail} 
        name="emailOption" id="" 
        value={emailBack}
        onChange={ e => {
          onChangeEmailBack(e)
        }}>
        <option value="">이메일 선택하세요</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.com">hanmail.com</option>
      </select>
      { emailFront.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isEmail ? styles.success : styles.error }` }>{emailMessage}</p>
      )}
    </div>
  )
};

export default EmailForm;