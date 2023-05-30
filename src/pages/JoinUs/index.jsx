import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'api/registerUser'
import styles from './JoinUs.module.scss'

import Button from 'components/Button';
import PasswordCheckForm from 'components/InputForm/PasswordCheckForm';
import EmailForm from 'components/InputForm/EmailForm';
import AddressForm from 'components/InputForm/AddressForm';
import AgreeContents from 'components/AgreeContents';
import RadioButton from 'components/InputForm/RadioButton';
import UserIdForm from 'components/InputForm/UserIdForm';
import UserNameForm from 'components/InputForm/UserNameForm';
import UserPhoneForm from 'components/InputForm/UserPhoneForm';
import UserSsnForm from 'components/InputForm/UserSsnForm';

const agreeData = [
  { id: "termsOfService",
    subject: "숖;ㅇ물 이용약관 동의",
    option: false,
    necessary: true,
    contents: "여러분을 환영합니다. 정석 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 정석 서비스의 이용과 관련하여 정석 서비스를 제공하는 정석 주식회사(이하 ‘정석’)와 이를 이용하는 정석 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 정석 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 정석 서비스를 이용하시거나 정석 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다."
  },
  { id: "privacyPolicy",
    subject: "개인정보 수집 및 이용 동의",
    option: false,
    necessary: true,
    contents: "개인정보보호법에 따라 정석에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.1. 수집하는 개인정보 이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다."
  },
  { id: "allowPromotions",
    subject: "프로모션 정보 수신 동의",
    option: true,
    necessary: false,
    contents: "정석에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(정석앱 알림 또는 문자), 이메일로 받아보실 수 있습니다. 일부 서비스(별도 회원 체계로 운영하거나 정석 가입 이후 추가 가입하여 이용하는 서비스 등)의 경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다." 
  }
]

const JoinUs = (props) => {
  const [formData, setFormData] = useState({
    member_id: '',
    member_name: '',
    password: '',
    passwordConfirm: '',
    ssn1: '',
    ssn2: '',
    email: '',
    phone: '',
    gender: 'w',
    zip_code: '',
    address1: '',
    address2: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // e.preventdefault()
    // registerUser(formData)  // 회원가입 API 요청 보내기
  }
  const onValid = (data) => {
    
    console.log(data);
    if (window.confirm('정말 등록하시겠습니까?')) {
    }
    return;
  };

  return(
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>회원가입</h2>
        <div className={styles.loginArea}>
          <form  method="post" onSubmit={handleSubmit} >
            <div className={styles.formBox}>
              {/* 아이디 */}
              <UserIdForm 
                name={'member_id'}
                guideTxt={'아이디'} 
                changeText={handleInputChange}
              />  
              {/* 비밀번호/비밀번호 체크 */}
              <PasswordCheckForm
                setFormData={setFormData}
                changeText={handleInputChange}
               /> 
              {/* 이름 */}
              <UserNameForm
                name={'member_name'}
                guideTxt={'이름'}
                changeText={handleInputChange}
               />
              {/* 주민번호 */}
              <UserSsnForm
                setFormData={setFormData}
                changeText={handleInputChange}
               />
              {/* 연락처 */}
              <UserPhoneForm
                name={'phone'}
                guideTxt={'01012345678'}
                changeText={handleInputChange}
               />  
              {/* 젠더 */}
              <div className={styles.gender}>
                <RadioButton 
                  name="gender" 
                  value="w" 
                  current={formData.gender}
                  setFormData={setFormData}
                > 여성
                </RadioButton>
                <RadioButton 
                name="gender" 
                value="m" 
                current={formData.gender}
                setFormData={setFormData}
                > 남성
                </RadioButton>
              </div>
              {/* 메일폼 */}
              <div className={styles.emailform}>
                <EmailForm
                  setFormData={setFormData}
                 />
              </div>
              {/* 주소인증 */}
              <AddressForm 
                setFormData={setFormData}
                address={formData.address1} 
                zipCode={formData.zip_code} 
               />
            </div>
            {/* 동의하기 */}
            <div className={styles.agreeWrap}>
              <h3>전체 동의</h3>
              <div className={styles.agreeContent}>
                {/* <AgreeContents agreeData={agreeData} onSubmitHandler={onSubmitHandler} /> */}
              </div>
            </div>

            <div className={styles.btnWrap}>
              <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} />
              <Button type={'submit'} text={'확인'}  size={'btnL'} state={'success'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;