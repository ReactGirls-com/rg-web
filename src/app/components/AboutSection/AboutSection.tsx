import { Section } from '../../../components/Section';
import { HeadingHighlight } from '../../../components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { YellowSection } from './YellowSection';
import { COLORS } from '@/src/styles/color';
import { BasicCard } from '@/src/components/BasicCard';
import style from './AboutSection.module.scss';

export const AboutSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      titleText={t.ABOUT_SECTION_TITLE}
      titleColor={COLORS.paleLavender}
      heading={
        <>
          {t.ABOUT_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.paleLavender}>
            {t.ABOUT_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>{' '}
          {t.ABOUT_SECTION_HEADING_AFTER}
        </>
      }
      subheading={t.ABOUT_SECTION_SUBHEADING}
    >
      <div className={style.cardsContainer}>
        <BasicCard
          iconClassName={style.iconTarget}
          title={t.CARD_MISSION_TITLE}
          description={t.CARD_MISSION_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
        />
        <BasicCard
          iconClassName={style.iconHeart}
          title={t.CARD_VISION_TITLE}
          description={t.CARD_VISION_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <BasicCard
          iconClassName={style.iconPeople}
          title={t.CARD_UNIQUE_TITLE}
          description={t.CARD_UNIQUE_DESCRIPTION}
          iconColor={COLORS.paleLavender}
        />
      </div>

      <YellowSection />
    </Section>
  );
};
