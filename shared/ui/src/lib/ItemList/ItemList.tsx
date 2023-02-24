import styles from './ItemList.module.scss';
import {GenericItem, GenericItemProps} from '@recipe-calculator/shared/ui';

/* eslint-disable-next-line */
export interface ItemListProps {
  //dont like this, hypothetically temporary generic yping
  recipes: any;
}

export function ItemList(props: ItemListProps) {
  

  return (
    <div className={styles['itemList']}>
       {
          Object.values(props.recipes).map((value:any, index) => {
            return( <GenericItem item={value} key={index}></GenericItem>)
          }) 
        }
    </div>
  );
}

export default ItemList;
