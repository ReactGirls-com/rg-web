import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { BorderBox } from '@/src/components/BorderBox';
import style from './MentoringBenefitsSection.module.scss';

const benefits = [
  TRANSLATIONS.MENTORING_BENEFITS_1,
  TRANSLATIONS.MENTORING_BENEFITS_2,
  TRANSLATIONS.MENTORING_BENEFITS_3,
  TRANSLATIONS.MENTORING_BENEFITS_4,
  TRANSLATIONS.MENTORING_BENEFITS_5,
  TRANSLATIONS.MENTORING_BENEFITS_6,
  TRANSLATIONS.MENTORING_BENEFITS_7,
  TRANSLATIONS.MENTORING_BENEFITS_8,
  TRANSLATIONS.MENTORING_BENEFITS_9,
];

export const MentoringBenefitsSection = () => (
  <Section
    heading={
      <>
        {TRANSLATIONS.MENTORING_BENEFITS_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.aztecAtom}>
          {TRANSLATIONS.MENTORING_BENEFITS_HEADING_HIGHLIGHT}
        </HeadingHighlight>{' '}
        {TRANSLATIONS.MENTORING_BENEFITS_HEADING_AFTER}
      </>
    }
  >
    <div className={style.benefitsContainer}>
      {benefits.map((benefit) => (
        <BorderBox key={benefit} className={style.benefitCard}>
          <div className={style.iconWrapper}>
            <div className={style.iconCircleCheck} />
          </div>
          <p className={style.benefitText}>{benefit}</p>
        </BorderBox>
      ))}
    </div>
  </Section>
);
