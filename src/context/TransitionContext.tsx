'use client';

import { fadeOut, panelOut, zoomOut } from '@/libs/animations';
import { usePathname, useRouter } from 'next/navigation';
import {
  CSSProperties,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export type TransitionType = 'fade' | 'panel' | 'zoom' | 'default';

type TransitionContextValue = {
  transitionType: TransitionType;
  initialStyles: {
    wrapper: CSSProperties;
    wrapperInner: CSSProperties;
    banner: CSSProperties;
  };
  startTransition: (type: TransitionType, href: string) => void;
  resetTransition: () => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

function getInitialStyles(type: TransitionType) {
  switch (type) {
    case 'fade':
      return {
        wrapper: {},
        wrapperInner: { opacity: 0 } as CSSProperties,
        banner: { transform: 'translateY(-100%)' } as CSSProperties,
      };
    case 'zoom':
      return {
        wrapper: { perspective: '10000px' } as CSSProperties,
        wrapperInner: { opacity: 0 } as CSSProperties,
        banner: { transform: 'translateY(0%)' } as CSSProperties,
      };
    case 'panel':
      return {
        wrapper: {},
        wrapperInner: { opacity: 1 } as CSSProperties,
        banner: { transform: 'translateY(0%)' } as CSSProperties,
      };
    default:
      return {
        wrapper: {},
        wrapperInner: {},
        banner: {},
      };
  }
}

function getOutAnimation(type: TransitionType): () => Promise<void> {
  switch (type) {
    case 'fade':
      return fadeOut;
    case 'zoom':
      return zoomOut;
    case 'panel':
    default:
      return panelOut;
  }
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transitionType, setTransitionType] =
    useState<TransitionType>('default');
  const router = useRouter();
  const pathname = usePathname();

  const startTransition = useCallback(
    async (type: TransitionType, href: string) => {
      if (pathname === href) return;

      const outAnimation = getOutAnimation(type);
      await outAnimation();

      setTransitionType(type);
      requestAnimationFrame(() => {
        router.push(href);
      });
    },
    [pathname, router]
  );

  const resetTransition = useCallback(() => {
    setTransitionType('default');
  }, []);

  const initialStyles = getInitialStyles(transitionType);

  return (
    <TransitionContext.Provider
      value={{ transitionType, initialStyles, startTransition, resetTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within TransitionProvider');
  }
  return context;
}
