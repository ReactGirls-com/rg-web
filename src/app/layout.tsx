import '../styles/globalStyles.scss';

import localFont from 'next/font/local';
import Link from 'next/link';

import { CustomLink } from '../components/CustomLink';
import { ChildrenFC } from '../utils/types';
import { NAV_LINKS } from '../constants';
import { Footer } from '../components/Footer/Footer';
import style from './layout.module.scss';

const inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const RootLayout: ChildrenFC = ({ children }) => (
  <html lang="cs" className={inter.variable}>
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
