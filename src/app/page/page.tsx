import styles from './page.module.scss';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import PageContent from '../pagecontent/pagecontent';
import bg from './assets/site-bg.jpg';

/* eslint-disable-next-line */
export interface PageProps {}

export function Page(props: PageProps) {
  return (
    <div className={`${styles['page']} ${styles['page--home']}`}>
      <Nav></Nav>
      <PageContent></PageContent>
      <Footer></Footer>
    </div>
  );
}

export default Page;
