import React from 'react';
import styles from './Form.module.scss'
import Button from 'components/Button';

const AddressForm = ({isPopup, setIsPopup, address, zoneCode}) => {
  const handleOpenPopup = (e) => {
    setIsPopup(!isPopup)
  }

  const onChangeUserAddress = (e) => {
  };
  
  return (
    <>
      {/* userAddress */}
     <div className={styles.zonecode}>
        <input type="text" defaultValue={zoneCode} disabled />
        <Button type={'button'} text={'주소'} size={'btnM'} state={'white'} onClick={handleOpenPopup} />
     </div>
     <input 
        className={styles.textform} 
        id="input1" 
        type='text' 
        placeholder='주소'
        value={address}
        onChange={onChangeUserAddress}
      />
      <input className={styles.textform}  type="text" placeholder='나머지 주소' />
    </>
  )
};

export default AddressForm;