import '../styles/globalStyles.scss';

import Link from 'next/link';

import { CustomLink } from '../components/CustomLink';
import { ChildrenFC } from '../utils/types';
import { NAV_LINKS } from '../constants';
import { Footer } from '../components/Footer/Footer';
import style from './layout.module.scss';

const RootLayout: ChildrenFC = ({ children }) => (
  <html lang="cs">
    <body className={style.body}>
      <header className={style.header}>
        <Link href="/" className={style.logo} aria-label="ReactGirls - Home">
          <span className="visually-hidden">ReactGirls</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className={style.headerNavLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <CustomLink
                  className={style.headerNavItem}
                  activeClassName={style.headerNavItemActive}
                  href={href}
                >
                  {label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={style.content}>{children}</main>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
