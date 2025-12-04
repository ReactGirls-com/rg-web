import { SecondaryHero } from '@/src/components/SecondaryHero';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

const MentoringPage = () => (
  <SecondaryHero
    titleText={TRANSLATIONS.MENTORING_SECTION_TITLE}
    titleColor={COLORS.paleLavender}
    headingBefore={TRANSLATIONS.MENTORING_SECTION_HEADING_BEFORE}
    headingHighlight={TRANSLATIONS.MENTORING_SECTION_HEADING_HIGHLIGHT}
    subheading={TRANSLATIONS.MENTORING_SECTION_SUBHEADING}
    dataCards={[
      {
        value: 45,
        valueSuffix: '+',
        label: TRANSLATIONS.MENTORING_STATS_GRADUATES_LABEL,
      },
      {
        value: 15,
        valueSuffix: '+',
        label: TRANSLATIONS.MENTORING_STATS_MENTORS_LABEL,
      },
      {
        value: 4,
        valueSuffix: ' měsíce',
        label: TRANSLATIONS.MENTORING_STATS_DURATION_LABEL,
      },
      {
        value: 97,
        valueSuffix: '%',
        label: TRANSLATIONS.MENTORING_STATS_RECOMMENDATION_LABEL,
      },
    ]}
  />
);

export default MentoringPage;
