import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
  getHourSuffix,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { Button } from '@/src/components/Button';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';
import { BACKEND_ACADEMY_REGISTRATION_LINK } from '@/src/constants';
import { isCourseRegistrationOpen } from '@/src/utils/isCourseRegistrationOpen';
import { WhatYouGonnaLearnSection } from './components/WhatYouGonnaLearnSection/WhatYouGonnaLearnSection';
import { PrerequisitesSection } from './components/PrerequisitesSection/PrerequisitesSection';
import { CalendarSection } from './components/CalendarSection/CalendarSection';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_BACKEND_ACADEMY_TITLE,
    description: t.META_BACKEND_ACADEMY_DESCRIPTION,
    alternates: getPageAlternates('/courses/backend-akademie', locale),
  };
};

const BackendAcademyPage: React.FC<AppLocalePageProps> = async ({ params }) => {
  const locale = await getLocaleFromParams(params);
  const { t } = await getTranslationsWithLocale();
  const registrationOpen = isCourseRegistrationOpen();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.grapefruitPulp}
        headingBefore={t.BACKEND_ACADEMY_HERO_HEADING_BEFORE}
        headingHighlight={t.BACKEND_ACADEMY_HERO_HEADING_HIGHLIGHT}
        headingAfter={t.BACKEND_ACADEMY_HERO_HEADING_AFTER}
        subheading={t.BACKEND_ACADEMY_HERO_SUBHEADING}
        dataCards={[
          {
            value: 24,
            valueSuffix: getHourSuffix(locale, 24),
            label: t.BACKEND_ACADEMY_STATS_HOURS,
          },
          {
            value: t.BACKEND_ACADEMY_STATS_LOCATION,
            label: t.BACKEND_ACADEMY_STATS_LOCATION_SUFFIX,
          },
          {
            value: 7,
            valueSuffix: t.SUFFIX_LESSONS,
            label: t.BACKEND_ACADEMY_STATS_LESSONS,
          },
          {
            value: t.BACKEND_ACADEMY_STATS_PRICE_VALUE,
            label: t.BACKEND_ACADEMY_STATS_PRICE,
          },
        ]}
      >
        {registrationOpen && (
          <Button
            variant="grapefruitPulp"
            href={BACKEND_ACADEMY_REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.BACKEND_ACADEMY_HERO_BUTTON}
          </Button>
        )}
      </SecondaryHero>

      <WhatYouGonnaLearnSection />
      <PrerequisitesSection />
      <CalendarSection />
    </>
  );
};

export default BackendAcademyPage;
