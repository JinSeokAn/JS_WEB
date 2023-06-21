import React, { useState } from 'react';

import styles from './Order.module.scss'

import PageTitle from 'components/commonLayout/PageTitle';
import Button from 'components/Button';
import TableFormLists from 'components/order/TableFormLists';
import OrderInfoForm from 'components/order/OrderInfoForm';
import ModalPopup from 'components/modal/ModalPopup';
import Logo from 'components/Logo';
import OrderTotalFoot from 'components/order/OrderTotalFoot';
import SelectOptions from 'components/SelectOptions';

const OderForm = (props) => {
  const [formData, setFormData] = useState({
    memberName : "test1",
    phone : "01076885412",
    email : "testmem@naver.com",
    address1 : "경남 거창군 위천면 강남불1길 18",
    address2 : "논현동 101호",
    zipCode : "12305",
  })
  const [data, setData] = useState([
    {
    id : "325445747",
    prdName : "이스페더 11111111",
    options: [
      {
      name: "블랙 M",
      count : 4,
      price: 3000
    },
    {
      name: "블루 S",
      count : 2,
      price: 3000
    },
  ],
    count: 1,
    beforePrice : "85400",
    price : "51200",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  },
  {
    id : "4634574",
    prdName : "test 2222222222 1+1",
    options: [
      {
        name: "test M",
        count : 1,
        price: 3000
      },
      {
        name: "test S",
        count : 2,
        price: 3000
      },
    ],
    count: 3,
    beforePrice : "53400",
    price : "25400",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  }])

  const _creditCards = [
    { id : 'C3', val : 'C3', name: 'KB PAY(국민)' },
    { id : 'C1', val : 'C1', name: '비씨' },
    { id : 'C0', val : 'C0', name: '신한' },
    { id : 'C4', val : 'C4', name: 'NH' },
    { id : 'C5', val : 'C5', name: '롯데' }, 
    { id : 'C7', val : 'C7', name: '삼성' }
  ]
  const _installment = [
    { id : 'C3', val : '00', name: '일시불' },
    { id : 'C3', val : '03', name: '3개월', ect : '무이자' },
    { id : 'C1', val : '06', name: '6개월', ect : '무이자' },
    { id : 'C0', val : '09', name: '9개월' },
    { id : 'C4', val : '12', name: '12개월' },
  ]

  const [ totalPrice, setTotalPrice ] = useState(57800)
  const [ point, setPoint ] = useState(0);
  const [ sumOptionsAndPrice, setSumOptionsAndPrice ] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  const handleToggle = (e) => {
    const target = e.target
    target.parentNode.classList.toggle(styles.actived)
  }
  const openPopup = (e) => {
    setIsPopup(true)
  }
  const closePopup = (e) => {
    setIsPopup(false)
  }

  const changePointScore = (e) => {
    const target = Number(e.target.value)
    setPoint(target)
  }

  const handleIncrement = (list) =>{
    const updatedData = data.map(item => {
      if(item.id === list.id){
        const count = item.count + 1;
        return { ...list, count};
      }
      return item;
    })
    setData(updatedData);
  }

  const handleDecrement = (list) => {
    const updatedData = data.map(item => {
      if(item.id === list.id){
        const count = item.count > 1 ? item.count - 1 : 1 ;
        return { ...list, count};
      }
      return item;
    })
    setData(updatedData);
  }

  const modal2Props = {
    // 모달2에 대한 props 설정
    // 예를 들어, 제목과 내용을 props로 전달
    title: <Logo />,
    content: '이것은 모달 2의 내용입니다.',
  };

  const handleCancel = (e) => {
    console.alert('취소할꺼냐아아아');
  }
  const handlePay = (e) => {
    alert('결제완료 되었습니다.')
  }
  return (
    <div className={styles.orderWrap}>
      <PageTitle title={'주문서'} />
      <div className={styles.container}>
        <div className={styles.orderLists}>
          <fieldset>
            <legend className='sr-only'>주문 폼</legend>
            <div className={styles.tableScrollable}>
              <table className={styles.tbBoard}>
                <caption className='sr-only'>주문리스트</caption>
                <colgroup>
                  <col style={{width: 4 + '%'}} />
                  <col />
                  <col style={{width: 12 + '%'}} />
                  <col style={{width: 10 + '%'}} />
                  <col style={{width: 12 + '%'}} />
                  <col style={{width: 8 + '%'}} />
                  <col style={{width: 10 + '%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <div className={styles.checkAll}>
                        <input type='checkbox' className='select' onChange={null} /><span className="sr-only">선택</span>
                      </div>
                    </th>
                    <th scope="col"><span>상품명</span></th>
                    <th scope="col"><span>가격</span></th>
                    <th scope="col"><span>수량</span></th>
                    <th scope="col"><span>합계</span></th>
                    <th scope="col"><span>적립금</span></th>
                    <th scope="col"><span>배송비</span></th>
                  </tr>
                </thead>
                <tbody>
                  { data.map( ( item ) => (
                    <TableFormLists 
                      key={item.id} item={item} options={item.options}
                      setSumOptionsAndPrice={setSumOptionsAndPrice}
                      sumOptionsAndPrice={sumOptionsAndPrice}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      handleOpenPopup={openPopup}
                    />
                  ))}

                </tbody>
                <tfoot>
                  <OrderTotalFoot data={data} totalPrice={totalPrice} />
                </tfoot>
              </table>
              <p>50000원 이상 구매시 무료배송 입니다.</p>
            </div>
          </fieldset>
        </div>
        <div className={styles.orderInfo}>
          <h3>주문자 정보</h3>
          <OrderInfoForm formData={formData} setFormData={setFormData} />
        </div>

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
              <input type="text" placeholder='0' value={point} onChange={changePointScore} />
              <Button type={'submit'} text={'사용'}  size={'btnM'} state={'success'} />
            </div>
          </dd>
        </dl>

        <table className={`${styles.uiTable} ${styles.tbStyle01}`}>
          <caption className='sr-only'>주문상품 할인적용 리스트</caption>
          <colgroup>
            <col style={{width: 25 + '%'}} />
            <col style={{width: 25 + '%'}} />
            <col style={{width: 25 + '%'}} />
            <col style={{width: 25 + '%'}} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">상품금액</th>
              <th scope="col">할인금액</th>
              <th scope="col">배송비</th>
              <th scope="col">결제 예정금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='center'>
                <span className={styles.price}>
                  <strong>{totalPrice}</strong> 원
                </span>
              </td>
              <td className='center'>
                <span className={styles.discount}>
                  <strong>{ point }</strong>P
                </span>
              </td>
              <td className='center'>
                <span className={styles.delivery}>
                  <strong>{ totalPrice >= 3000 ? '무료배송' : 3000 + '원' }</strong>
                </span>
              </td>
              <td className='center'>
                <span className={styles.total}>
                  <strong>{totalPrice - point}</strong>원
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
                    <input type="radio" id="credit1" name="drone" value="credit1" onChange={null} />
                    <label htmlFor="credit1">개인카드</label>
                    <input type="radio" id="credit1" name="drone" value="credit1" onChange={null} />
                    <label htmlFor="credit1">법인카드</label>
                  </div>
                </dd>
                  
                <dt>카드선택</dt>
                <dd>
                  <SelectOptions title={'카드종류'} data={_creditCards} />
                </dd>

                <dt>할부기간</dt>
                <dd>
                  <SelectOptions title={'할부'} data={_installment} />
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

        <div className={styles.btnWrap}>
          <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} onClick={handleCancel} />
          <Button type={'submit'} text={'결제하기'}  size={'btnL'} state={'success'} onClick={handlePay} />
        </div>


        { isPopup && <ModalPopup isPopup={isPopup} open={openPopup} close={closePopup} children={modal2Props} /> }
      </div>
    </div>
  )
};

export default OderForm;