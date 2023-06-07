import React, { useState } from 'react';
import styles from './OderForm.module.scss'
import PageTitle from 'components/commonLayout/PageTitle';
import Button from 'components/Button';
import TableFormLists from 'components/order/TableFormLists';
import OrderInfoForm from 'components/order/OrderInfoForm';
import { useNavigate } from 'react-router-dom';

const OderForm = (props) => {
  const [formData, setFormData] = useState({
    memberName : "test1",
    phone : "01076885412",
    email : "testmem@naver.com",
    address1 : "경남 거창군 위천면 강남불1길 18",
    address2 : "논현동 101호",
    zipCode : "12305",
  })
  const navigate = useNavigate()

  const data = [
    {
    id : "325445747",
    prdName : "이스페더 컴포트 숏슬리브 1+1",
    option: { 
      option1 : {
        name: "블랙 M",
        count : 1,
        price: 3000
      },
      option2 : {
        name: "블루 S",
        count : 2,
        price: 3000
      },
    },
    count: 3,
    beforePrice : "85400",
    price : "51200",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  },
  {
    id : "4634574",
    prdName : "test 컴포트 숏슬리브 1+1",
    option: { 
      option1 : {
        name: "블랙 M",
        count : 1,
        price: 3000
      },
      option2 : {
        name: "블루 S",
        count : 2,
        price: 3000
      },
    },
    count: 3,
    beforePrice : "53400",
    price : "25400",
    imgURL : "//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg"
  }]

  const handleCancel = (e) => {
    console.alert('취소할꺼냐아아아');
  }
  const handlePay = (e) => {
    navigate('/order/:id')
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
                        <input type='checkbox' className='select' /><span className="sr-only">선택</span>
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
                  { data.map( (data) => (
                    <TableFormLists key={data.id} data={data} />
                  ))}

                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className={styles.total}><span>합계</span></td>
                    <td colSpan={2} className={styles.totalPrice}><span>53,000원</span></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </fieldset>
        </div>
        <div className={styles.orderInfo}>
          <h3>주문자 정보</h3>
          <OrderInfoForm formData={formData} setFormData={setFormData} />
        </div>
        <div className={styles.btnWrap}>
          <Button type={'button'} text={'취소'} size={'btnL'} state={'cancel'} onClick={handleCancel} />
          <Button type={'submit'} text={'결제하기'}  size={'btnL'} state={'success'} onClick={handlePay} />
        </div>
      </div>
    </div>
  )
};

export default OderForm;