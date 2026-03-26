import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
  getHourSuffix,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { AppLocalePageProps } from '@/src/utils/types';
import { MENTORING_LINK } from '@/src/constants';
import { WhatYouGonnaLearnSection } from './components/WhatYouGonnaLearnSection/WhatYouGonnaLearnSection';
import { PrerequisitesSection } from './components/PrerequisitesSection/PrerequisitesSection';
import { ScheduleSection } from './components/ScheduleSection/ScheduleSection';
import style from './page.module.scss';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_REACT_ACADEMY_TITLE,
    description: t.META_REACT_ACADEMY_DESCRIPTION,
    alternates: getPageAlternates('/courses/react-akademie', locale),
  };
};

const ReactAcademyPage: React.FC<AppLocalePageProps> = async ({ params }) => {
  const locale = await getLocaleFromParams(params);
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.aztecAtom}
        headingBefore={t.REACT_ACADEMY_HERO_HEADING_BEFORE}
        headingHighlight={t.REACT_ACADEMY_HERO_HEADING_HIGHLIGHT}
        headingAfter={t.REACT_ACADEMY_HERO_HEADING_AFTER}
        subheading={t.REACT_ACADEMY_HERO_SUBHEADING}
        dataCards={[
          {
            value: 45,
            valueSuffix: getHourSuffix(locale, 45),
            label: t.REACT_ACADEMY_STATS_HOURS,
          },
          {
            value: t.REACT_ACADEMY_STATS_LOCATION,
            label: t.REACT_ACADEMY_STATS_LOCATION_SUFFIX,
          },
          {
            value: 12,
            valueSuffix: t.SUFFIX_LESSONS,
            label: t.REACT_ACADEMY_STATS_LESSONS,
          },
          {
            value: t.REACT_ACADEMY_STATS_PRICE_VALUE,
            label: t.REACT_ACADEMY_STATS_PRICE,
          },
        ]}
        contentAfterCards={
          <CtaBanner
            title={t.REACT_ACADEMY_TIP_CTA_TITLE}
            description={t.REACT_ACADEMY_TIP_CTA_DESCRIPTION}
            className={style.tipCtaBanner}
          >
            <Button
              variant="explodingStar"
              href={getLocaleAwareLink(MENTORING_LINK, locale)}
            >
              {t.REACT_ACADEMY_TIP_CTA_BUTTON}
            </Button>
          </CtaBanner>
        }
      />

      <WhatYouGonnaLearnSection />
      <PrerequisitesSection />
      <ScheduleSection />
    </>
  );
};

export default ReactAcademyPage;
