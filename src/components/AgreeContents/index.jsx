import React from 'react'
import styles from './AgreeContents.module.scss'

const AgreeContents = ({agreeData}) => {
  return (
    <div className={styles.contents}>
      <div className={styles.termsCheckAll}>
        <input type="checkbox" name="checkAll" id="checkAll" />
        <label for="checkAll">개인정보 수집 및 이용, 프로모션 정보 수신(선택)에 모두 동의합니다.</label>
      </div>
      <ul className={styles.termsList}>
        {
          agreeData.map( ({id, subject, contents, option, necessary}) => (
            <li key={id} className={styles.termsBox}>
              <div className={styles.inputCheck}>
                <input type="checkbox" name="agreement" id={id} value={id} required />
                <label for={id} className={styles.required}>
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