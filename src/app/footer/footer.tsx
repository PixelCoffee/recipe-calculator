import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <h4>Footer</h4>
      <p>Credit to me, lol</p>
    </div>
  );
}

export default Footer;
