import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { WhyChooseCard } from './WhyChooseCard';
import style from './WhyChooseCoursesSection.module.scss';

export const WhyChooseCoursesSection = () => (
  <Section
    heading={
      <>
        {TRANSLATIONS.COURSES_WHY_SECTION_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.grapefruitPulp}>
          {TRANSLATIONS.COURSES_WHY_SECTION_HEADING_HIGHLIGHT}
        </HeadingHighlight>
      </>
    }
  >
    <div className={style.cardsContainer}>
      <WhyChooseCard
        iconClassName={style.iconClock}
        description={TRANSLATIONS.COURSES_WHY_CARD_1_DESCRIPTION}
        iconColor={COLORS.grapefruitPulp}
      />
      <WhyChooseCard
        iconClassName={style.iconPeople}
        description={TRANSLATIONS.COURSES_WHY_CARD_2_DESCRIPTION}
        iconColor={COLORS.aztecAtom}
      />
      <WhyChooseCard
        iconClassName={style.iconCode}
        description={TRANSLATIONS.COURSES_WHY_CARD_3_DESCRIPTION}
        iconColor={COLORS.paleLavender}
      />
      <WhyChooseCard
        iconClassName={style.iconStar}
        description={TRANSLATIONS.COURSES_WHY_CARD_4_DESCRIPTION}
        iconColor={COLORS.explodingStar}
      />
      <WhyChooseCard
        iconClassName={style.iconBook}
        description={TRANSLATIONS.COURSES_WHY_CARD_5_DESCRIPTION}
        iconColor={COLORS.grapefruitPulp}
      />
      <WhyChooseCard
        iconClassName={style.iconTarget}
        description={TRANSLATIONS.COURSES_WHY_CARD_6_DESCRIPTION}
        iconColor={COLORS.aztecAtom}
      />
    </div>
  </Section>
);
