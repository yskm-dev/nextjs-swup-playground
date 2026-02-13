'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { usePageTransition } from '@/context/TransitionContext';
import { fadeIn, panelIn, zoomIn } from '@/libs/animations';
import { useEffect, useRef } from 'react';
import styles from './template.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  const hasRun = useRef(false);
  const { transitionType, initialStyles, resetTransition } =
    usePageTransition();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (transitionType === 'zoom') window.scrollTo(0, 0);
    requestAnimationFrame(async () => {
      switch (transitionType) {
        case 'fade':
          await fadeIn();
          break;
        case 'panel':
          await panelIn();
          break;
        case 'zoom':
          await zoomIn();
          break;
        default:
          await panelIn();
          break;
      }
      resetTransition();
    });
  }, [transitionType, resetTransition]);

  return (
    <>
      <div className={styles.wrapper} style={initialStyles.wrapper}>
        <div
          id="wrapper"
          className={styles.wrapperInner}
          style={initialStyles.wrapperInner}
        >
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </div>
      <div
        id="banner1"
        className={styles.banner1}
        style={initialStyles.banner}
      ></div>
      <div
        id="banner2"
        className={styles.banner2}
        style={initialStyles.banner}
      ></div>
      <div
        id="banner3"
        className={styles.banner3}
        style={initialStyles.banner}
      ></div>
      <div
        id="banner4"
        className={styles.banner4}
        style={initialStyles.banner}
      ></div>
    </>
  );
}
