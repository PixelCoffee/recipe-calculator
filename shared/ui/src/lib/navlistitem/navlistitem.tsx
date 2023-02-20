import styles from './NavListItem.module.scss';

/* eslint-disable-next-line */
export interface NavListItemProps {
  name: string,
  url: string
}

export function NavListItem(props: NavListItemProps) {
  return (
    <li className={styles['navListItem']}>
     <a href={props.url}>{props.name}</a>
    </li>
  );
}

export default NavListItem;
