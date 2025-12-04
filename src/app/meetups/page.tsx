import { SecondaryHero } from '@/src/components/SecondaryHero';
import { Button } from '@/src/components/Button';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import style from './page.module.scss';

const MeetupsPage = () => (
  <SecondaryHero
    titleText={TRANSLATIONS.MEETUPS_SECTION_TITLE}
    titleColor={COLORS.aztecAtom}
    headingBefore={TRANSLATIONS.MEETUPS_SECTION_HEADING_BEFORE}
    headingHighlight={TRANSLATIONS.MEETUPS_SECTION_HEADING_HIGHLIGHT}
    headingAfter={TRANSLATIONS.MEETUPS_SECTION_HEADING_AFTER}
    subheading={TRANSLATIONS.MEETUPS_SECTION_SUBHEADING}
    dataCards={[
      {
        value: 40,
        valueSuffix: '+',
        label: TRANSLATIONS.MEETUPS_STATS_PAST_MEETUPS_LABEL,
      },
      {
        value: 1200,
        valueSuffix: '+',
        label: TRANSLATIONS.MEETUPS_STATS_MEMBERS_LABEL,
      },
      {
        value: 70,
        valueSuffix: '+',
        label: TRANSLATIONS.MEETUPS_STATS_SPEAKERS_LABEL,
      },
      {
        value: '4.9',
        label: TRANSLATIONS.MEETUPS_STATS_RATING_LABEL,
        showStar: true,
      },
    ]}
  >
    <Button
      variant="grapefruitPulp"
      href="https://www.meetup.com/reactgirls/"
      className={style.button}
    >
      {TRANSLATIONS.MEETUPS_SECTION_BUTTON}
      <div className={style.icon} aria-hidden="true" />
    </Button>
  </SecondaryHero>
);

export default MeetupsPage;
