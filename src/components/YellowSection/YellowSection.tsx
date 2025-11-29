'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { CountUp } from './CountUp';
import style from './YellowSection.module.scss';

type DataCardProps = {
  value: string;
  label: string;
  valueColor?: 'red' | 'blue' | 'purple' | 'orange';
  showStar?: boolean;
  startAnimation?: boolean;
};

const parseValue = (value: string) => {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)?$/);

  if (!match) {
    return { number: null, suffix: value };
  }

  return {
    number: parseFloat(match[1]),
    suffix: match[2] || '',
  };
};

const DataCard: React.FC<DataCardProps> = ({
  value,
  label,
  valueColor = 'blue',
  showStar = false,
  startAnimation = false,
}) => {
  const { number, suffix } = parseValue(value);
  const isDecimal = number !== null && !Number.isInteger(number);

  return (
    <div className={style.dataCard}>
      <div
        className={clsx(style.valueWrapper, {
          [style.valueRed]: valueColor === 'red',
          [style.valueBlue]: valueColor === 'blue',
          [style.valuePurple]: valueColor === 'purple',
          [style.valueOrange]: valueColor === 'orange',
        })}
      >
        {number !== null && startAnimation ? (
          <>
            {isDecimal ? (
              <>
                <CountUp to={Math.floor(number)} duration={800} />
                {`.${String(number).split('.')[1]}`}
              </>
            ) : (
              <CountUp to={number} duration={1000} />
            )}
            {suffix}
          </>
        ) : (
          value
        )}
        {showStar && <span className={style.star}>★</span>}
      </div>
      <p className={style.dataLabel}>{label}</p>
    </div>
  );
};

type YellowSectionProps = {
  heading: string;
  paragraph: string;
  bulletPoints: string[];
  dataCards: DataCardProps[];
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
    <section ref={sectionRef} className={style.yellowSection}>
      <div className={style.content}>
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
