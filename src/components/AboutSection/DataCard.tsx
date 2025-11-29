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
  animate?: boolean;
};

export const DataCard: React.FC<DataCardProps> = ({
  value,
  valueSuffix,
  label,
  colorClassName,
  showStar = false,
  animate = false,
}) => (
  <article className={style.dataCard}>
    <div
      className={clsx(style.valueWrapper, colorClassName)}
      aria-label={`${value} ${label}`}
    >
      {typeof value === 'number' && animate ? (
        <>
          <CountUp to={value} duration={1000} />

          {valueSuffix}
        </>
      ) : (
        value
      )}
      {showStar && (
        <span className={style.star} aria-hidden="true">
          ★
        </span>
      )}
    </div>
    <p className={style.dataLabel}>{label}</p>
  </article>
);
