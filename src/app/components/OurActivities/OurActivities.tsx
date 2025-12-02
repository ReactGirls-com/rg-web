import { Section } from '../../../components/Section';
import { HeadingHighlight } from '../../../components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { NAV_LINKS } from '@/src/constants';
import { CtaBanner } from '@/src/components/CtaBanner';
import { CopyEmailButton } from './CopyEmailButton';
import { ActivityCard } from './ActivityCard';
import style from './OurActivities.module.scss';

export const OurActivities = () => (
  <Section
    titleText={TRANSLATIONS.OUR_ACTIVITIES_SECTION_TITLE}
    titleColor={COLORS.aztecAtom}
    heading={
      <>
        {TRANSLATIONS.OUR_ACTIVITIES_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.aztecAtom}>
          {TRANSLATIONS.OUR_ACTIVITIES_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>
      </>
    }
    subheading={TRANSLATIONS.OUR_ACTIVITIES_SECTION_SUBHEADING}
  >
    <div className={style.cardsContainer}>
      <ActivityCard
        iconClassName={style.iconBook}
        title={TRANSLATIONS.OUR_ACTIVITIES_COURSES_TITLE}
        description={TRANSLATIONS.OUR_ACTIVITIES_COURSES_DESCRIPTION}
        bullets={[
          TRANSLATIONS.OUR_ACTIVITIES_COURSES_BULLET_1,
          TRANSLATIONS.OUR_ACTIVITIES_COURSES_BULLET_2,
          TRANSLATIONS.OUR_ACTIVITIES_COURSES_BULLET_3,
        ]}
        buttonVariant="grapefruitPulp"
        buttonHref={NAV_LINKS[0].href}
        buttonText={TRANSLATIONS.OUR_ACTIVITIES_COURSES_BUTTON}
        bulletListColor={COLORS.grapefruitPulp}
      />

      <ActivityCard
        iconClassName={style.iconPeople}
        title={TRANSLATIONS.OUR_ACTIVITIES_MENTORING_TITLE}
        description={TRANSLATIONS.OUR_ACTIVITIES_MENTORING_DESCRIPTION}
        bullets={[
          TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BULLET_1,
          TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BULLET_2,
          TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BULLET_3,
          TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BULLET_4,
        ]}
        buttonVariant="explodingStar"
        buttonHref={NAV_LINKS[1].href}
        buttonText={TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BUTTON}
        showStarBadge
        showBadge
        badgeText={TRANSLATIONS.OUR_ACTIVITIES_MENTORING_BADGE}
        cardClassName={style.cardMentoring}
        bulletListColor={COLORS.carbonFiber}
      />

      <ActivityCard
        iconClassName={style.iconCalendar}
        title={TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_TITLE}
        description={TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_DESCRIPTION}
        bullets={[
          TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_BULLET_1,
          TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_BULLET_2,
          TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_BULLET_3,
        ]}
        buttonVariant="aztecAtom"
        buttonHref={NAV_LINKS[2].href}
        buttonText={TRANSLATIONS.OUR_ACTIVITIES_MEETUPS_BUTTON}
        bulletListColor={COLORS.aztecAtom}
      />
    </div>

    <CtaBanner
      title={TRANSLATIONS.OUR_ACTIVITIES_CTA_TITLE}
      description={TRANSLATIONS.OUR_ACTIVITIES_CTA_DESCRIPTION}
    >
      <CopyEmailButton
        email="reactgirlsprague@gmail.com"
        copyText={TRANSLATIONS.OUR_ACTIVITIES_CTA_COPY_EMAIL}
        copiedText={TRANSLATIONS.OUR_ACTIVITIES_CTA_COPIED_EMAIL}
      />
    </CtaBanner>
  </Section>
);
