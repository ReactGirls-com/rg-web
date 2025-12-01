import { Section } from '../../../components/Section';
import { HeadingHighlight } from '../../../components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { YellowSection } from './YellowSection';
import { COLORS } from '@/src/styles/color';
import { BasicCard } from '@/src/components/BasicCard';
import style from './AboutSection.module.scss';

export const AboutSection = () => (
  <Section
    titleText={TRANSLATIONS.ABOUT_SECTION_PILL}
    titleColor={COLORS.paleLavender}
    heading={
      <>
        {TRANSLATIONS.ABOUT_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.paleLavender}>
          {TRANSLATIONS.ABOUT_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>{' '}
        {TRANSLATIONS.ABOUT_SECTION_HEADING_AFTER}
      </>
    }
    subheading={TRANSLATIONS.ABOUT_SECTION_SUBHEADING}
  >
    <div className={style.cardsContainer}>
      <BasicCard
        iconClassName={style.iconTarget}
        title={TRANSLATIONS.CARD_MISSION_TITLE}
        description={TRANSLATIONS.CARD_MISSION_DESCRIPTION}
        iconColor="grapefruitPulp"
      />
      <BasicCard
        iconClassName={style.iconHeart}
        title={TRANSLATIONS.CARD_VISION_TITLE}
        description={TRANSLATIONS.CARD_VISION_DESCRIPTION}
        iconColor="aztecAtom"
      />
      <BasicCard
        iconClassName={style.iconPeople}
        title={TRANSLATIONS.CARD_UNIQUE_TITLE}
        description={TRANSLATIONS.CARD_UNIQUE_DESCRIPTION}
        iconColor="paleLavender"
      />
    </div>

    <YellowSection />
  </Section>
);
