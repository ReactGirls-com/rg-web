import clsx from 'clsx';

import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import style from './ActivityCard.module.scss';

type ActivityCardProps = {
  iconClassName: string;
  title: string;
  description: string;
  bullets: string[];
  buttonVariant: 'grapefruitPulp' | 'explodingStar' | 'paleLavender';
  buttonHref: string;
  buttonText: string;
  showStarBadge?: boolean;
  showBadge?: boolean;
  badgeText?: string;
  bulletListColor?: string;
  textColor?: string;
  backgroundColor?: string;
};

export const ActivityCard: React.FC<ActivityCardProps> = ({
  iconClassName,
  title,
  description,
  bullets,
  buttonVariant,
  buttonHref,
  buttonText,
  showStarBadge = false,
  showBadge = false,
  badgeText,
  bulletListColor,
  textColor,
  backgroundColor = '',
}) => (
  <BorderBox
    as="article"
    className={style.card}
    style={{ '--card-background-color': backgroundColor }}
  >
    {showStarBadge && <div className={style.starBadge} aria-hidden="true" />}
    <div className={style.iconWrapper}>
      <div className={clsx(style.icon, iconClassName)} />
    </div>

    <h3 className={style.title}>{title}</h3>
    {showBadge && badgeText && (
      <div>
        <span className={style.badge}>
          <span className={style.badgeStar} aria-hidden="true" />
          {badgeText}
        </span>
      </div>
    )}
    <p
      className={style.description}
      style={{ '--text-color': textColor } as React.CSSProperties}
    >
      {description}
    </p>
    <ul
      className={clsx(style.bulletList)}
      style={{ '--bullet-list-color': bulletListColor } as React.CSSProperties}
    >
      {bullets.map((bullet, index) => (
        <li
          key={index}
          style={{ '--text-color': textColor } as React.CSSProperties}
        >
          {bullet}
        </li>
      ))}
    </ul>
    <Button variant={buttonVariant} href={buttonHref} className={style.button}>
      {buttonText}
    </Button>
  </BorderBox>
);
