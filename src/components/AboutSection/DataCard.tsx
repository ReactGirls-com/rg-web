'use client';

import clsx from 'clsx';

import { CountUp } from './CountUp';
import style from './DataCard.module.scss';

export type DataCardProps = {
  value: string;
  label: string;
  valueColor?: 'red' | 'blue' | 'purple' | 'orange';
  showStar?: boolean;
  startAnimation?: boolean;
};

const parseValue = (value: string) => {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)?$/);

  if (!match) {
    return { number: null, suffix: value };
  }

  return {
    number: parseFloat(match[1]),
    suffix: match[2] || '',
  };
};

export const DataCard: React.FC<DataCardProps> = ({
  value,
  label,
  valueColor = 'blue',
  showStar = false,
  startAnimation = false,
}) => {
  const { number, suffix } = parseValue(value);
  const isDecimal = number !== null && !Number.isInteger(number);

  return (
    <article className={style.dataCard}>
      <div
        className={clsx(style.valueWrapper, {
          [style.valueRed]: valueColor === 'red',
          [style.valueBlue]: valueColor === 'blue',
          [style.valuePurple]: valueColor === 'purple',
          [style.valueOrange]: valueColor === 'orange',
        })}
        aria-label={`${value} ${label}`}
      >
        {number !== null && startAnimation ? (
          <>
            {isDecimal ? (
              <>
                <CountUp to={Math.floor(number)} duration={800} />
                {`.${String(number).split('.')[1]}`}
              </>
            ) : (
              <CountUp to={number} duration={1000} />
            )}
            {suffix}
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
};
