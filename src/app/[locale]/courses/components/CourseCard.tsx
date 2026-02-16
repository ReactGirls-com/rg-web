import { ReactNode } from 'react';
import clsx from 'clsx';

import { BorderBox } from '@/src/components/BorderBox';
import { Button } from '@/src/components/Button';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import style from './CourseCard.module.scss';

type CourseCardProps = {
  iconClassName: string;
  iconColor: string;
  title: string;
  description: string;
  additionalDescription?: ReactNode;
  bullets?: string[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonVariant?:
    | 'grapefruitPulp'
    | 'aztecAtom'
    | 'explodingStar'
    | 'paleLavender';
  secondaryButtonText: string;
  secondaryButtonHref: string;
  secondaryButtonVariant:
    | 'grapefruitPulp'
    | 'aztecAtom'
    | 'explodingStar'
    | 'paleLavender';
  showBadge?: boolean;
  badgeText?: string;
  showComingSoon?: boolean;
};

export const CourseCard: React.FC<CourseCardProps> = async ({
  iconClassName,
  iconColor,
  title,
  description,
  additionalDescription,
  bullets,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonVariant,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonVariant,
  showBadge = false,
  badgeText,
  showComingSoon = false,
}) => {
  const { t } = await getTranslationsWithLocale();

  return (
    <BorderBox as="article" className={style.card}>
      <div className={style.header}>
        <div
          className={style.iconWrapper}
          style={{ '--icon-color': iconColor } as React.CSSProperties}
        >
          <div className={clsx(style.icon, iconClassName)} />
        </div>
        {showBadge && badgeText && (
          <span className={style.badge}>{badgeText}</span>
        )}
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>

      {showComingSoon && (
        <p className={style.description}>{t.COURSES_CARD_COMING_SOON}</p>
      )}

      {additionalDescription}

      {bullets && bullets.length > 0 && (
        <ul className={style.bulletList}>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}

      <div className={style.buttonsWrapper}>
        {primaryButtonText && primaryButtonHref && primaryButtonVariant && (
          <Button
            variant={primaryButtonVariant}
            href={primaryButtonHref}
            className={style.button}
          >
            {primaryButtonText}
          </Button>
        )}
        <Button
          variant={secondaryButtonVariant}
          href={secondaryButtonHref}
          className={style.button}
        >
          {secondaryButtonText}
        </Button>
      </div>
    </BorderBox>
  );
};
