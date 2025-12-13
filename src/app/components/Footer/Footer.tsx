import Link from 'next/link';

import { NAV_LINKS, SOCIAL_LINKS } from '@/src/constants';
import { CustomLink } from '../../../components/CustomLink';
import { IconButton } from '@/src/components/IconButton';
import { ContactRow } from './ContactRow';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <div className={style.footerContent}>
      <section>
        <Link
          href="/"
          className={style.footerLogo}
          aria-label={TRANSLATIONS.ARIA_REACTGIRLS_HOME}
        >
          <span className="visually-hidden">ReactGirls</span>
        </Link>
        <p className={style.footerDescription}>{TRANSLATIONS.FOOTER_CLAIM}</p>
        <nav
          className={style.socialLinks}
          aria-label={TRANSLATIONS.ARIA_SOCIAL_MEDIA_LINKS}
        >
          {SOCIAL_LINKS.map(({ label, icon, href, ariaLabel }) => (
            <IconButton
              key={label}
              href={href}
              variant="secondary"
              aria-label={ariaLabel}
              icon={icon}
              iconClassName={style.socialIcon}
            />
          ))}
        </nav>
      </section>
      <nav aria-label={TRANSLATIONS.ARIA_FOOTER_NAVIGATION}>
        <h2 className={style.footerNavTitle}>
          {TRANSLATIONS.FOOTER_NAV_TITLE}
        </h2>
        <ul className={style.footerNavLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <CustomLink
                className={style.footerNavLink}
                activeClassName={style.footerNavLinkActive}
                href={href}
              >
                {label}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <h2 className={style.footerContactTitle}>
          {TRANSLATIONS.FOOTER_CONTACT_TITLE}
        </h2>
        <address className={style.contactInfo}>
          <ContactRow
            iconClass={style.contactIconEmail}
            value="reactgirlsprague@gmail.com"
          />
          <ContactRow
            iconClass={style.contactIconPin}
            value={
              <>
                <div>ReactGirls z. s.</div>
                <div>V jehličí 2106/2, Krč,</div> <div>Praha 4, 142 00,</div>{' '}
                <div>{TRANSLATIONS.FOOTER_ADDRESS_COUNTRY}</div>
              </>
            }
          />
        </address>
      </section>
    </div>
    <div className={style.footerBottom}>
      <p className={style.copyright}>
        Lukas Cizek & Thi Phuong Vo © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);
