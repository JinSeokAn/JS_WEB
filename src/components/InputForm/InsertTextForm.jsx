import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'

const InsertTextForm = ({formType, guideTxt, type = 'text'}) => {

    const idRegExp = /^[a-zA-z0-9]{4,12}$/;


  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [birth, setBirth] = useState('');

  // 오류메세지 상태 저장
 const [idMessage, setIdMessage] = useState('');
 const [nameMessage, setNameMessage] = useState('');
 const [passwordMessage, setPasswordMessage] = useState('');
 const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
 const [emailMessage, setEmailMessage] = useState('');
 const [phoneMessage, setPhoneMessage] = useState('');
//  const [birthMessage, setBirthMessage] = useState('');

useEffect(() => {
  console.log(nameMessage);
})

  const onChangeUserID = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
    }
  };
  const onChangePw = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
    }

  };
  const onChangePwConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
    }
  };

  const onChangeUserName = (e) => {
    const currentName = e.target.value
    setName(currentName);
    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
    }
  };

  const onChangeUserPhone = (e) => {
    const currentPhone = e.target.value;
   setPhone(currentPhone);
   const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

   if (!phoneRegExp.test(currentPhone)) {
     setPhoneMessage("올바른 형식이 아닙니다!");
   } else {
     setPhoneMessage("사용 가능한 번호입니다:-)");
   }
  };

  const onChangeUserMail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
    }
  };

  const onChangeUserAddress = (e) => {
    
  };

  return(
   <>
    {/* userId */}
    { formType === 'userId' && 
      <input 
        className={styles.textform} 
        id="input1" 
        type={type} 
        placeholder={guideTxt} 
        onChange={onChangeUserID}
      /> 
    }
    {/* password */}
    { formType === 'pw' && 
      <input 
        className={styles.textform} 
        id="input1" 
        type={type} 
        placeholder={guideTxt}
        pattern=".{8,}"
        onChange={onChangePw}
      /> 
     }
      {/* pwConfirm */}
      { formType === 'pwConfirm' && 
        <input 
          className={styles.textform} 
          id="input1" 
          type={type} 
          placeholder={guideTxt}
          pattern=".{8,}"
          onChange={onChangePwConfirm}
        /> 
      }
       {/* userName */}
       { formType === 'userName' && 
        <input 
          className={styles.textform} 
          id="input1" 
          type={type} 
          placeholder={guideTxt}
          onChange={onChangeUserName}
        /> 
      }
       {/* userPhone */}
       { formType === 'userPhone' && 
        <input 
          className={styles.textform} 
          id="input1" 
          type={type} 
          placeholder={guideTxt}
          onChange={onChangeUserPhone}
        /> 
      }
        {/* userMail */}
        { formType === 'userMail' && 
        <input 
          className={styles.textform} 
          id="input1" 
          type={type} 
          placeholder={guideTxt}
          onChange={onChangeUserMail}
        /> 
      }
        {/* userAddress */}
        { formType === 'userAddress' && 
        <input 
          className={styles.textform} 
          id="input1" 
          type={type} 
          placeholder={guideTxt}
          onChange={onChangeUserAddress}
        /> 
      }
   </>
  
  )
};

export default InsertTextForm;