import { Nav } from '../Nav';
import { TransitionLink } from '../TransitionLink';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <TransitionLink href="/">
          Next.js Page Transition Patterns
        </TransitionLink>
      </h1>
      <Nav></Nav>
    </header>
  );
};
