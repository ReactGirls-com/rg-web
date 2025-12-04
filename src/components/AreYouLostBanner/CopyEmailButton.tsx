'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { ParticleAnimation } from '@/src/components/ParticleAnimation';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './CopyEmailButton.module.scss';

const email = 'reactgirlsprague@gmail.com';
const copyText = TRANSLATIONS.CTA_COPY_EMAIL;
const copiedText = TRANSLATIONS.CTA_COPIED_EMAIL;

export const CopyEmailButton: React.FC = () => {
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
        aria-label={TRANSLATIONS.CTA_BUTTON}
      >
        {TRANSLATIONS.CTA_BUTTON}
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
