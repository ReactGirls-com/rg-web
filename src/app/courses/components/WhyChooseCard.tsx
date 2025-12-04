import clsx from 'clsx';

import { BorderBox } from '@/src/components/BorderBox';
import style from './WhyChooseCard.module.scss';

type WhyChooseCardProps = {
  iconClassName: string;
  description: string;
  iconColor: 'aztecAtom' | 'grapefruitPulp' | 'paleLavender' | 'explodingStar';
};

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  iconClassName,
  description,
  iconColor,
}) => (
  <BorderBox as="article" className={style.card}>
    <div
      className={clsx(style.iconWrapper, {
        [style.iconAztecAtom]: iconColor === 'aztecAtom',
        [style.iconGrapefruitPulp]: iconColor === 'grapefruitPulp',
        [style.iconPaleLavender]: iconColor === 'paleLavender',
        [style.iconExplodingStar]: iconColor === 'explodingStar',
      })}
    >
      <div className={clsx(style.baseIcon, iconClassName)} />
    </div>
    <p className={style.description}>{description}</p>
  </BorderBox>
);
