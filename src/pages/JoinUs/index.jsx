import React, { useState } from 'react';
import styles from './JoinUs.module.scss'
import InsertTextForm from 'components/InputForm/InsertTextForm';
import Button from 'components/Button';
import CheckBox from 'components/InputForm/CheckBox';
import AddressPostcode from 'components/AddressPostcode';
import PasswordCheckForm from 'components/InputForm/PasswordCheckForm';

const JoinUs = (props) => {
  const [isPopup, setIsPopup] = useState(false)

  const handleOpenPopup = (e) => {
    setIsPopup(!isPopup)
  }
  const onSubmitHandler = () => {
  }

  return(
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>회원가입</h2>
        <div className={styles.loginArea}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.formBox}>
              <InsertTextForm formType="userId" guideTxt={'아이디'} type={'text'} />
              <PasswordCheckForm />
              <InsertTextForm formType="userName" guideTxt={'이름'} type={'text'} />
              <InsertTextForm formType="userPhone" guideTxt={'01012345678'} type={'text'} />
              {/* 젠더 */}
              <div className={styles.gender}>
                <CheckBox val={'check1'} text={'여자'} />
                <CheckBox val={'check2'} text={'남자'} />
              </div>
              {/* select box */}
              <div className={styles.emailform}>
                <InsertTextForm formType="userMail" guideTxt={'이메일'} type={'text'} />
                <span className={styles.at}>@</span>
                <select className={styles.emailLists} name="" id="">
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmail.com">hanmail.com</option>
                  <option value="직접입력">직접입력</option>
                </select>
              </div>
              {/* 주소인증 */}
              <div className={styles.address}>
                <InsertTextForm formType="userAddress" guideTxt={'주소'} type={'text'} />
                <Button type={'button'} text={'주소'} size={'btnM'} state={'white'} onClick={handleOpenPopup} />
              </div>
            </div>
            {/* 동의하기 */}
            <div className={styles.agreeWrap}>
              <h3>전체 동의</h3>
              <div className={styles.agreeContent}>
                동의하기 체크
              </div>
            </div>

            <div className={styles.btnWrap}>
              <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} />
              <Button type={'submit'} text={'확인'}  size={'btnL'} state={'success'} />
            </div>
            { isPopup && <AddressPostcode isPopup={isPopup} setIsPopup={setIsPopup} /> }
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;