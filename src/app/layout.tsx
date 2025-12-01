import '../styles/globalStyles.scss';

import localFont from 'next/font/local';
import Link from 'next/link';

import { NavLinks } from './components/NavLinks';
import { Header } from './components/Header';
import { ChildrenFC } from '../utils/types';
import { Footer } from './components/Footer/Footer';
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

        <Header logoClassName={style.logo} />

        <nav aria-label="Main navigation" className={style.headerNav}>
          <NavLinks listClassName={style.headerNavLinks} />
        </nav>
      </header>
      <main className={style.content}>{children}</main>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
