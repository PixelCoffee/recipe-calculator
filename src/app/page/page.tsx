import styles from './page.module.scss';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import bg from './assets/site-bg.jpg';

/* eslint-disable-next-line */
export interface PageProps {}

export function Page(props: PageProps) {
  return (
    <div className={`${styles['page']} ${styles['page--home']}`}>
      <Nav></Nav>
      <h1>Welcome to a page</h1>
      <Footer></Footer>
    </div>
  );
}

export default Page;
