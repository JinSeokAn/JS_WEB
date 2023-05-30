import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss'
import Button from 'components/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const AddressForm = ({setFormData, address, zipCode}) => {
  // data
  const [ addressForm, setAddressForm ] = useState({
    zip_code: '',
    address1: '',
    address2: '',
  })
  const { zip_code, address1, address2 } = addressForm

  // 주소검색 기능
  const open = useDaumPostcodePopup();  
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let zonecode = data.zonecode

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddressForm((prevData) => ({
      ...prevData,
      zip_code: zonecode, address1: fullAddress
    }));
    // console.log(scriptUrl); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  const handleOpenPopup = (e) =>  open({ onComplete: handleComplete }) // 주소팝업
  
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      zip_code,
      address1,
      address2
    }));
  }, [addressForm])

 
  const onChangeText = (e) => {
    const target = e.target
    const currentValue = target.value;
    setAddressForm((prevData) => ({
      ...prevData,
      address2: currentValue
    }));
  }

  return (
    <div className={styles.address}>
      <div className={styles.zonecode}>
        <input 
          name='zip_code'
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
        value={address}
        readOnly
      />
      <input
        className={styles.textform}
        id="address2" 
        name='address2'
        type="text" 
        placeholder='나머지 주소'
        onChange={onChangeText}
       />
    </div>
  )
};

export default AddressForm;