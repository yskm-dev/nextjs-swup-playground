'use client';

import { Gallery } from '@/components/Gallery';
import styles from './page.module.scss';

export default function Zoom() {
  return (
    <>
      <h2 className={styles.title}>Zoom</h2>
      <Gallery path="zoom" />
    </>
  );
}
