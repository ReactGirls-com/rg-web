import clsx from 'clsx';

import { BorderBox } from './BorderBox';
import style from './BasicCard.module.scss';

type BasicCardProps = {
  iconClassName: string;
  title: string;
  description: string;
  iconColor?: 'aztecAtom' | 'grapefruitPulp' | 'paleLavender' | 'explodingStar';
};

export const BasicCard: React.FC<BasicCardProps> = ({
  iconClassName,
  title,
  description,
  iconColor = 'aztecAtom',
}) => (
  <BorderBox as="article" className={style.basicCard}>
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
    <h3 className={style.title}>{title}</h3>
    <p className={style.description}>{description}</p>
  </BorderBox>
);
