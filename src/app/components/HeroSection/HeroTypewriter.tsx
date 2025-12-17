'use client';

import { useTypewriter } from '@/src/hooks/useTypewriter';
import style from './HeroTypewriter.module.scss';

type HeroTypewriterProps = {
  words: string[];
};

export const HeroTypewriter: React.FC<HeroTypewriterProps> = ({ words }) => {
  const { displayedText } = useTypewriter(words);

  return (
    <span className={style.typewriterText}>
      {displayedText}
      <span className={style.cursor} aria-hidden="true" />
    </span>
  );
};
