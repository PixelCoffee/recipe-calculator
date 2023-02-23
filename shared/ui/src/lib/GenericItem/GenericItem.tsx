import styles from './GenericItem.module.scss';

/* eslint-disable-next-line */
export interface GenericItemProps {
  item: {
    name: string,
    text: string
  }  
}


export function GenericItem(props: GenericItemProps) {
  return (
    <div className={styles['container']}>
     <h1>{props.item.name}</h1>
    </div>
  );
}

export default GenericItem;
