import styles from './pagecontent.module.scss';

/* eslint-disable-next-line */
export interface PagecontentProps {}

export function PageContent(props: PagecontentProps) {
  return (
    <div className={styles['pageContent']}>
      <h1>Welcome to Pagecontent!</h1>
    </div>
  );
}

export default PageContent;
