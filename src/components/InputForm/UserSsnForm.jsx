import React, { useState } from 'react';
import styles from './Form.module.scss'

const UserSsnForm = ({setFormData}) => {
    // 초기값 세팅 - 비밀번호, 비밀번호확인, 
    const [ ssnData, setSsnData] = useState({
      ssn : '',
      ssn1: '',
      ssn2: '',
    });
    const { ssn, ssn1, ssn2 } = ssnData;
    //오류메세지 상태저장
    const [ssnMessage, setSsnMessage] = useState('');
    // 유효성 검사
    const [isSsn, setIsSsn] = useState(true)
  
    const onChangSsnNumber = (e) => {
      const numberRegExp = /^[0-9]*$/;
      const target = e.target
      const currentValue = target.value;
 
      if( target.name ) {
        setSsnData((prevData) => ({
          ...prevData, [target.name]: currentValue, ssn : fullSsn
        }));
        const fullSsn = ssnData.ssn1 + ssnData.ssn2
        if (!numberRegExp.test(fullSsn)) {
          setSsnMessage("숫자만 입력해주세요");
          setIsSsn(false)
        } else {
          setSsnMessage("정확하게 입력되었습니다.");
          setIsSsn(true)
        }

        setFormData((prevData) => ({
          ...prevData,
          [target.name]: currentValue,
        }));
      }
    }

  return (
    <>
    <div className={styles.ssnArea}>
      <input 
        className={styles.textform} 
        id='ssn1'
        name='ssn1'
        type='text' 
        placeholder={'주민번호 앞자리'}
        maxLength={6}
        onChange={ e => onChangSsnNumber(e)}
      /> - 
      <input
        className={styles.textform} 
        id="ssn2" 
        name='ssn2'
        type='password' 
        placeholder={'주민번호 뒷자리'}
        maxLength={7}
        onChange={ e => onChangSsnNumber(e)}
      /> 
    </div>
    { ssn.length > 0 && (
      <p className={ `${styles.warningMsg} ${ isSsn ? styles.success : styles.error }` }>{ssnMessage}</p>
    )}
    </>
  )
};

export default UserSsnForm;