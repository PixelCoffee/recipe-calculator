import styles from './GenericItem.module.scss';

/* eslint-disable-next-line */
export interface GenericItemProps {
  item: {
    name: string,
    ingredients: []    
  }  
}


export function GenericItem(props: GenericItemProps) {
  return (
    <div className={styles['genericItem']}>
     <p className={styles['genericItem__title']}>{props.item.name}</p>
     <p>{props.item.ingredients.length}</p>
    </div>
  );
}

export default GenericItem;
