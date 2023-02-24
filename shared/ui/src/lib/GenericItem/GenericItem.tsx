import styles from './GenericItem.module.scss';

/* eslint-disable-next-line */

export interface Recipe {  
    name : string,
    localised_name : [
      string
    ],
    category : string,
    //not great but likely wont use this property
    order : any,
    group : {
      name : string,
      type : string
    },
    subgroup : {
      name : string,
      type : string
    },
    enabled : boolean,
    hidden : boolean,
    hidden_from_player_crafting : boolean,
    emissions_multiplier : number,
    energy : number,
    ingredients : [
      {
        type : string,
        name : string,
        amount : number
      }
    ],
    products : [
      {
        type: string,
        name: string,
        probability : number,
        amount : number
      }
    ],
    main_product : {
      type : string,
      name :string,
      probability : number,
      amount : number
    }
}


export interface GenericItemProps {
  item: Recipe
}


export function GenericItem(props: GenericItemProps) {
  return (
    <div className={styles['genericItem']}>
     <p className={styles['genericItem__title']}>{props.item.name}</p>
     <p>{props.item.ingredients.length}</p>
     <p>Group: {props.item.group.name}</p>
    </div>
  );
}

export default GenericItem;
