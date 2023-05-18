import React from 'react';
import styles from './AddressPostcode.module.scss'
import DaumPostcodeEmbed from 'react-daum-postcode';

const AddressPostcode = ({isPopup, setIsPopup}) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setIsPopup(!isPopup)
  };
  const onClose = () => {
    setIsPopup(!isPopup)
  }

  return(
    <div className={styles.layerPopup} onClick={onClose}>
      <div className={styles.popupWrap}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
        <button type='button' className={styles.btnClose} onClick={onClose}>close</button>
      </div>
    </div>
  )
};

export default AddressPostcode;