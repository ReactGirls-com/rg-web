'use client';

import clsx from 'clsx';

import { Button } from '@/src/components/Button';
import { CustomLink } from '@/src/components/CustomLink';
import { NAV_LINKS } from '@/src/constants';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './NavLinks.module.scss';

type NavLinksProps = {
  listClassName?: string;
  listItemClassName?: string;
  linkClassName?: string;
  linkActiveClassName?: string;
  buttonWrapperClassName?: string;
  onLinkClick?: () => void;
};

export const NavLinks = ({
  listClassName,
  listItemClassName,
  linkClassName,
  linkActiveClassName,
  buttonWrapperClassName,
  onLinkClick,
}: NavLinksProps) => (
  <ul className={clsx(style.list, listClassName)}>
    {NAV_LINKS.map(({ label, href }) => (
      <li key={href} className={clsx(style.listItem, listItemClassName)}>
        <CustomLink
          className={clsx(style.link, linkClassName)}
          activeClassName={clsx(style.linkActive, linkActiveClassName)}
          href={href}
          onClick={onLinkClick}
        >
          {label}
        </CustomLink>
      </li>
    ))}

    <li className={clsx(style.buttonWrapper, buttonWrapperClassName)}>
      <Button variant="grapefruitPulp" onClick={onLinkClick}>
        {TRANSLATIONS.JOIN_BUTTON_TEXT}
      </Button>
    </li>
  </ul>
);
