import React from 'react';
import styles from './OrderInfoForm.module.scss'
import UserNameForm from 'components/InputForm/UserNameForm';
import EmailForm from 'components/InputForm/EmailForm';
import UserPhoneForm from 'components/InputForm/UserPhoneForm';
import AddressForm from 'components/InputForm/AddressForm';

const OrderInfoForm = ({setFormData, formData }) => {
  const { memberName, email, phone, address1, address2, zipCode } = formData
  
  return (
    <form>
      <ul className={styles.orderUserForm}>
        <li>
          <span className={styles.subject}>이름</span>
          <UserNameForm name={'memberName'} id={'memberName'} value={memberName} guideTxt={'홍길동'} setFormData={setFormData} />
        </li>
        <li>
          <span className={styles.subject}>메일</span>
          <EmailForm setFormData={setFormData} email={email} />
        </li>
        <li>
          <span className={styles.subject}>연락처</span>
          <UserPhoneForm name={'phone'} id={'phone'} value={phone} guideTxt={'01012345678'} setFormData={setFormData}  />
        </li>
        <li>
          <span className={styles.subject}>주소</span>
          <AddressForm 
            setFormData={setFormData} 
            address1={address1}
            address2={address2}
            zipCode={zipCode} 
          />
        </li>
      </ul>
    </form>
  )
};

export default OrderInfoForm;