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
import { Checklist } from '@/src/components/Checklist';
import { BorderBox } from '@/src/components/BorderBox';
import { IconWrapper } from '@/src/components/IconWrapper';
import { COLORS } from '@/src/styles/color';
import { getPageAlternates } from '@/src/utils/getCanonicalUrl';
import { getLocaleAwareLink } from '@/src/utils/getNavLinks';
import { AppLocalePageProps } from '@/src/utils/types';
import {
  MENTORING_LINK,
  PREREQUISITE_CHECK_URL,
  REACT_ACADEMY_REGISTRATION_LINK,
} from '@/src/constants';
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
            value: t.REACT_ACADEMY_STATS_PRICE_VALUE,
            label: t.REACT_ACADEMY_STATS_PRICE,
          },
        ]}
      >
        <Button
          variant="grapefruitPulp"
          href={REACT_ACADEMY_REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.REACT_ACADEMY_HERO_BUTTON}
        </Button>
      </SecondaryHero>

      <Section
        heading={
          <>
            {t.REACT_ACADEMY_LEARN_HEADING_BEFORE}{' '}
            <HeadingHighlight highlightColor={COLORS.paleLavender}>
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
            iconColor={COLORS.aztecAtom}
            checklistContent={
              <>
                <p className={style.learnChecklistSubheading}>
                  {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
                </p>
                <Checklist
                  variant="coral"
                  items={[
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_1,
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_2,
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_3,
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_4,
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_5,
                    t.REACT_ACADEMY_LEARN_CARD_1_CHECKLIST_6,
                  ]}
                  ariaLabel={t.REACT_ACADEMY_LEARN_CARD_1_TITLE}
                />
              </>
            }
          />
          <BasicCard
            iconClassName={style.iconGit}
            title={t.REACT_ACADEMY_LEARN_CARD_2_TITLE}
            description={t.REACT_ACADEMY_LEARN_CARD_2_DESCRIPTION}
            iconColor={COLORS.grapefruitPulp}
            checklistContent={
              <>
                <p className={style.learnChecklistSubheading}>
                  {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
                </p>
                <Checklist
                  variant="coral"
                  items={[
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_1,
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_2,
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_3,
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_4,
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_5,
                    t.REACT_ACADEMY_LEARN_CARD_2_CHECKLIST_6,
                  ]}
                  ariaLabel={t.REACT_ACADEMY_LEARN_CARD_2_TITLE}
                />
              </>
            }
          />
          <BasicCard
            iconClassName={style.iconTypescript}
            title={t.REACT_ACADEMY_LEARN_CARD_3_TITLE}
            description={t.REACT_ACADEMY_LEARN_CARD_3_DESCRIPTION}
            iconColor={COLORS.explodingStar}
            checklistContent={
              <>
                <p className={style.learnChecklistSubheading}>
                  {t.REACT_ACADEMY_LEARN_CHECKLIST_SUBHEADING}
                </p>
                <Checklist
                  variant="coral"
                  items={[
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_1,
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_2,
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_3,
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_4,
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_5,
                    t.REACT_ACADEMY_LEARN_CARD_3_CHECKLIST_6,
                  ]}
                  ariaLabel={t.REACT_ACADEMY_LEARN_CARD_3_TITLE}
                />
              </>
            }
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
        <div className={style.prerequisitesGrid}>
          <BorderBox as="article" className={style.scheduleCard}>
            <h3 className={style.prerequisitesCardTitle}>
              {t.REACT_ACADEMY_PREREQUISITES_HTML_TITLE}
            </h3>
            <p className={style.prerequisitesCardDescription}>
              {t.REACT_ACADEMY_PREREQUISITES_HTML_DESCRIPTION}
            </p>
            <Checklist
              items={[
                t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_1,
                t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_2,
                t.REACT_ACADEMY_PREREQUISITES_HTML_CHECKLIST_3,
              ]}
              ariaLabel={t.REACT_ACADEMY_PREREQUISITES_HTML_TITLE}
            />
          </BorderBox>
          <BorderBox as="article" className={style.scheduleCard}>
            <h3 className={style.prerequisitesCardTitle}>
              {t.REACT_ACADEMY_PREREQUISITES_JS_TITLE}
            </h3>
            <p className={style.prerequisitesCardDescription}>
              {t.REACT_ACADEMY_PREREQUISITES_JS_DESCRIPTION}
            </p>
            <Checklist
              items={[
                t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_1,
                t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_2,
                t.REACT_ACADEMY_PREREQUISITES_JS_CHECKLIST_3,
              ]}
              ariaLabel={t.REACT_ACADEMY_PREREQUISITES_JS_TITLE}
            />
          </BorderBox>
          <BorderBox as="article" className={style.scheduleCard}>
            <h3 className={style.prerequisitesCardTitle}>
              {t.REACT_ACADEMY_PREREQUISITES_CSS_TITLE}
            </h3>
            <p className={style.prerequisitesCardDescription}>
              {t.REACT_ACADEMY_PREREQUISITES_CSS_DESCRIPTION}
            </p>
            <Checklist
              items={[
                t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_1,
                t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_2,
                t.REACT_ACADEMY_PREREQUISITES_CSS_CHECKLIST_3,
              ]}
              ariaLabel={t.REACT_ACADEMY_PREREQUISITES_CSS_TITLE}
            />
          </BorderBox>
        </div>
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
            {t.REACT_ACADEMY_SCHEDULE_HEADING_BEFORE}
            <HeadingHighlight highlightColor={COLORS.aztecAtom}>
              {t.REACT_ACADEMY_SCHEDULE_HEADING_HIGHLIGHT}
            </HeadingHighlight>
            {t.REACT_ACADEMY_SCHEDULE_HEADING_AFTER}
          </>
        }
        subheading={t.REACT_ACADEMY_SCHEDULE_DESCRIPTION}
      >
        <BorderBox as="article" className={style.scheduleCard}>
          <IconWrapper
            iconClassName={style.iconSchedule}
            iconColor={COLORS.aztecAtom}
            className={style.scheduleIconWrapper}
          />
          <h3 className={style.scheduleCardTitle}>
            {t.REACT_ACADEMY_SCHEDULE_TERMS_TITLE}
          </h3>
          <p className={style.scheduleCardDescription}>
            {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_1}
          </p>
          <p className={style.scheduleCardDescription}>
            {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_2}
          </p>
          <p className={style.scheduleCardDescription}>
            {t.REACT_ACADEMY_SCHEDULE_TERMS_INTRO_3}
          </p>
          <p className={style.scheduleCalendarLabel}>
            {t.REACT_ACADEMY_SCHEDULE_CALENDAR_LABEL}
          </p>
          <div className={style.scheduleDatesList}>
            <Checklist
              items={[
                t.REACT_ACADEMY_SCHEDULE_DATE_1,
                t.REACT_ACADEMY_SCHEDULE_DATE_2,
                t.REACT_ACADEMY_SCHEDULE_DATE_3,
                t.REACT_ACADEMY_SCHEDULE_DATE_4,
                t.REACT_ACADEMY_SCHEDULE_DATE_5,
                t.REACT_ACADEMY_SCHEDULE_DATE_6,
                t.REACT_ACADEMY_SCHEDULE_DATE_7,
                t.REACT_ACADEMY_SCHEDULE_DATE_8,
                t.REACT_ACADEMY_SCHEDULE_DATE_9,
                t.REACT_ACADEMY_SCHEDULE_DATE_10,
                t.REACT_ACADEMY_SCHEDULE_DATE_11,
                t.REACT_ACADEMY_SCHEDULE_DATE_12,
              ]}
              ariaLabel={t.REACT_ACADEMY_SCHEDULE_TERMS_TITLE}
            />
          </div>
        </BorderBox>
      </Section>
    </>
  );
};

export default ReactAcademyPage;
