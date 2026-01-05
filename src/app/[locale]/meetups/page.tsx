import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { Button } from '@/src/components/Button';
import { COLORS } from '@/src/styles/color';
import { MeetupsHowItWorks } from './components/MeetupsHowItWorks';
import { MeetupsCtaSection } from './components/MeetupsCtaSection';
import { PastMeetupsSection } from './components/PastMeetupsSection';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { AppLocalePageProps } from '@/src/utils/types';

export const generateMetadata = async ({ params }: AppLocalePageProps) => {
  const locale = await getLocaleFromParams(params);
  const t = getTranslations(locale);

  return {
    title: t.META_MEETUPS_TITLE,
    description: t.META_MEETUPS_DESCRIPTION,
    alternates: getPageAlternates('/meetups', locale),
  };
};

const MeetupsPage: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <>
      <SecondaryHero
        titleColor={COLORS.aztecAtom}
        headingBefore={t.MEETUPS_SECTION_HEADING_BEFORE}
        headingHighlight={t.MEETUPS_SECTION_HEADING_HIGHLIGHT}
        headingAfter={t.MEETUPS_SECTION_HEADING_AFTER}
        subheading={t.MEETUPS_SECTION_SUBHEADING}
        dataCards={[
          {
            value: 40,
            valueSuffix: '+',
            label: t.MEETUPS_STATS_PAST_MEETUPS_LABEL,
          },
          {
            value: 1200,
            valueSuffix: '+',
            label: t.MEETUPS_STATS_MEMBERS_LABEL,
          },
          {
            value: 70,
            valueSuffix: '+',
            label: t.MEETUPS_STATS_SPEAKERS_LABEL,
          },
          {
            value: '4.9',
            label: t.MEETUPS_STATS_RATING_LABEL,
            showStar: true,
          },
        ]}
      >
        <Button
          variant="grapefruitPulp"
          href="https://www.meetup.com/reactgirls/"
        >
          {t.MEETUPS_SECTION_BUTTON}
        </Button>
      </SecondaryHero>
      <MeetupsHowItWorks />
      <PastMeetupsSection />
      <MeetupsCtaSection />
    </>
  );
};

export default MeetupsPage;
