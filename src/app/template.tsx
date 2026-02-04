'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { fadeIn, panelIn, zoomIn } from '@/libs/animations';
import { useEffect } from 'react';
import styles from './template.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const type = document.documentElement.dataset.transitionType;

    switch (type) {
      case 'fade':
        fadeIn();
        break;
      case 'panel':
        panelIn();
        break;
      case 'zoom':
        zoomIn();
        break;
      default:
        panelIn();
        break;
    }
  }, []);
  return (
    <>
      <div id="wrapper">
        <Header />
        <main id="container" className={styles.container}>
          {children}
        </main>
        <Footer />
      </div>
      <div id="banner1" className={styles.banner1}></div>
      <div id="banner2" className={styles.banner2}></div>
      <div id="banner3" className={styles.banner3}></div>
      <div id="banner4" className={styles.banner4}></div>
    </>
  );
}
