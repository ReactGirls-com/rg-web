import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
  getHourSuffix,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { Button } from '@/src/components/Button';
import { AI_JAM_REGISTRATION_LINK } from '@/src/constants';
import { EventIntroSection } from './EventIntroSection';
import { AboutCourseSection } from './AboutCourseSection';
import { TopicProposalsSection } from './TopicProposalsSection';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_AI_JAM_TITLE,
    description: t.META_AI_JAM_DESCRIPTION,
    alternates: getPageAlternates('/courses/ai-jam', locale),
  };
};

const AIJamPage: React.FC = async () => {
  const { locale, t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.paleLavender}
        headingBefore={t.AI_JAM_HERO_HEADING_BEFORE}
        headingHighlight={t.AI_JAM_HERO_HEADING_HIGHLIGHT}
        subheading={t.AI_JAM_HERO_SUBHEADING}
        dataCards={[
          {
            value: t.AI_JAM_STATS_FORMAT,
            label: t.AI_JAM_STATS_FORMAT_SUFFIX,
          },
          {
            value: 3,
            valueSuffix: getHourSuffix(locale, 3),
            label: t.AI_JAM_STATS_HOURS,
          },
          {
            value: t.AI_JAM_STATS_LOCATION,
            label: t.AI_JAM_STATS_LOCATION_SUFFIX,
          },
          {
            value: t.AI_JAM_STATS_PRICE_VALUE,
            label: t.AI_JAM_STATS_PRICE,
          },
        ]}
      >
        <Button
          variant="grapefruitPulp"
          href={AI_JAM_REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.REACT_ACADEMY_HERO_BUTTON}
        </Button>
      </SecondaryHero>
      <AboutCourseSection />

      <EventIntroSection />

      <TopicProposalsSection />
    </>
  );
};

export default AIJamPage;
