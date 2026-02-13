'use client';
import { gsap } from 'gsap';
import { useLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

export function Parallax({
  speed = 1,
  children,
}: {
  speed: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { translateY: `${10 * speed}px` },
        {
          translateY: `${-10 * speed}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true, // sync: 0.25相当はscrub: 0.25
            // markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [ref, lenis]);

  return (
    <div ref={ref}>
      <div>{children}</div>
    </div>
  );
}
