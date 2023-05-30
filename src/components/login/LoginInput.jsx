// import { AiFillLock } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';
import FormErrorMessage from 'components/commonErrorForm/FormErrorMessage';

import styles from './Login.module.scss'

const LoginInput = ({ type, label, htmlFor, register, errorMessage }) => {
  return (
    <div className="">
      <div className="">
        <label htmlFor={htmlFor} className="srOnly">
          {label}
        </label>
        <input
            {...register}
            id={htmlFor}
            type={type}
            placeholder={type === 'password' ? '비밀번호' : '아이디'}
            className={styles.textform}
          />
        
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </div>
      {/* <div className="">
        {type === 'password' ? <AiFillLock size={23} /> : <FaUserAlt size={20} />}
      </div> */}
    </div>
  );
};
export default LoginInput;
