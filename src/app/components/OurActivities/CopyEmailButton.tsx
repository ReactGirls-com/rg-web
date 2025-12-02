'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { ParticleAnimation } from '@/src/components/ParticleAnimation';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './CopyEmailButton.module.scss';

type CopyEmailButtonProps = {
  email: string;
  copyText: string;
  copiedText: string;
};

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  copyText,
  copiedText,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setShowAnimation(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1200);
    } catch {}
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <div className={style.buttonWrapper}>
      <Button
        variant="explodingStar"
        href={`mailto:${email}`}
        className={style.mobileEmailButton}
        aria-label={TRANSLATIONS.OUR_ACTIVITIES_CTA_BUTTON}
      >
        {TRANSLATIONS.OUR_ACTIVITIES_CTA_BUTTON}
      </Button>

      <Button
        variant="explodingStar"
        onClick={handleClick}
        className={style.desktopCopyButton}
        aria-label={isCopied ? copiedText : copyText}
      >
        <span
          className={clsx(
            style.icon,
            isCopied ? style.iconCheckmark : style.iconCopy,
          )}
          aria-hidden="true"
        >
          <ParticleAnimation
            isActive={showAnimation}
            onComplete={handleAnimationComplete}
            iconClassName={style.iconCheckmark}
          />
        </span>
        <span>{isCopied ? copiedText : copyText}</span>
      </Button>
    </div>
  );
};
