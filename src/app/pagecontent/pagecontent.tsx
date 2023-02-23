import Splash from '../splash/splash';
import styles from './pagecontent.module.scss';

/* eslint-disable-next-line */
export interface PagecontentProps {}

export function PageContent(props: PagecontentProps) {
  return (
    <div className={styles['pageContent']}>
      <h1>Main Title</h1>      
      <Splash></Splash>
    </div>
  );
}

export default PageContent;
