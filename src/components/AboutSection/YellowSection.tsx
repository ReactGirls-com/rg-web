'use client';

import { useEffect, useRef, useState } from 'react';

import { DataCard } from './DataCard';
import { TRANSLATIONS } from '@/src/constants/translations';
import style from './YellowSection.module.scss';

export const YellowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const timeoutRef = setTimeout(() => setStartAnimation(true), 0);

      return () => clearTimeout(timeoutRef);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={style.container}>
      <div className={style.textContent}>
        <h2 className={style.heading}>
          {TRANSLATIONS.WHY_REACT_GIRLS_HEADING}
        </h2>
        <p className={style.paragraph}>
          {TRANSLATIONS.WHY_REACT_GIRLS_PARAGRAPH}
        </p>
        <ul className={style.bulletList}>
          <li className={style.bulletItem}>
            {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_1}
          </li>
          <li className={style.bulletItem}>
            {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_2}
          </li>
          <li className={style.bulletItem}>
            {TRANSLATIONS.WHY_REACT_GIRLS_BULLET_POINTS_3}
          </li>
        </ul>
      </div>

      <div className={style.dataGrid}>
        <DataCard
          value={97}
          valueSuffix="%"
          label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_SATISFACTION_LABEL}
          colorClassName={style.explodingStar}
          animate={startAnimation}
        />
        <DataCard
          value="4.9"
          label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_RATING_LABEL}
          colorClassName={style.aztecAtom}
          showStar
        />
        <DataCard
          value={900}
          valueSuffix="+"
          label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_MEMBERS_LABEL}
          colorClassName={style.paleLavender}
          animate={startAnimation}
        />
        <DataCard
          value="24/7"
          label={TRANSLATIONS.WHY_REACT_GIRLS_STATS_SUPPORT_LABEL}
          colorClassName={style.grapefruitPulp}
        />
      </div>
    </section>
  );
};
