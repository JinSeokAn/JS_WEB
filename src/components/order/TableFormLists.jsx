import React from 'react';
import styles from './TableFormLists.module.scss'
import { Link } from 'react-router-dom';

const TableFormLists = ({data}) => {
  const {id, prdName, option, beforePrice, price, imgURL, count} = data
  const sumPrice = price * count
  const {option1, option2, option3} = option
  console.log(option1);


  return (
    <tr key={id}>
      {/* 체크 */}
      <td className={styles.check}>
        <div className={styles.checkBox}>
          <label htmlFor="chk1">
            <input type="checkbox" id="chk1" /><span className='sr-only'>선택하기</span>
          </label>
        </div>
      </td>
      {/* 상품명 */}
      <td className={styles.prd}>
        <Link to="#" className={styles.prdLink}>
          <span className={styles.thumb}>
            <img src={imgURL} alt={`${prdName} 제품`} />
          </span>
          <div className={styles.textBox}>
            <p className={styles.title}>{prdName}</p>
            <div className={styles.option}>
              { option1 && <span>{option1.name} <em className={styles.extraCount}>{option1.count}</em>개 <em className={styles.extraCharge}>{option1.price}원</em></span> }
              { option2 && <span>{option2.name} <em className={styles.extraCount}>{option2.count}</em>개 <em className={styles.extraCharge}>{option2.price}원</em></span> }
              { option3 && <span>{option3.name} <em className={styles.extraCount}>{option3.count}</em>개 <em className={styles.extraCharge}>{option3.price}원</em></span> }
            </div>
            <button type='button' className={styles.btnDefault}>옵션변경</button>
          </div>
        </Link>
      </td>
      {/* 가격 */}
      <td className={styles.price}>
        <div>
          <span className={styles.before}>{beforePrice}원</span>
          <span className={styles.current}>{price}원</span>
        </div>
      </td>
      {/* 수량 */}
      <td className={styles.count}>
        <div className={styles.countBox}>
          <div className={styles.editCount}> 
            <input type="text" name="amount" value={count} readOnly /><span className='sr-only'>{count}개</span>
            <button type="button" className={styles.down}><span className='sr-only'>감소</span></button> 
            <button type="button" className={styles.up}><span className='sr-only'>증가</span></button>
          </div>
          <button type="button" className={styles.btnEdit}>수정</button>
        </div>
      </td> 
      {/* 합계 */}
      <td className={styles.sum}>
        <div>{sumPrice}원</div>
      </td>
      {/* 적립금 */}
      <td className={styles.point}>
        {sumPrice * 0.005} P
      </td>
      {/* 배송비 */}
      <td className={styles.delivery}>
        <p className={styles.text}>
          [기본배송]<br />
          조건
        </p>
      </td>
    </tr>
  )
};

export default TableFormLists;