'use client';

import { Gallery } from '@/components/Gallery';
import { useRef } from 'react';
import styles from './page.module.scss';

const DUMMY_DATA = [
  {
    title: 'Section 1',
    description: {
      text: 'This is section 1. This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1. This is section 1. This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.This is section 1.',
    },
  },
  {
    title: 'Section 2',
    description: {
      text: 'This is section 2. This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2. This is section 2. This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.This is section 2.',
    },
  },
  {
    title: 'Section 3',
    description: {
      text: 'This is section 3. This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3. This is section 3. This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.This is section 3.',
    },
  },
];

export default function Home() {
  const sectionRef = useRef<(HTMLElement | null)[]>([]);

  const handleClick = (index: number) => {
    const section = sectionRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ul className={styles.buttonList}>
        {DUMMY_DATA.map((data, index) => (
          <li key={index}>
            <button
              className={styles.button}
              type="button"
              onClick={() => handleClick(index)}
            >
              Move to {data.title}
            </button>
          </li>
        ))}
      </ul>
      {DUMMY_DATA.map((data, index) => (
        <section
          key={index}
          className={styles.section}
          ref={(el: HTMLElement | null) => {
            sectionRef.current[index] = el;
          }}
        >
          <h2 className={styles.title}>{data.title}</h2>
          <p>{data.description.text}</p>
        </section>
      ))}
      <Gallery />
    </>
  );
}
