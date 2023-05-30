import React, { useState } from 'react';
import styles from './Form.module.scss'

const PasswordCheckForm = ({setFormData}) => {
  // 초기값 세팅 - 비밀번호, 비밀번호확인, 
  const [passwordForm, setPasswordForm] = useState({
    password: '',
    passwordConfirm: '',
  });
  const { password, passwordConfirm } = passwordForm;
  //오류메세지 상태저장
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  // 유효성 검사
  const [isPassword, setIsPassword] = useState(true)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

  const onChangePw = (e) => {
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const target = e.target
    const currentValue = target.value;
    setPasswordForm((prevData) => ({
      ...prevData,
      [target.name]: currentValue
    }));
    if (!passwordRegExp.test(currentValue)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false)
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true)
    }

    setFormData((prevData) => ({
      ...prevData,
      password
    }));
  }

  const onChangePwConfirm = (e) => {
    const target = e.target
    const currentValue = target.value;
    setPasswordForm((prevData) => ({
      ...prevData,
      [target.name]: currentValue
    }));

    if ( currentValue !== password) {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false)
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true)
    }
    setFormData((prevData) => ({
      ...prevData,
      passwordConfirm
    }));
  }

  return (
    <>
      {/* password */}
      <input 
        className={styles.textform} 
        id='password'
        name='password'
        type='password' 
        placeholder={'비밀번호'}
        onChange={ e => {
          onChangePw(e)
        }}
      /> 
      { password.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isPassword ? styles.success : styles.error }` }>{passwordMessage}</p>
      )}
      {/* password confirm */}
      <input
        className={styles.textform} 
        id="passwordConfirm" 
        name='passwordConfirm'
        type='password' 
        placeholder={'비밀번호 확인'}
        onChange={onChangePwConfirm}
      /> 
      { passwordConfirm.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isPasswordConfirm ? styles.success : styles.error }` }>{passwordConfirmMessage}</p>
      )}
    </>
  )
};

export default PasswordCheckForm;