import clsx from 'clsx';

import { Button } from '@/src/components/Button';
import { CustomLink } from '@/src/components/CustomLink';
import { SECTION_IDS } from '@/src/constants';
import { getNavLinks, getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { type Translations } from '@/src/utils/getTranslations';
import { Locale } from '@/src/context/LanguageContext';
import style from './NavLinks.module.scss';

type NavLinksProps = {
  t: Translations;
  listClassName?: string;
  listItemClassName?: string;
  linkClassName?: string;
  linkActiveClassName?: string;
  buttonWrapperClassName?: string;
  onLinkClick?: () => void;
  locale: Locale;
};

export const NavLinks: React.FC<NavLinksProps> = ({
  t,
  listClassName,
  listItemClassName,
  linkClassName,
  linkActiveClassName,
  buttonWrapperClassName,
  onLinkClick,
  locale,
}) => {
  const navLinks = getNavLinks(t, locale);

  return (
    <ul className={clsx(style.list, listClassName)}>
      {navLinks.map(({ label, href }) => (
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
        <Button
          variant="aztecAtom"
          onClick={onLinkClick}
          href={`${getLocaleAwareLink('/', locale)}#${SECTION_IDS.OUR_ACTIVITIES}`}
        >
          {t.JOIN_BUTTON_TEXT}
        </Button>
      </li>
    </ul>
  );
};
