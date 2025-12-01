'use client';

import { useEffect, useState } from 'react';

type CountUpProps = {
  to: number | string;
  duration?: number;
  valueSuffix?: string;
  shouldAnimate?: boolean;
  startAnimation?: boolean;
};

export const CountUp: React.FC<CountUpProps> = ({
  to,
  duration = 1000,
  valueSuffix,
  shouldAnimate,
  startAnimation,
}) => {
  const [value, setValue] = useState(0);

  const isNumber = typeof to === 'number';

  useEffect(() => {
    if (!isNumber) {
      return;
    }

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const current = Math.floor(percentage * to);

      setValue(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return (
    <>
      {shouldAnimate && isNumber && (
        <>
          {startAnimation ? (
            <>
              {value.toLocaleString('cs-CZ')}

              {valueSuffix}
            </>
          ) : (
            <>0 {valueSuffix}</>
          )}
        </>
      )}

      {(!shouldAnimate || !isNumber) && (
        <>
          {to} {valueSuffix}
        </>
      )}
    </>
  );
};
