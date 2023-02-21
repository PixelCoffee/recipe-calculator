import styles from './usersection.module.scss';
import { NavLogin } from '@recipe-calculator/shared/ui'
import { NavSignup } from '@recipe-calculator/shared/ui'
/* eslint-disable-next-line */
export interface UsersectionProps {}

export function UserSection(props: UsersectionProps) {
  return (
    <div className={styles['container']}>
      <NavLogin></NavLogin>
      <NavSignup></NavSignup>
    </div>
  );
}

export default UserSection;
