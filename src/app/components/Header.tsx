'use client';

import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import clsx from 'clsx';

import { NavLinks } from '@/src/app/components/NavLinks';
import { Locale, useTranslations } from '@/src/context';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import style from './Header.module.scss';

type HeaderProps = {
  logoClassName?: string;
  locale: Locale;
};

export const Header: React.FC<HeaderProps> = ({ logoClassName, locale }) => {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.burgerMenuWrapper}>
      <button
        className={style.burgerButton}
        onClick={handleToggle}
        aria-label={t.ARIA_TOGGLE_MENU}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={style.burgerIcon} aria-hidden="true" />
      </button>

      <Menu
        isOpen={isOpen}
        onStateChange={handleStateChange}
        right
        onClose={handleClose}
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <div>
          <div className={style.menuHeader}>
            <Link
              href={getLocaleAwareLink('/', locale)}
              className={clsx(style.menuLogo, logoClassName)}
              aria-label={t.ARIA_REACTGIRLS_HOME}
              onClick={handleClose}
            >
              <span className="visually-hidden">ReactGirls</span>
            </Link>
            <button
              className={style.closeButton}
              onClick={handleClose}
              aria-label={t.ARIA_CLOSE_MENU}
              type="button"
            >
              <span className={style.closeIcon} aria-hidden="true" />
            </button>
          </div>

          <NavLinks
            t={t}
            locale={locale}
            listClassName={style.menuLinks}
            linkClassName={style.menuLink}
            buttonWrapperClassName={style.menuButtonWrapper}
            onLinkClick={handleClose}
          />
        </div>
      </Menu>
    </div>
  );
};
