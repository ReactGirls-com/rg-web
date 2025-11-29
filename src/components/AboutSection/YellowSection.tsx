'use client';

import { useEffect, useRef, useState } from 'react';

import { DataCard, DataCardProps } from './DataCard';
import style from './YellowSection.module.scss';

type YellowSectionProps = {
  heading: string;
  paragraph: string;
  bulletPoints: string[];
  dataCards: Omit<DataCardProps, 'startAnimation'>[];
};

export const YellowSection: React.FC<YellowSectionProps> = ({
  heading,
  paragraph,
  bulletPoints,
  dataCards,
}) => {
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
        <h2 className={style.heading}>{heading}</h2>
        <p className={style.paragraph}>{paragraph}</p>
        <ul className={style.bulletList}>
          {bulletPoints.map((point, index) => (
            <li key={index} className={style.bulletItem}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.dataGrid}>
        {dataCards.map((card, index) => (
          <DataCard key={index} {...card} startAnimation={startAnimation} />
        ))}
      </div>
    </section>
  );
};
