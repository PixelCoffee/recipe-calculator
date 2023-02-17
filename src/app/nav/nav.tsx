import styles from './nav.module.scss';
import { NavList } from '@recipe-calculator/shared/ui'
import { UserSection } from '@recipe-calculator/shared/ui'
/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div className={styles['nav']}>
      <NavList></NavList>
      <UserSection></UserSection>
    </div>
  );
}

export default Nav;
