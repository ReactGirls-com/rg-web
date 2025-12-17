import Link from 'next/link';

import { SOCIAL_LINKS } from '@/src/constants';
import { CustomLink } from '../../../components/CustomLink';
import { IconButton } from '@/src/components/IconButton';
import { ContactRow } from './ContactRow';
import { LanguageSwitcher } from '@/src/components/LanguageSwitcher';
import { getNavLinks } from '@/src/utils/getNavLinks';
import type { Translations } from '@/src/utils/getTranslations';
import style from './Footer.module.scss';

type FooterProps = {
  t: Translations;
};

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const navLinks = getNavLinks(t);

  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <section>
          <Link
            href="/"
            className={style.footerLogo}
            aria-label={t.ARIA_REACTGIRLS_HOME}
          >
            <span className="visually-hidden">ReactGirls</span>
          </Link>
          <p className={style.footerDescription}>{t.FOOTER_CLAIM}</p>
          <LanguageSwitcher />
          <nav
            className={style.socialLinks}
            aria-label={t.ARIA_SOCIAL_MEDIA_LINKS}
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
        <nav aria-label={t.ARIA_FOOTER_NAVIGATION}>
          <h2 className={style.footerNavTitle}>{t.FOOTER_NAV_TITLE}</h2>
          <ul className={style.footerNavLinks}>
            {navLinks.map(({ label, href }) => (
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
          <h2 className={style.footerContactTitle}>{t.FOOTER_CONTACT_TITLE}</h2>
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
                  <div>V jehličí 2106/2, Krč,</div> <div>Praha 4, 142 00</div>
                  <div>{t.FOOTER_ADDRESS_COUNTRY}</div>
                  <div>IČO 09587535</div>
                  <div>DIČ CZ09587535</div>
                </>
              }
            />
          </address>
        </section>
        <section>
          <h2 className={style.footerContactTitle}>{t.FOOTER_BANK_TITLE}</h2>
          <address className={style.contactInfo}>
            <ContactRow
              iconClass={style.contactIconCard}
              value={
                <>
                  <div>Fio banka a. s.,</div>
                  <div>V Celnici 1028/10,</div>
                  <div>117 21 Praha 1</div>
                  <div>Č. ú.: 2001890593/2010</div>
                  <div>IBAN: CZ3020100000002001890593</div>
                  <div>BIC/SWIFT: FIOBCZPPXXX</div>
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
};
