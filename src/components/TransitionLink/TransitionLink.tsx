'use client';

import { fadeOut, panelOut, zoomOut } from '@/libs/animations';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
  type?: string | null;
};

export const TransitionLink = ({ href, children, type }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (pathname !== href) {
      switch (type) {
        case 'fade':
          fadeOut({ href, router });
          return;
        case 'panel':
          panelOut({ href, router });
          return;
        case 'zoom':
          zoomOut({ href, router });
          return;
        default:
          panelOut({ href, router });
          return;
      }
    }
  };
  return (
    <Link
      href={href}
      onClick={(e) => handleClick(e as unknown as MouseEvent)}
      style={{ all: 'unset', cursor: 'pointer' }}
    >
      {children}
    </Link>
  );
};
