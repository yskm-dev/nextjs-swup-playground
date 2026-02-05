'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { fadeIn, panelIn, zoomIn } from '@/libs/animations';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './template.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  const hasRun = useRef(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const type = document.documentElement.dataset.transitionType;
    if (type === 'zoom') window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      setTimeout(() => {
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
      }, 100);
    });
  }, [pathname, searchParams]);
  return (
    <>
      <div className={styles.wrapper}>
        <div id="wrapper" className={styles.wrapperInner}>
          <Header />
          <main id="main" className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <div id="banner1" className={styles.banner1}></div>
      <div id="banner2" className={styles.banner2}></div>
      <div id="banner3" className={styles.banner3}></div>
      <div id="banner4" className={styles.banner4}></div>
    </>
  );
}
