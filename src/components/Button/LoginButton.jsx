import styles from './Button.module.scss'

const LoginButton = ({size, state, title }) => {
  return (
    <button
      className={`${styles[size]} ${styles[state]}`}
    >
      {title}
    </button>
  );
};
export default LoginButton;
