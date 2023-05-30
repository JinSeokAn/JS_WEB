import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { login, logout, onUserStateChange } from 'api/firebase';
import { ContextStore } from 'context/store';
import { checkMemberInfo } from 'api/checkMemberInfo';

import CheckBox from 'components/InputForm/CheckBox';
import LoginInput from 'components/login/LoginInput';
import LoginButton from 'components/Button/LoginButton';

import styles from './Login.module.scss'

const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const test = {
    "memberId": "mis",
    "password": "23"
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onValid = (data) => {
    console.info(data);
  };
  
  const goForgotAccount = () => {
    navigate('/forgot-account');
  };

  const goJoinUs = () => {
    navigate('/join-us');
  };

  const handleLoginValue = () => {
    
  }
  const contextValue = useContext(ContextStore)
  useEffect(() => {
    checkMemberInfo(test)
    onUserStateChange( user => contextValue.user[1](user))
    if(contextValue.user[0]) {
  
      checkMemberInfo(test)
    }
  },[contextValue])

  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form onSubmit={handleSubmit(onValid)}>
            {/* 기본 로그인 */}
            <div className={styles.formBox}>
              <LoginInput 
                register={register('id', {
                  required: '아이디를 입력해주세요.',
                })}
                type="text"
                label="아이디"
                htmlFor="id"
                errorMessage={errors?.id?.message}
              />
              <LoginInput
                register={register('password', {
                  required: '비밀번호를 입려해주세요.',
                })}
                type="password"
                label="비밀번호"
                htmlFor="password"
                errorMessage={errors?.password?.message}
              />
              <div className={styles.savedInfo}>
                <CheckBox text={'아이디 저장'} />
              </div>
             <div className={styles.btnWrap}>
              <LoginButton size={'btnL'} state={'success'} title="로그인" isValid={isValid} onClick={handleLoginValue} />
             </div>
              <div className={styles.joinfind}>
                <Link onClick={goForgotAccount}>아이디/비밀번호 찾기</Link>
                <Link onClick={goJoinUs}>회원가입</Link>
              </div>
            </div>
            {/* SNS 인증로그인 */}
            <div className={styles.formBox}>
              <h3>SNS 로그인 인증</h3>
              <ul className={styles.socialLogin}>
                <li>
                  <Link to="">카카오 로그인</Link>
                </li>
                <li>
                  {!contextValue.user[0] && <Link to="" onClick={login}>구글 로그인</Link>}
                  { contextValue.user[0] && <Link to="" onClick={logout}>구글 로그아웃</Link> }
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;