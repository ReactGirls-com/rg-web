import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import { BorderBox } from '@/src/components/BorderBox';
import style from './MentoringBenefitsSection.module.scss';

export const MentoringBenefitsSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();
  const benefits = [
    t.MENTORING_BENEFITS_1,
    t.MENTORING_BENEFITS_2,
    t.MENTORING_BENEFITS_3,
    t.MENTORING_BENEFITS_4,
    t.MENTORING_BENEFITS_5,
    t.MENTORING_BENEFITS_6,
    t.MENTORING_BENEFITS_7,
    t.MENTORING_BENEFITS_8,
    t.MENTORING_BENEFITS_9,
  ];

  return (
    <Section
      heading={
        <>
          {t.MENTORING_BENEFITS_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.MENTORING_BENEFITS_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.MENTORING_BENEFITS_HEADING_AFTER}
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
};
