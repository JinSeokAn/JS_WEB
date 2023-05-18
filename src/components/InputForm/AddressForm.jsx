import React from 'react';
import styles from './Form.module.scss'
import Button from 'components/Button';

const AddressForm = ({isPopup, setIsPopup}) => {
  const handleOpenPopup = (e) => {
    setIsPopup(!isPopup)
  }

  const onChangeUserAddress = (e) => {};

  
  return (
    <>
      {/* userAddress */}
      <input 
        className={styles.textform} 
        id="input1" 
        type='text' 
        placeholder='주소'
        onChange={onChangeUserAddress}
      /> 
      <Button type={'button'} text={'주소'} size={'btnM'} state={'white'} onClick={handleOpenPopup} />
    </>
  )
};

export default AddressForm;