import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'
import Button from 'components/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const AddressForm = ({setFormData, address1, address2, zipCode}) => {
  // url

  // 주소검색 기능
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let address1 = data.address;
    let zonecode = data.zonecode

    setFormData((prevData) => ({
      ...prevData,
      zipCode : zonecode, 
      address1,
    }));
  };

  useEffect(() => {
    const fullAddress = address1 + address2
    setFormData((prevData) => ({
      ...prevData,
      address : fullAddress
    }));
  }, [setFormData, address1, address2])

  const handleOpenPopup = (e) =>  open({ onComplete: handleComplete }) // 주소팝업
  
  const onChangeText = (e) => {
    const currentValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      address2: currentValue
    }));
  }
  return (
    <div className={styles.address}>
      <div className={styles.zonecode}>
        <input 
          name='zipCode'
          type="text"
          value={zipCode}
          disabled
          readOnly
        />
        <Button 
          type={'button'} 
          text={'주소'} 
          size={'btnM'} 
          state={'white'} 
          onClick={ e => {
            handleOpenPopup(e)
          }}
        />
       
      </div>
      <input 
        className={styles.textform} 
        id="address1" 
        name='address1'
        type='text' 
        placeholder='주소'
        value={address1}
        readOnly
      />
      <input
        className={styles.textform}
        id="address2" 
        name='address2'
        type="text" 
        value={address2 || ''}
        placeholder='나머지 주소'
        onChange={ e => onChangeText(e)}
       />
    </div>
  )
};

export default AddressForm;