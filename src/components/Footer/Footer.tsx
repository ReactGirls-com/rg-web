import Link from 'next/link';

import { NAV_LINKS } from '@/src/app/constants';
import { CustomLink } from '../CustomLink';
import { ContactRow } from './ContactRow';
import { SocialLink } from './SocialLink';
import contactRowStyle from './ContactRow.module.scss';
import socialLinkStyle from './SocialLink.module.scss';
import style from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <div className={style.footerContent}>
      <section>
        <Link
          href="/"
          className={style.footerLogo}
          aria-label="ReactGirls - Home"
        >
          <span className="visually-hidden">ReactGirls</span>
        </Link>
        <p className={style.footerDescription}>
          Empowering women to start and thrive in their tech careers through
          education, mentorship, and community.
        </p>
        <nav className={style.socialLinks} aria-label="Social media links">
          <SocialLink
            href="https://www.instagram.com/reactgirlsprague/"
            ariaLabel="Visit our Instagram page"
            label="Instagram"
            iconClass={socialLinkStyle.socialIconInstagram}
          />
          <SocialLink
            href="https://www.facebook.com/ReactGirlsPrague/"
            ariaLabel="Visit our Facebook page"
            label="Facebook"
            iconClass={socialLinkStyle.socialIconFacebook}
          />
          <SocialLink
            href="https://www.linkedin.com/company/reactgirlsprague/posts/?feedView=all"
            ariaLabel="Visit our LinkedIn page"
            label="LinkedIn"
            iconClass={socialLinkStyle.socialIconLinkedin}
          />
        </nav>
      </section>
      <nav aria-label="Footer navigation">
        <h2 className={style.footerNavTitle}>Quick Links</h2>
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
        <h2 className={style.footerContactTitle}>Get in Touch</h2>
        <address className={style.contactInfo}>
          <ContactRow
            iconClass={contactRowStyle.contactIconEmail}
            label="Email"
            value="hello@reactgirls.com"
          />
          <ContactRow
            iconClass={contactRowStyle.contactIconPhone}
            label="Phone"
            value="+1 (234) 567-890"
          />
          <ContactRow
            iconClass={contactRowStyle.contactIconPin}
            label="Location"
            value="San Francisco, CA"
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
