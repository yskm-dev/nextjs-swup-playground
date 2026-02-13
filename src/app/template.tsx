'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LenisProvider } from '@/context/LenisContext';
import { usePageTransition } from '@/context/TransitionContext';
import { fadeIn, panelIn, zoomIn } from '@/libs/animations';
import { useEffect, useRef } from 'react';
import styles from './template.module.scss';

function waitForImages(container: Element): Promise<void> {
  const images = container.querySelectorAll<HTMLImageElement>('img');
  if (images.length === 0) return Promise.resolve();

  const pending = Array.from(images)
    .filter((img) => !img.complete)
    .map(
      (img) =>
        new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        })
    );

  if (pending.length === 0) return Promise.resolve();
  return Promise.race([
    Promise.all(pending).then(() => {}),
    new Promise<void>((resolve) => setTimeout(resolve, 2000)),
  ]);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const hasRun = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { transitionType, initialStyles, resetTransition } =
    usePageTransition();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    if (transitionType === 'zoom') window.scrollTo(0, 0);
    requestAnimationFrame(async () => {
      if (transitionType === 'fade' && wrapperRef.current) {
        await waitForImages(wrapperRef.current);
      }

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
    <LenisProvider>
      <div className={styles.wrapper} style={initialStyles.wrapper}>
        <div
          ref={wrapperRef}
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
    </LenisProvider>
  );
}
