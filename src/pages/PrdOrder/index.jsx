import React from 'react';
import styles from './PrdOrder.module.scss'

const PrdOrder = (props) => {
  return (
    <div className={styles.orderWrap}>
      <h2>주문서</h2>
      <div className=''>
        <fieldset>
          <legend>주문 폼</legend>
          <div>
            <table className={styles.tbBoard}>
              <caption>주문리스트</caption>
              <colgroup>
                <col style="width: 15%" />
                <col style="*" />
                <col style="width: 10%" />
                <col style="width: 10%" />
                <col style="width: 10%" />
              </colgroup>
              <thead>
                <tr>
                    <th scope="col"><div class="tb-center"></div></th>
                    <th scope="col"><div class="tb-center">상품명</div></th>
                    <th scope="col"><div class="tb-center">수량</div></th>
                    <th scope="col"><div class="tb-center">가격</div></th>
                    <th scope="col"><div class="tb-center">적립금</div></th>
                </tr>
              </thead>
              <tbody>
                <tr class="tbList">
                  <td>
                    <div class="thumb">
                      <a href="/shop/shopdetail.html?branduid=2065202">
                        <img src="//cdn1-aka.makeshop.co.kr/shopimages/xexymix/0330040008653.jpg" alt="상품 섬네일" title="상품 섬네일" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="tb-left">                                           
                      <a href="/shop/shopdetail.html?branduid=2065202">
                        <p class="order_name">블랙라벨 시그니처 300N 레깅스 6.5부 1+1</p>
                      </a>
                    </div>
                  </td> 
                  <td>
                      <div class="tb-center">1개</div>
                  </td>
                  <td>
                    <div class="tb-center">62,300원</div>
                  </td>
                  <td>
                    <div class="tb-center">없음</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div>
        <h3>주문자 정보</h3>
        <div>
          <ul>
            <li>
              <label htmlFor="">이름</label>
              <input type="text" placeholder='홍길동' />
            </li>
            <li>
              <label htmlFor="">이메일</label>
              <input type="text" placeholder='홍길동' />
            </li>
            <li>
              <label htmlFor="">이름</label>
              <input type="text" placeholder='홍길동' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default PrdOrder;