import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { COLORS } from '@/src/styles/color';
import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { AreYouLostBanner } from '@/src/components/AreYouLostBanner/AreYouLostBanner';
import { WhyChooseCoursesSection } from './components';
import { StepProcess } from '@/src/components/StepProcess';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { SUFFIX } from '@/src/constants';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_COURSES_TITLE,
    description: t.META_COURSES_DESCRIPTION,
    alternates: getPageAlternates('/courses', locale),
  };
};

const CoursesPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.grapefruitPulp}
        headingBefore={t.COURSES_SECTION_HEADING_BEFORE}
        headingHighlight={t.COURSES_SECTION_HEADING_HIGHLIGHT}
        subheading={t.COURSES_SECTION_SUBHEADING}
        dataCards={[
          {
            value: 350,
            valueSuffix: SUFFIX.plus,
            label: t.COURSES_STATS_GRADUATES_LABEL,
          },
          {
            value: 96,
            valueSuffix: SUFFIX.percent,
            label: t.COURSES_STATS_COMPLETION_LABEL,
          },
          {
            value: 10,
            valueSuffix: SUFFIX.plus,
            label: t.COURSES_STATS_LECTURERS_LABEL,
          },
          {
            value: 80,
            valueSuffix: SUFFIX.plus,
            label: t.COURSES_STATS_LESSONS_LABEL,
          },
        ]}
      />

      <Section
        heading={
          <>
            {t.COURSES_REGISTRATION_SECTION_HEADING_BEFORE}{' '}
            <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
              {t.COURSES_REGISTRATION_SECTION_HEADING_HIGHLIGHT}
            </HeadingHighlight>{' '}
            {t.COURSES_REGISTRATION_SECTION_HEADING_AFTER}
          </>
        }
      >
        <AreYouLostBanner
          title={t.COURSES_REGISTRATION_BANNER_DESCRIPTION}
          description=""
        />
      </Section>
      <WhyChooseCoursesSection />
      <StepProcess
        headingBefore={t.REGISTRATION_PROCESS_SECTION_HEADING_BEFORE}
        headingHighlight={t.REGISTRATION_PROCESS_SECTION_HEADING_HIGHLIGHT}
        headingHighlightColor={COLORS.grapefruitPulp}
        steps={[
          {
            number: '01',
            title: t.REGISTRATION_PROCESS_STEP_1_TITLE,
            description: t.REGISTRATION_PROCESS_STEP_1_DESCRIPTION,
            color: COLORS.grapefruitPulp,
          },
          {
            number: '02',
            title: t.REGISTRATION_PROCESS_STEP_2_TITLE,
            description: t.REGISTRATION_PROCESS_STEP_2_DESCRIPTION,
            color: COLORS.aztecAtom,
          },
          {
            number: '03',
            title: t.REGISTRATION_PROCESS_STEP_3_TITLE,
            description: t.REGISTRATION_PROCESS_STEP_3_DESCRIPTION,
            color: COLORS.paleLavender,
          },
          {
            number: '04',
            title: t.REGISTRATION_PROCESS_STEP_4_TITLE,
            description: t.REGISTRATION_PROCESS_STEP_4_DESCRIPTION,
            color: COLORS.explodingStar,
          },
        ]}
      />

      <Section>
        <AreYouLostBanner title={t.CTA_TITLE} description={t.CTA_DESCRIPTION} />
      </Section>
    </>
  );
};

export default CoursesPage;
