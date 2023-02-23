import styles from './ItemList.module.scss';

/* eslint-disable-next-line */
export interface ItemListProps {
  //dont like this, hypothetically temporary generic yping
  recipes: any;
}

export function ItemList(props: ItemListProps) {
  return (
    <div className={styles['container']}>
      {
        props.recipes.map( recipe => {
          return(
          <p>{recipe.name}</p>
          )
        })
      }
    </div>
  );
}

export default ItemList;
