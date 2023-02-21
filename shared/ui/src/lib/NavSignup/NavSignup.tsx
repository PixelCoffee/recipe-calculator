import styles from './NavSignup.module.scss';

/* eslint-disable-next-line */
export interface NavSignupProps {}

export function NavSignup(props: NavSignupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NavSignup!</h1>
    </div>
  );
}

export default NavSignup;
