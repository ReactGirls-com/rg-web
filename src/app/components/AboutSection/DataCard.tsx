'use client';

import clsx from 'clsx';

import { CountUp } from './CountUp';
import style from './DataCard.module.scss';

type DataCardProps = {
  value: number | string;
  valueSuffix?: string;
  label: string;
  colorClassName: string;
  showStar?: boolean;
  startAnimation?: boolean;
  shouldAnimate?: boolean;
};

export const DataCard: React.FC<DataCardProps> = ({
  value,
  valueSuffix,
  label,
  colorClassName,
  showStar = false,
  startAnimation = false,
  shouldAnimate,
}) => {
  const isNumber = typeof value === 'number';

  return (
    <article className={style.dataCard}>
      <div
        className={clsx(style.valueWrapper, colorClassName)}
        aria-label={`${value} ${label}`}
      >
        {shouldAnimate && isNumber && (
          <>
            {startAnimation ? (
              <>
                <CountUp to={value} duration={1000} />

                {valueSuffix}
              </>
            ) : (
              <>0 {valueSuffix}</>
            )}
          </>
        )}

        {!shouldAnimate && (
          <>
            {value} {valueSuffix}
          </>
        )}
        {showStar && <span className={style.star} aria-hidden="true" />}
      </div>
      <p className={style.dataLabel}>{label}</p>
    </article>
  );
};
