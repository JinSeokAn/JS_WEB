import React from 'react';
import styles from './Login.module.scss'
// import InsertTextForm from 'components/InputForm/InsertTextForm';
import { Link } from 'react-router-dom';
import InsertTextForm from 'components/InputForm/InsertTextForm';
import CheckBox from 'components/InputForm/CheckBox';
import Button from 'components/Button';

const Login = (props) => {
  return(
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>로그인</h2>
        <div className={styles.loginArea}>
          <form>
            {/* 기본 로그인 */}
            <div className={styles.formBox}>
              <InsertTextForm type={'text'} guideTxt={'아이디'} />
              <InsertTextForm type={'password'} guideTxt={'패스워드'} />
              <div className={styles.savedInfo}>
                <CheckBox text={'아이디 저장'} />
              </div>
             <div className={styles.btnWrap}>
                <Button type={'button'} text={'로그인'} size={'btnL'} state={'success'} />
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
                  <Link to="">카카오 로그인</Link>
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