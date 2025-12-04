import { SecondaryHero } from '@/src/components/SecondaryHero';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { AreYouLostBanner } from '@/src/components/AreYouLostBanner/AreYouLostBanner';
import { WhyChooseCoursesSection } from './components';
import { StepProcess } from '@/src/components/StepProcess';

const CoursesPage = () => (
  <>
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

    <Section
      heading={
        <>
          {TRANSLATIONS.COURSES_REGISTRATION_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {TRANSLATIONS.COURSES_REGISTRATION_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {TRANSLATIONS.COURSES_REGISTRATION_SECTION_HEADING_AFTER}
        </>
      }
    >
      <AreYouLostBanner
        title={TRANSLATIONS.COURSES_REGISTRATION_BANNER_DESCRIPTION}
        description=""
      />
    </Section>
    <WhyChooseCoursesSection />
    <StepProcess
      headingBefore={TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_BEFORE}
      headingHighlight={
        TRANSLATIONS.REGISTRATION_PROCESS_SECTION_HEADING_HIGHLIGHT
      }
      headingHighlightColor={COLORS.grapefruitPulp}
      steps={[
        {
          number: '01',
          title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_TITLE,
          description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_1_DESCRIPTION,
          color: COLORS.grapefruitPulp,
        },
        {
          number: '02',
          title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_TITLE,
          description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_2_DESCRIPTION,
          color: COLORS.aztecAtom,
        },
        {
          number: '03',
          title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_TITLE,
          description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_3_DESCRIPTION,
          color: COLORS.paleLavender,
        },
        {
          number: '04',
          title: TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_TITLE,
          description: TRANSLATIONS.REGISTRATION_PROCESS_STEP_4_DESCRIPTION,
          color: COLORS.explodingStar,
        },
      ]}
    />

    <Section>
      <AreYouLostBanner />
    </Section>
  </>
);

export default CoursesPage;
