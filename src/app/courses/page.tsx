import { SecondaryHero } from '@/src/components/SecondaryHero';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';

const CoursesPage = () => (
  <SecondaryHero
    titleText={TRANSLATIONS.COURSES_SECTION_TITLE}
    titleColor={COLORS.grapefruitPulp}
    headingBefore={TRANSLATIONS.COURSES_SECTION_HEADING_BEFORE}
    headingHighlight={TRANSLATIONS.COURSES_SECTION_HEADING_HIGHLIGHT}
    subheading={TRANSLATIONS.COURSES_SECTION_SUBHEADING}
    dataCards={[
      {
        value: 350,
        valueSuffix: '+',
        label: TRANSLATIONS.COURSES_STATS_GRADUATES_LABEL,
      },
      {
        value: 96,
        valueSuffix: '%',
        label: TRANSLATIONS.COURSES_STATS_COMPLETION_LABEL,
      },
      {
        value: 10,
        valueSuffix: '+',
        label: TRANSLATIONS.COURSES_STATS_LECTURERS_LABEL,
      },
      {
        value: 80,
        valueSuffix: '+',
        label: TRANSLATIONS.COURSES_STATS_LESSONS_LABEL,
      },
    ]}
  />
);

export default CoursesPage;
