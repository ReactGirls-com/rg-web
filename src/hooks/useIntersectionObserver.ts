import { useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useIntersectionObserver = ({
  threshold = 0.3,
  rootMargin = '0px 0px -30% 0px',
}: UseIntersectionObserverOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const timeoutRef = setTimeout(() => setIsIntersecting(true), 0);

      return () => clearTimeout(timeoutRef);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { elementRef, isIntersecting };
};
