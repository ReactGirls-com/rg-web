'use client';

import { useState } from 'react';

import { BorderBox } from '@/src/components/BorderBox';
import style from './FaqItem.module.scss';

type FaqItemProps = {
  question: string;
  answer: string;
  questionColor: string;
};

export const FaqItem = ({ question, answer, questionColor }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BorderBox className={style.faqItem}>
      <dl className={style.faqList}>
        <dt>
          <button
            className={style.questionButton}
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? 'Skrýt' : 'Zobrazit'} odpověď na otázku: ${question}`}
            type="button"
            style={{ '--question-color': questionColor } as React.CSSProperties}
          >
            <span className={style.questionText}>{question}</span>
            <span className={style.toggleIcon} aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </button>
        </dt>
        <dd className={`${style.answerContainer} ${isOpen ? style.open : ''}`}>
          <p className={style.answerText}>{answer}</p>
        </dd>
      </dl>
    </BorderBox>
  );
};
