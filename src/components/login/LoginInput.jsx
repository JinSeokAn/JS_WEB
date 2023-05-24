// import { AiFillLock } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';
import FormErrorMessage from 'components/commonErrorForm/FormErrorMessage';

import styles from './Login.module.scss'

const LoginInput = ({ type, label, htmlFor, register, errorMessage, onChange }) => {
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
            placeholder={type === 'password' ? '비밀번호를 입력해주세요.' : '아이디를 입력해주세요.'}
            className={styles.textform}
            onChange={onChange}
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
