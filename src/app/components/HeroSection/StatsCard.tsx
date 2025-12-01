'use client';

import clsx from 'clsx';

import { CountUp } from '@/src/components/CountUp';
import { BorderBox } from '@/src/components/BorderBox';
import style from './StatsCard.module.scss';

type StatsCardProps = {
  value: number;
  valueSuffix?: string;
  label: string;
  underLabel: string;
  colorClassName: string;
  startAnimation?: boolean;
  shouldAnimate?: boolean;
};

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  valueSuffix,
  label,
  underLabel,
  colorClassName,
  startAnimation = false,
  shouldAnimate,
}) => (
  <BorderBox as="article" className={style.statsCard}>
    <p className={style.label}>{label}</p>
    <div className={clsx(style.valueWrapper, colorClassName)}>
      <CountUp
        to={value}
        duration={1000}
        valueSuffix={valueSuffix}
        shouldAnimate={shouldAnimate}
        startAnimation={startAnimation}
      />
    </div>
    <p className={style.label}>{underLabel}</p>
  </BorderBox>
);
