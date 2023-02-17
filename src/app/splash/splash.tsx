import styles from './splash.module.scss';

/* eslint-disable-next-line */
export interface SplashProps {}

export function Splash(props: SplashProps) {
  return (
    <div className={styles['container']}>     
      <h1>Welcome to the Jojolands!</h1>
    </div>
  );
}

export default Splash;
