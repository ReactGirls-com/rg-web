import {
  getTranslationsWithLocale,
  getTranslations,
  getLocaleFromParams,
} from '@/src/utils/getTranslations';
import { SecondaryHero } from '@/src/components/SecondaryHero';
import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { CtaBanner } from '@/src/components/CtaBanner';
import { Button } from '@/src/components/Button';
import { BasicCard } from '@/src/components/BasicCard';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { AppLocalePageProps } from '@/src/utils/types';
import { MENTORING_LINK, PREREQUISITE_CHECK_URL } from '@/src/constants';
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
        titleColor={COLORS.grapefruitPulp}
        headingBefore={t.REACT_ACADEMY_HERO_HEADING_BEFORE}
        headingHighlight={t.REACT_ACADEMY_HERO_HEADING_HIGHLIGHT}
        headingAfter={t.REACT_ACADEMY_HERO_HEADING_AFTER}
        subheading={t.REACT_ACADEMY_HERO_SUBHEADING}
        dataCards={[
          {
            value: 45,
            valueSuffix: t.SUFFIX_HOURS,
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
            value: '2 490 Kč',
            label: t.REACT_ACADEMY_STATS_PRICE,
          },
        ]}
      />

      <Section
        heading={
          <>
            {t.REACT_ACADEMY_LEARN_HEADING_BEFORE}{' '}
            <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
              {t.REACT_ACADEMY_LEARN_HEADING_HIGHLIGHT}
            </HeadingHighlight>
          </>
        }
      >
        <div className={style.cardsGrid}>
          <BasicCard
            iconClassName={style.iconReact}
            title={t.REACT_ACADEMY_LEARN_CARD_1_TITLE}
            description={t.REACT_ACADEMY_LEARN_CARD_1_DESCRIPTION}
            iconColor={COLORS.grapefruitPulp}
          />
          <BasicCard
            iconClassName={style.iconGit}
            title={t.REACT_ACADEMY_LEARN_CARD_2_TITLE}
            description={t.REACT_ACADEMY_LEARN_CARD_2_DESCRIPTION}
            iconColor={COLORS.aztecAtom}
          />
          <BasicCard
            iconClassName={style.iconTypescript}
            title={t.REACT_ACADEMY_LEARN_CARD_3_TITLE}
            description={t.REACT_ACADEMY_LEARN_CARD_3_DESCRIPTION}
            iconColor={COLORS.explodingStar}
          />
        </div>
      </Section>

      <Section
        heading={
          <>
            {t.REACT_ACADEMY_PREREQUISITES_HEADING_BEFORE}{' '}
            <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
              {t.REACT_ACADEMY_PREREQUISITES_HEADING_HIGHLIGHT}
            </HeadingHighlight>
          </>
        }
        subheading={t.REACT_ACADEMY_PREREQUISITES_DESCRIPTION}
      >
        {null}
      </Section>

      <Section>
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
      </Section>

      <Section>
        <CtaBanner
          title={t.REACT_ACADEMY_TEST_CTA_TITLE}
          description={t.REACT_ACADEMY_TEST_CTA_DESCRIPTION}
          className={style.testCtaBanner}
        >
          <Button variant="explodingStar" href={PREREQUISITE_CHECK_URL}>
            {t.REACT_ACADEMY_TEST_CTA_BUTTON}
          </Button>
        </CtaBanner>
      </Section>

      <Section
        heading={
          <>
            {t.REACT_ACADEMY_SCHEDULE_HEADING_BEFORE}{' '}
            <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
              {t.REACT_ACADEMY_SCHEDULE_HEADING_HIGHLIGHT}
            </HeadingHighlight>
          </>
        }
        subheading={t.REACT_ACADEMY_SCHEDULE_DESCRIPTION}
      >
        {null}
      </Section>
    </>
  );
};

export default ReactAcademyPage;
