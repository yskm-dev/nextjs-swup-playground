'use client';
import Link from 'next/link';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <header className={styles.headerInner}>
        <h1 className={styles.name}>
          <Link href="/" className={styles.title}>
            <span>Next.js & swup Playground</span>
          </Link>
        </h1>
      </header>
    </div>
  );
}
