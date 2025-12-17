import { Section } from '../../../components/Section';
import { HeadingHighlight } from '../../../components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import {
  COURSES_LINK,
  MENTORING_LINK,
  MEETUPS_LINK,
  SECTION_IDS,
} from '@/src/constants';
import { ActivityCard } from './ActivityCard';
import { AreYouLostBanner } from '@/src/components/AreYouLostBanner/AreYouLostBanner';
import style from './OurActivities.module.scss';

export const OurActivities: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      id={SECTION_IDS.OUR_ACTIVITIES}
      titleText={t.OUR_ACTIVITIES_SECTION_TITLE}
      titleColor={COLORS.aztecAtom}
      heading={
        <>
          {t.OUR_ACTIVITIES_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.aztecAtom}>
            {t.OUR_ACTIVITIES_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>
        </>
      }
      subheading={t.OUR_ACTIVITIES_SECTION_SUBHEADING}
    >
      <div className={style.cardsContainer}>
        <ActivityCard
          iconClassName={style.iconBook}
          title={t.OUR_ACTIVITIES_COURSES_TITLE}
          description={t.OUR_ACTIVITIES_COURSES_DESCRIPTION}
          bullets={[
            t.OUR_ACTIVITIES_COURSES_BULLET_1,
            t.OUR_ACTIVITIES_COURSES_BULLET_2,
            t.OUR_ACTIVITIES_COURSES_BULLET_3,
          ]}
          buttonVariant="grapefruitPulp"
          buttonHref={COURSES_LINK}
          buttonText={t.OUR_ACTIVITIES_COURSES_BUTTON}
          bulletListColor={COLORS.grapefruitPulp}
        />

        <ActivityCard
          iconClassName={style.iconPeople}
          title={t.OUR_ACTIVITIES_MENTORING_TITLE}
          description={t.OUR_ACTIVITIES_MENTORING_DESCRIPTION}
          bullets={[
            t.OUR_ACTIVITIES_MENTORING_BULLET_1,
            t.OUR_ACTIVITIES_MENTORING_BULLET_2,
            t.OUR_ACTIVITIES_MENTORING_BULLET_3,
            t.OUR_ACTIVITIES_MENTORING_BULLET_4,
          ]}
          buttonVariant="explodingStar"
          buttonHref={MENTORING_LINK}
          buttonText={t.OUR_ACTIVITIES_MENTORING_BUTTON}
          showStarBadge
          showBadge
          badgeText={t.OUR_ACTIVITIES_MENTORING_BADGE}
          bulletListColor={COLORS.carbonFiber}
          textColor={COLORS.carbonFiber}
          backgroundColor={COLORS.aztecAtom}
        />

        <ActivityCard
          iconClassName={style.iconCalendar}
          title={t.OUR_ACTIVITIES_MEETUPS_TITLE}
          description={t.OUR_ACTIVITIES_MEETUPS_DESCRIPTION}
          bullets={[
            t.OUR_ACTIVITIES_MEETUPS_BULLET_1,
            t.OUR_ACTIVITIES_MEETUPS_BULLET_2,
            t.OUR_ACTIVITIES_MEETUPS_BULLET_3,
          ]}
          buttonVariant="paleLavender"
          buttonHref={MEETUPS_LINK}
          buttonText={t.OUR_ACTIVITIES_MEETUPS_BUTTON}
          bulletListColor={COLORS.paleLavender}
        />
      </div>

      <AreYouLostBanner title={t.CTA_TITLE} description={t.CTA_DESCRIPTION} />
    </Section>
  );
};
