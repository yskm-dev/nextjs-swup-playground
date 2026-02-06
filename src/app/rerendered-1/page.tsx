'use client';
import { Child } from '@/components/Child';

import { useState } from 'react';
import styles from './page.module.scss';

export default function ReRendered() {
  console.log('Re-Rendered page component rendered');
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className={styles.title}>Re-Rendered</h2>
      <button
        className={styles.button}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <Child count={count} />
    </>
  );
}
