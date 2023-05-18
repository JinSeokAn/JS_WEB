import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'

const EmailForm = (props) => {
  // 초기값 세팅 - 이메일
  const [email, setEmail] = useState('');
  const [selectValue, setSelectValue ] = useState('')
  const [emailAddress, setEmailAddress] = useState('');
 
  const [emailMessage, setEmailMessage] = useState(''); // 오류메세지 상태 저장
  const [isEmail, setIsEmail] = useState(true);   // 유효성 검사

  // 내용이 변경될 때
  const onChangeEmailAddress = (e) => {
    const currentEmail = e.target.value;
    setSelectValue(currentEmail)
  }
  const onChangeUserMail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail)
  };

  useEffect(()=>{
    const total = `${email}@${selectValue}`;
    setEmailAddress(total)
    const emailRegExp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegExp.test(total)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false)
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true)
    }
  }, [email, selectValue])

  return (
    <>
      <input type="text" placeholder='이메일' onChange={onChangeUserMail} />
      <span className={styles.at}>@</span>
      <select name="" id="" onChange={onChangeEmailAddress}>
        <option value="">이메일 선택하세요</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.com">hanmail.com</option>
        <option value="userInsert">직접입력</option>
      </select>
      { email.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isEmail ? styles.success : styles.error }` }>{emailMessage}</p>
      )}
    </>
  )
};

export default EmailForm;