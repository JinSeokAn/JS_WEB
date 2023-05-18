import React, { useState } from 'react';
import styles from './Form.module.scss'

const PasswordCheckForm = () => {
  // 초기값 세팅 - 비밀번호, 비밀번호확인, 
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //오류메세지 상태저장
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  // 유효성 검사
  const [isPassword, setIsPassword] = useState(true)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

  const onChangePw = (e) => {
    const currentPassword = e.target.value;
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    setPassword(currentPassword);

    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false)
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true)
    }
  }

  const onChangePwConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm)
    if ( currentPasswordConfirm !== password) {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false)
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true)
    }
  }

  return (
    <>
      {/* password */}
      <input 
        className={styles.textform} 
        id="input1" 
        type='password' 
        placeholder={'비밀번호'}
        onChange={onChangePw}
      /> 
      { password.length > 0 && (
        <p className={ `${styles.warningMsg} ${ isPassword ? styles.success : styles.error }` }>{passwordMessage}</p>
      )}
      {/* password confirm */}
      <input 
        className={styles.textform} 
        id="input1" 
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