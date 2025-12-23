'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const SCROLL_OFFSET = 40;

export const HashScrollHandler: React.FC = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      return;
    }

    const element = document.getElementById(hash);

    if (element) {
      const top = element.offsetTop - SCROLL_OFFSET;
      setTimeout(() => {
        window.scrollTo({ top, behavior: 'smooth' });
      }, 0);
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [pathname]);

  return null;
};
