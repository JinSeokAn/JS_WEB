import React, { useState } from 'react'
import styles from './AgreeContents.module.scss'

const AgreeContents = ({agreeData, onSubmitHandler}) => {
  const [ checkAll, setCheckAll ] = useState(false); // 전체 동의확인 여부
  const [ isChecked, setIsChecked ] = useState({ 
    termsOfService: false,
    privacyPolicy: false,
    allowPromotions: false
  })

  const handleCheckAllChange = (e) => {
    const { checked } = e.target;
    setIsChecked((prev) => ({
      termsOfService: checked,
      privacyPolicy: checked,
      allowPromotions: checked
    }));
    agreeNessesaryChecked()
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setIsChecked((prev) => (
      { ...prev, [name]: checked }
    ));
  };
  
  function agreeNessesaryChecked() {
    const { termsOfService, privacyPolicy } = isChecked;
    console.log(termsOfService);
    if( termsOfService && privacyPolicy ) {
    } else {
      alert('필수 동의하기를 체크해주세요')
    }
   
};

  const isAllChecked = Object.values(isChecked).every((value) => value);

  return (
    <div className={styles.contents}>
      <div className={styles.termsCheckAll}>
        <input 
          type="checkbox" 
          name="checkAll" 
          id="checkAll" 
          checked={isAllChecked}
          onChange={ handleCheckAllChange }
         />
        <label htmlFor="checkAll">개인정보 수집 및 이용, 프로모션 정보 수신(선택)에 모두 동의합니다.</label>
      </div>
      <ul className={styles.termsList}>
        {
          agreeData.map( ({id, subject, contents, option, necessary}) => (
            <li key={id} className={styles.termsBox}>
              <div className={styles.inputCheck}>
                <input type="checkbox" name={id} id={id} value={id} checked={isChecked[id]} onChange={handleChecked} required />
                <label htmlFor={id} className={styles.required}>
                  <p className={styles.termsSubject}>{subject}</p>
                  { option && <span className={ `${styles.option} ${styles.extra}` }>(선택)</span> }
                  { necessary && <span className={ `${styles.necessary} ${styles.extra}` }>(필수)</span> }
                </label>
                
              </div>
              <div className={styles.termsContent}>
                {contents}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default AgreeContents;