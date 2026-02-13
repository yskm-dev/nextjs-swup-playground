'use client';

import {
  TransitionType,
  usePageTransition,
} from '@/context/TransitionContext';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  type?: TransitionType;
};

export const TransitionLink = ({
  href,
  children,
  type = 'panel',
}: Props) => {
  const { startTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(type, href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      style={{ all: 'unset', cursor: 'pointer' }}
    >
      {children}
    </Link>
  );
};
