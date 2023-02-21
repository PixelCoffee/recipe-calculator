import styles from './navlist.module.scss';
import { NavListItem } from '@recipe-calculator/shared/ui'
/* eslint-disable-next-line */
export interface NavListProps {}

export function NavList(props: NavListProps) {
  return (
    <ul className={styles['navList']}>
      <NavListItem name='Home' url='/'></NavListItem>
      <NavListItem name='Page1' url='/'></NavListItem>
      <NavListItem name='Page2' url='/'></NavListItem>  
    </ul>
  );
}

export default NavList;
