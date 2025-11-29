import { BasicCard } from '../BasicCard';
import { TargetIcon, HeartIcon, PeopleIcon } from '../BasicCard/Icons';
import { Section } from '../Section';
import { TRANSLATIONS } from '@/src/constants/translations';
import { YellowSection } from './YellowSection';
import style from './AboutSection.module.scss';

export const AboutSection = () => (
  <Section
    pillText={TRANSLATIONS.ABOUT_SECTION_PILL}
    heading={
      <>
        {TRANSLATIONS.ABOUT_SECTION_HEADING_BEFORE}{' '}
        <span className={style.highlight}>
          {TRANSLATIONS.ABOUT_SECTION_HEADING_HIGHLIGHT}
        </span>{' '}
        {TRANSLATIONS.ABOUT_SECTION_HEADING_AFTER}
      </>
    }
    subheading={TRANSLATIONS.ABOUT_SECTION_SUBHEADING}
  >
    <div className={style.cardsContainer}>
      <BasicCard
        icon={<TargetIcon />}
        title={TRANSLATIONS.CARD_MISSION_TITLE}
        description={TRANSLATIONS.CARD_MISSION_DESCRIPTION}
        iconColor="red"
      />
      <BasicCard
        icon={<HeartIcon />}
        title={TRANSLATIONS.CARD_VISION_TITLE}
        description={TRANSLATIONS.CARD_VISION_DESCRIPTION}
        iconColor="cyan"
      />
      <BasicCard
        icon={<PeopleIcon />}
        title={TRANSLATIONS.CARD_UNIQUE_TITLE}
        description={TRANSLATIONS.CARD_UNIQUE_DESCRIPTION}
        iconColor="purple"
      />
    </div>

    <YellowSection />
  </Section>
);
