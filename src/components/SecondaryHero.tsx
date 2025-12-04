import { ReactNode } from 'react';

import { Section } from './Section';
import { HeadingHighlight } from './HeadingHighlight';
import { DataCard } from './DataCard';
import style from './SecondaryHero.module.scss';

const colorClasses = [
  style.grapefruitPulp,
  style.aztecAtom,
  style.paleLavender,
  style.explodingStar,
];

type DataCardItem = {
  value: number | string;
  valueSuffix?: string;
  label: string;
  showStar?: boolean;
};

type SecondaryHeroProps = {
  titleText: string;
  titleColor: string;
  headingBefore: string;
  headingHighlight: string;
  headingAfter?: string;
  subheading: string;
  dataCards?: DataCardItem[];
  children?: ReactNode;
};

export const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  titleText,
  titleColor,
  headingBefore,
  headingHighlight,
  headingAfter,
  subheading,
  dataCards,
  children,
}) => (
  <Section
    titleText={titleText}
    titleColor={titleColor}
    heading={
      <>
        {headingBefore}{' '}
        <HeadingHighlight highlightColor={titleColor}>
          {headingHighlight}
        </HeadingHighlight>
        {headingAfter && ` ${headingAfter}`}
      </>
    }
    headingClassName={style.heading}
    subheading={subheading}
  >
    {children}

    {dataCards && dataCards.length > 0 && (
      <div className={style.dataGrid}>
        {dataCards.map((card, index) => (
          <DataCard
            key={card.label}
            value={card.value}
            valueSuffix={card.valueSuffix}
            label={card.label}
            shouldAnimate={typeof card.value === 'number'}
            colorClassName={colorClasses[index]}
            showStar={card.showStar}
          />
        ))}
      </div>
    )}
  </Section>
);
