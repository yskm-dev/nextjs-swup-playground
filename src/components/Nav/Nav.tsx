import { TransitionLink } from '../TransitionLink';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <TransitionLink href="/fade" type="fade">
            Fade
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/panel" type="panel">
            Panel
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/zoom" type="zoom">
            Zoom
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};
