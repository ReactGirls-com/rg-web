'use client';

import clsx from 'clsx';

import { CountUp } from '@/src/components/CountUp';
import { BorderBox } from './BorderBox';
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver';
import style from './DataCard.module.scss';

type DataCardProps = {
  value: number | string;
  valueSuffix?: string;
  label: string;
  colorClassName: string;
  showStar?: boolean;
  shouldAnimate?: boolean;
};

export const DataCard: React.FC<DataCardProps> = ({
  value,
  valueSuffix,
  label,
  colorClassName,
  showStar = false,
  shouldAnimate,
}) => {
  const { elementRef, isIntersecting: startAnimation } =
    useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={elementRef} className={style.wrapper}>
      <BorderBox as="article" className={style.dataCard}>
        <div className={clsx(style.valueWrapper, colorClassName)}>
          <CountUp
            to={value}
            duration={1000}
            valueSuffix={valueSuffix}
            shouldAnimate={shouldAnimate}
            startAnimation={startAnimation}
          />

          {showStar && <span className={style.star} aria-hidden="true" />}
        </div>
        <p className={style.dataLabel}>{label}</p>
      </BorderBox>
    </div>
  );
};
