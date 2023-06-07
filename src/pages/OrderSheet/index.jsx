import React, { useState } from 'react';

import styles from './OrderSheet.module.scss'
import OrderInfoForm from 'components/order/OrderInfoForm';
import PageTitle from 'components/commonLayout/PageTitle';
import Button from 'components/Button';
import ModalPopup from 'components/modal/ModalPopup';

const OrderSheet = (props) => {
  const [isPopup, setIsPopup] = useState(false)
  const [formData, setFormData] = useState( {
    memberName : "test1",
    phone : "01076885412",
    email : "testmem@naver.com",
    address1 : "경남 거창군 위천면 강남불1길 18",
    address2 : "논현동 101호",
    zipCode : "12305",
  })

  const handleToggle = (e) => {
    const target = e.target
    target.parentNode.classList.toggle(styles.actived)
  }
  const openPopup = (e) => {
    setIsPopup(true)
  }
  const handlePay = (e) => {
    alert('결제완료 되었습니다.')
  }
  return(
    <div className={styles.orderSheetWrap}>
      <div className={styles.container}>
        <PageTitle title={'주문자 정보'} />
        <OrderInfoForm formData={formData} setFormData={setFormData} />
      
        <h3>주문상품 할인적용</h3>
  
        <dl className={styles.divList}>
          <dt>쿠폰사용</dt>
          <dd>
            <div className={styles.formWrap}>
              <input type="text" placeholder='쿠폰을 입력하세요' />
              <Button type={'submit'} text={'쿠폰선택'}  size={'btnM'} state={'success'} onClick={openPopup} />
            </div>
          </dd>
          <dt>제휴 포인트 사용</dt>
          <dd>
            <div className={styles.formWrap}>
              <input type="text" placeholder='0' />
              <Button type={'submit'} text={'사용'}  size={'btnM'} state={'success'} />
            </div>
          </dd>
        </dl>

        <table className={`${styles.uiTable} ${styles.tbStyle01}`}>
          <caption className='sr-only'>주문상품 할인적용 리스트</caption>
          <colgroup>
            <col style={{width: 20 + '%'}} />
            <col style={{width: 20 + '%'}} />
            <col style={{width: 20 + '%'}} />
            <col style={{width: 20 + '%'}} />
            <col style={{width: 20 + '%'}} />
          </colgroup>
          <thead>
            <tr>
            <th scope="col">상품금액</th>
            <th scope="col">배송비</th>
            <th scope="col">할인금액</th>
            <th scope="col">추가금액</th>
            <th scope="col">결제 예정금액</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td className='center'>
                <span className={styles.price}>
                  <strong>52,300</strong> 원
                </span>
              </td>
              <td className='center'>
                <span className={styles.delivery}>
                  <strong>무료</strong>
                </span>
              </td>
              <td className='center'>
                <span className={styles.discount}>
                  <strong>0</strong>원
                </span>
              </td>
              <td className='center'>
                <span className={styles.extra}>
                  <strong>0</strong>원
                </span>
              </td>
              <td className='center'>
                <span className={styles.total}>
                  <strong>52,300</strong>원
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>결제 수단</h3>
        <div className={styles.toggleWrap}>
          <div className={`${styles.toggleBody} ${styles.actived}`}>
            <div className={styles.toggleTitle} onClick={handleToggle}>
              일반 결제
            </div>
            <div className={styles.expandable}>
              <dl className={styles.divList}>
                <dt>카드구분</dt>
                <dd>
                  <div className={styles.formWrap}>
                    <input type="radio" id="credit1" name="drone" value="credit1" checked />
                    <label htmlFor="credit1">개인카드</label>
                    <input type="radio" id="credit1" name="drone" value="credit1" checked />
                    <label htmlFor="credit1">법인카드</label>
                  </div>
                </dd>

                <dt>카드선택</dt>
                <dd>
                  <select title="카드종류" id="card_li" name="" class="">
                    <option class="" value="">선택해주세요.</option>
                    <option value="C3">KB Pay(국민)</option>
                    <option value="C1">비씨</option>
                    <option value="C0">신한</option>
                    <option value="CH">현대</option>
                    <option value="C7">삼성</option>
                    <option value="C5">롯데</option>
                    <option value="CA">외환</option>
                    <option value="C4">NH</option>
                    <option value="CF">하나</option>
                    <option value="CB">우리</option>
                    <option value="C2">광주</option>
                    <option value="C8">수협</option>
                    <option value="C9">씨티</option>
                    <option value="CC">전북</option>
                    <option value="CD">제주</option>
                    <option value="CP">카카오뱅크</option>
                    <option value="CQ">케이뱅크</option>
                  </select>
                </dd>

                <dt>할부기간</dt>
                <dd>
                  <select title="할부" id="monthGeneralPay" name="" class="">
                    <option value="01">일시불</option>
                    <option value="02">2개월  무이자</option>
                    <option value="03">3개월  무이자</option>
                    <option value="04">4개월</option>
                    <option value="05">5개월</option>
                    <option value="06">6개월</option>
                    <option value="07">7개월</option>
                    <option value="08">8개월</option>
                    <option value="09">9개월</option>
                    <option value="10">10개월</option>
                    <option value="11">11개월</option>
                    <option value="12">12개월</option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
          <div className={styles.toggleBody}>
            <div className={styles.toggleTitle} onClick={handleToggle}>
              카드 결제
            </div>
            <div className={styles.expandable}>
              test<br />
              test<br />
              test<br />
              test<br />
            </div>
          </div>
        </div>

        <h3>주문자 동의</h3>
        <dl className={styles.divList}>
          <dt>개인정보 수집·이용</dt>
          <dd>
            <table className={`${styles.uiTable} ${styles.tbStyle01}`}>
              <thead>
                <tr>
                  <th>목적</th>
                  <th>항목</th>
                  <th>보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>주문자 정보 확인, 주문 내역 안내, 주문 내역 조회</td>
                  <td>주문자 정보(연락처, 이메일)</td>
                  <td rowSpan={2}>주문일로부터 90일까지 보유하며, 관계 법령에 따라 5년간 보관</td>
                </tr>
                <tr>
                  <td>상품 배송(구매/환불/취소/교환)을 위한 수취인 정보</td>
                  <td>수취인 정보(이름, 연락처1, 연락처2, 주소)</td>
                </tr>
              </tbody>
            </table>
          </dd>

          <dt>주문동의</dt>
          <dd>
            <div className={styles.formWrap}>
            <input type="checkbox" id="agree" name="drone" value="agree" />
            <label htmlFor="agree">상기 약관 및 개인정보 수집 · 이용에 대한 동의 내용과 결제정보를 확인하였으므로 구매진행에 동의합니다.</label>
            </div>
          </dd>
        </dl>

        <div className={styles.btnWrap}>
          <Button type={'submit'} text={'결제하기'}  size={'btnM'} state={'success'} onClick={handlePay} />
        </div>

        { isPopup && <ModalPopup isPopup={isPopup} setIsPopup={setIsPopup} /> }
      </div>
    </div>
  )
};

export default OrderSheet;