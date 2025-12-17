import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { COLORS } from '@/src/styles/color';
import {
  WhyChooseMentoringSection,
  MentoringRegistrationProcess,
  MentoringBenefitsSection,
  MentoringCtaSection,
} from './components';

const MentoringPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.paleLavender}
        headingBefore={t.MENTORING_SECTION_HEADING_BEFORE}
        headingHighlight={t.MENTORING_SECTION_HEADING_HIGHLIGHT}
        subheading={t.MENTORING_SECTION_SUBHEADING}
        dataCards={[
          {
            value: 45,
            valueSuffix: '+',
            label: t.MENTORING_STATS_GRADUATES_LABEL,
          },
          {
            value: 15,
            valueSuffix: '+',
            label: t.MENTORING_STATS_MENTORS_LABEL,
          },
          {
            value: 4,
            valueSuffix: t.MENTORING_STATS_DURATION_SUFFIX,
            label: t.MENTORING_STATS_DURATION_LABEL,
          },
          {
            value: 97,
            valueSuffix: '%',
            label: t.MENTORING_STATS_RECOMMENDATION_LABEL,
          },
        ]}
      />
      <WhyChooseMentoringSection />
      <MentoringRegistrationProcess />
      <MentoringBenefitsSection />
      <MentoringCtaSection />
    </>
  );
};

export default MentoringPage;
