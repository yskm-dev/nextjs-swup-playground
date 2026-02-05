'use client';

import { Gallery } from '@/components/Gallery';
import { useRef } from 'react';
import styles from './page.module.scss';

export default function Fade() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <h2 className={styles.title}>Fade</h2>
      <Gallery path="fade" />
    </>
  );
}
