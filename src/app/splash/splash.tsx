import styles from './splash.module.scss';

import { GenericItem, GenericItemProps, ItemList, ItemListProps } from '@recipe-calculator/shared/ui';
import Recipes from '../../assets/recipes.json';

const Item : GenericItemProps["item"] = {name: 'testname', text: 'testtext'};


/* eslint-disable-next-line */
export interface SplashProps {}


export function Splash(props: SplashProps) {
  return (
    <div className={styles['container']}>           
    <ItemList recipes={Recipes}></ItemList>
    </div>
  );
}

export default Splash;
