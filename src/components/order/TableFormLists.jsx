import React, { useEffect, useState } from 'react';
import styles from './TableFormLists.module.scss'
import { Link } from 'react-router-dom';
import OptionList from './OptionList';

const TableFormLists = ({item, options, onDecrement, onIncrement, handleOpenPopup, setSumOptionsAndPrice}) => {
  const {id, prdName, beforePrice, price, imgURL, count} = item
  const prdTotalPrice = price * count   // 제품 가격만
  const [ sumTotalWithOptions, setSumTotalWithOptions] = useState(0);   // 옵션 가격만 

  useEffect(() => {
    // 리스트 당 옵션 가격 합친거
    const opTotalPrice = options.reduce((accumulator, currentOption) => {
      return accumulator + (currentOption.price * currentOption.count);
    }, 0);
    setSumTotalWithOptions(opTotalPrice + prdTotalPrice)
    setSumOptionsAndPrice(sumTotalWithOptions)
}, [item])
  return (
    <tr key={id}>
      {/* 체크 */}
      <td className={styles.check}>
        <div className={styles.checkBox}>
          <label htmlFor="chk1">
            <input type="checkbox" id="chk1" onChange={null} /><span className='sr-only'>선택하기</span>
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
            {/* 옵션 내용들 */}
            <div className={styles.option}>
              {
                options.map( (item, idx) => (
                  <OptionList 
                    key={item.name} 
                    item={item} 
                    idx={idx} 
                   />
                ))
              }
            </div>
            <button 
              type='button' className={styles.btnDefault}
              onClick={handleOpenPopup}
            >옵션변경</button>
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
            <button type="button" className={styles.down} onClick={ e => onDecrement(item)}><span className='sr-only'>감소</span></button> 
            <button type="button" className={styles.up} onClick={ e => onIncrement(item)}><span className='sr-only'>증가</span></button>
          </div>
        </div>
      </td> 
      {/* 합계 */}
      <td className={styles.sum}>
        <div>{sumTotalWithOptions}원</div>
      </td>
      {/* 적립금 */}
      <td className={styles.point}>
        {prdTotalPrice * 0.005} P
      </td>
      {/* 배송비 */}
      <td className={styles.delivery}>
        <p className={styles.text}>
          조건부 배송
        </p>
      </td>
    </tr>
  )
};

export default TableFormLists;