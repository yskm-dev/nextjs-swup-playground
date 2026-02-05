'use client';

import { Gallery } from '@/components/Gallery';
import styles from './page.module.scss';

export default function Panel() {
  return (
    <>
      <h2 className={styles.title}>Panel</h2>
      <Gallery path="panel" />
    </>
  );
}
