import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'

const EmailForm = ({setFormData}) => {
  // 초기값 세팅 - 이메일
  const [emailForm, setEmailForm] = useState({
    email: '',
    emailOption: '',
    emailTotal: '',
  });
  const {email, emailOption, emailTotal} = emailForm
  const [emailMessage, setEmailMessage] = useState(''); // 오류메세지 상태 저장
  const [isEmail, setIsEmail] = useState(true);   // 유효성 검사

  // 내용이 변경될 때
  const onChangeUserMail = (e) => updateFormData(e)
  const onChangOption = (e) => updateFormData(e)

  const updateFormData = (e) => {
    const target = e.target
    const currentValue = target.value;
    setEmailForm((prevData) => ({
      ...prevData,
      [target.name]: currentValue
    }));
  }
 
  useEffect(()=>{
    const total = `${email}@${emailOption}`;
    setEmailForm((prevData) => ({
      ...prevData,
      emailTotal: total
    }))

    const emailRegExp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegExp.test(emailTotal)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false)
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true)
    }
    setFormData((prevData) => ({
      ...prevData,
      email: total, 
    }));

  }, [email, emailOption, emailTotal])

  return (
    <>
      <input
        className={styles.inputEmail} 
        name='email'
        type="text" 
        placeholder='이메일' 
        onChange={ e => {
          onChangeUserMail(e)
        }}
      />
      <span className={styles.at}>@</span>
      <select 
        className={styles.selectEmail} 
        name="emailOption" id="" 
        onChange={ e => {
          onChangOption(e)
        }}>
        <option value="">이메일 선택하세요</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.com">hanmail.com</option>
      </select>
      { email.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isEmail ? styles.success : styles.error }` }>{emailMessage}</p>
      )}
    </>
  )
};

export default EmailForm;