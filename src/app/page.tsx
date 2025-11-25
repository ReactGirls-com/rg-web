import Image from 'next/image';

import logo from '../assets/logo.svg';
import style from './page.module.scss';

const Home = () => (
  <>
    <header className={style.header}>
      <Image src={logo} alt="ReactGirls" width={200} height={40} priority />
    </header>
    <main className={style.content}>
      <h1 className={style.title}>ReactGirls</h1>
    </main>
    <footer className={style.footer}>
      Lukas Cizek & Thi Phuong Vo © {new Date().getFullYear()}
    </footer>
  </>
);

export default Home;
