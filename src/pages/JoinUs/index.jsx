import React, { useState } from 'react';
import styles from './JoinUs.module.scss'
import InsertTextForm from 'components/InputForm/InsertTextForm';
import Button from 'components/Button';
import AddressPostcode from 'components/AddressPostcode';
import PasswordCheckForm from 'components/InputForm/PasswordCheckForm';
import EmailForm from 'components/InputForm/EmailForm';
import AddressForm from 'components/InputForm/AddressForm';
import AgreeContents from 'components/AgreeContents';
import RadioButton from 'components/InputForm/RadioButton';

const JoinUs = (props) => {
  const [isPopup, setIsPopup] = useState(false)
  const [ address, setAddress ] = useState('')
  const [ zoneCode, setZoneCode ] = useState('')
  const [ gender, setGender ] = useState('woman')

  const agreeData = [
    { id: "termsOfService",
      subject: "JUN 이용약관 동의",
      option: false,
      necessary: true,
      contents: "여러분을 환영합니다. JUN 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 JUN 서비스의 이용과 관련하여 JUN 서비스를 제공하는 JUN 주식회사(이하 ‘JUN’)와 이를 이용하는 JUN 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 JUN 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. JUN 서비스를 이용하시거나 JUN 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다."
    },
    { id: "privacyPolicy",
      subject: "개인정보 수집 및 이용 동의",
      option: false,
      necessary: true,
      contents: "개인정보보호법에 따라 JUN에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.1. 수집하는 개인정보 이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다."
    },
    { id: "allowPromotions",
      subject: "프로모션 정보 수신 동의",
      option: true,
      necessary: false,
      contents: "JUN에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(JUN앱 알림 또는 문자), 이메일로 받아보실 수 있습니다. 일부 서비스(별도 회원 체계로 운영하거나 JUN 가입 이후 추가 가입하여 이용하는 서비스 등)의 경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다." 
    }
  ]

  const onSubmitHandler = () => {
  }

  const onSelectGender = (e) => {
    const currentValue = e.target.value
    setGender(currentValue)
    console.log(gender);
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
                <RadioButton name="gender" value="woman" defaultChecked onSelectGender={onSelectGender}>
                  여성
                </RadioButton>
                <RadioButton name="gender" value="man" onSelectGender={onSelectGender}>
                  남성
                </RadioButton>
              </div>
              {/* select box */}
              <div className={styles.emailform}>
                <EmailForm />
              </div>
              {/* 주소인증 */}
              <div className={styles.address}>
                <AddressForm address={address} zoneCode={zoneCode} isPopup={isPopup} setIsPopup={setIsPopup} />
              </div>
            </div>
            {/* 동의하기 */}
            <div className={styles.agreeWrap}>
              <h3>전체 동의</h3>
              <div className={styles.agreeContent}>
                <AgreeContents agreeData={agreeData} />
              </div>
            </div>

            <div className={styles.btnWrap}>
              <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} />
              <Button type={'submit'} text={'확인'}  size={'btnL'} state={'success'} />
            </div>
            { isPopup && <AddressPostcode isPopup={isPopup} setIsPopup={setIsPopup} setZoneCode={setZoneCode} setAddress={setAddress} /> }
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinUs;