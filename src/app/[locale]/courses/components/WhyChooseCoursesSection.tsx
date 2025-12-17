import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { getTranslationsWithLocale } from '@/src/utils/getTranslations';
import { COLORS } from '@/src/styles/color';
import { WhyChooseCard } from './WhyChooseCard';
import style from './WhyChooseCoursesSection.module.scss';

export const WhyChooseCoursesSection: React.FC = async () => {
  const { t } = await getTranslationsWithLocale();

  return (
    <Section
      heading={
        <>
          {t.COURSES_WHY_SECTION_HEADING_BEFORE}{' '}
          <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
            {t.COURSES_WHY_SECTION_HEADING_HIGHLIGHT}
          </HeadingHighlight>
        </>
      }
    >
      <div className={style.cardsContainer}>
        <WhyChooseCard
          iconClassName={style.iconClock}
          description={t.COURSES_WHY_CARD_1_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
        />
        <WhyChooseCard
          iconClassName={style.iconPeople}
          description={t.COURSES_WHY_CARD_2_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
        <WhyChooseCard
          iconClassName={style.iconCode}
          description={t.COURSES_WHY_CARD_3_DESCRIPTION}
          iconColor={COLORS.paleLavender}
        />
        <WhyChooseCard
          iconClassName={style.iconStar}
          description={t.COURSES_WHY_CARD_4_DESCRIPTION}
          iconColor={COLORS.explodingStar}
        />
        <WhyChooseCard
          iconClassName={style.iconBook}
          description={t.COURSES_WHY_CARD_5_DESCRIPTION}
          iconColor={COLORS.grapefruitPulp}
        />
        <WhyChooseCard
          iconClassName={style.iconTarget}
          description={t.COURSES_WHY_CARD_6_DESCRIPTION}
          iconColor={COLORS.aztecAtom}
        />
      </div>
    </Section>
  );
};
