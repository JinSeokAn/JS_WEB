import React from 'react';
import styles from './Footer.module.scss'
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.left}>
          <Logo color={'#888'} />
          <ul className={styles.ftMenu}>
            <li><Link to="#">브랜드</Link></li>
            <li><Link to="#">회사소개</Link></li>
            <li><Link to="#">이용약관</Link></li>
            <li><Link to="#">개인정보처리방침</Link></li>
            <li><Link to="#">고객센터</Link></li>
          </ul>
          <div className={styles.info}>
            <p>
              <b>사업자명 : </b>(주)브랜드엑스코퍼레이션 <b>대표자명 : </b>이수연,강민준 <b>팩스 : </b>02-2179-9410
            </p>
            <p>
              <b>주소 : </b>서울시 성동구 뚝섬로1길 63 영창디지탈타워 B2F,4F,6F,12F,16F <b>대표전화 : </b>1661-2811
            </p>
            <p className={styles.copy}>Copyright 2015 Xexymix All Rights Reserved.</p>
          </div>
        </section>
        <section className={styles.right}>
          <div className={styles.cs}>
            <a className={styles.tel} href="tel:16612811">1661-2811</a>
            <dl className={styles.openTime}>
              <dt>평일</dt>
              <dd>10:00 - 17:00</dd>
              <dt>점심</dt>
              <dd>12:30 - 14:00</dd>
              <dt>휴일</dt>
              <dd>토/일/공휴일</dd>
            </dl>
          </div>
          <div className={styles.bankInfo}>
            <p className={styles.title}>Bank Info</p>
            <select name="" id="">
              <option value="우리은행 1005-123-456789">우리은행 1005-123-456789</option>
              <option value="국민은행 1005-123-456789">국민은행 1005-123-456789</option>
              <option value="농협 1005-123-456789">농협 1005-123-456789</option>
            </select>
            <dl className={styles.bank}>
              <dt>(주)브랜드엑스코퍼레이션</dt>
              <dd>&nbsp;</dd>
            </dl>
            <p className={styles.notice}>
              입금자명 불일치시 자동연동이 되지않습니다.<br />
              고객센터 또는 Q&A 문의주세요.
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
};

export default Footer;