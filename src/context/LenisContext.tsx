import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;

    lenis.on('scroll', ScrollTrigger.update);

    // GSAPのticker経由でLenisを動かす
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4,
      }}
    >
      {children}
    </ReactLenis>
  );
};
