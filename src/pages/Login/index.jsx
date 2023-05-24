import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { login, logout, onUserStateChange } from 'api/firebase';
import { ContextStore } from 'context/store';
import { uploadLoginInfo } from 'api/uploadLogInfo';

import CheckBox from 'components/InputForm/CheckBox';
import LoginInput from 'components/login/LoginInput';
import LoginButton from 'components/Button/LoginButton';

import styles from './Login.module.scss'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    register,
    // handleSubmit,
  } = useForm();

  const contextValue = useContext(ContextStore)

  useEffect(() => {
    onUserStateChange( user => contextValue.user[1](user))
    // setTestUser([
    //   ...testUser, {
    //     member_id : username,
    //     password : password,
    //     admin_yn : false,
    //   },
    // ])
    // uploadLoginInfo(User)
    if(contextValue.user[0]) {
      const { email , uid } = contextValue.user[0]
      const loginData = {
        username: email,
        password: uid
      };
      
      uploadLoginInfo(loginData)
    }
    
  },[contextValue])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      username: username,
      password: password
    };
    console.log(loginData);
    uploadLoginInfo(loginData)
  };

  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form method="post" onSubmit={handleSubmit}>
            {/* 기본 로그인 */}
            <div className={styles.formBox}>
              <LoginInput 
                register={register('id', {
                  required: '아이디를 입력해주세요.',
                })}
                type="text"
                label="아이디"
                htmlFor="id"
                // errorMessage={errors?.id?.message}
                onChange={handleUsernameChange}
              />
              <LoginInput
                register={register('password', {
                  required: '비밀번호를 입려해주세요.',
                })}
                type="password"
                label="비밀번호"
                htmlFor="password"
                // errorMessage={errors?.password?.message}
                onChange={handlePasswordChange}
              />
              <div className={styles.savedInfo}>
                <CheckBox text={'아이디 저장'} />
              </div>
             <div className={styles.btnWrap}>
              <LoginButton size={'btnL'} state={'success'} title="로그인" onSubmit={handleSubmit} />
             </div>
              <div className={styles.joinfind}>
                <Link to="">아이디/비밀번호 찾기</Link>
                <Link to="/join-us">회원가입</Link>
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