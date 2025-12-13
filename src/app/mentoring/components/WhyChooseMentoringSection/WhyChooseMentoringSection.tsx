import { Section } from '@/src/components/Section';
import { HeadingHighlight } from '@/src/components/HeadingHighlight';
import { TRANSLATIONS } from '@/src/constants/translations';
import { COLORS } from '@/src/styles/color';
import { BasicCard } from '@/src/components/BasicCard';
import style from './WhyChooseMentoringSection.module.scss';

export const WhyChooseMentoringSection = () => (
  <Section
    heading={
      <>
        {TRANSLATIONS.MENTORING_WHY_CHOOSE_HEADING_BEFORE}{' '}
        <HeadingHighlight highlightColor={COLORS.paleLavender}>
          {TRANSLATIONS.MENTORING_WHY_CHOOSE_HEADING_HIGHLIGHT}
        </HeadingHighlight>{' '}
        {TRANSLATIONS.MENTORING_WHY_CHOOSE_HEADING_AFTER}
      </>
    }
    subheading={TRANSLATIONS.MENTORING_WHY_CHOOSE_SUBHEADING}
  >
    <div className={style.cardsContainer}>
      <BasicCard
        iconClassName={style.iconTarget}
        title={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_1_TITLE}
        description={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_1_DESCRIPTION}
        iconColor={COLORS.grapefruitPulp}
      />
      <BasicCard
        iconClassName={style.iconCalendar}
        title={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_2_TITLE}
        description={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_2_DESCRIPTION}
        iconColor={COLORS.aztecAtom}
      />
      <BasicCard
        iconClassName={style.iconChat}
        title={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_3_TITLE}
        description={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_3_DESCRIPTION}
        iconColor={COLORS.paleLavender}
      />
      <BasicCard
        iconClassName={style.iconMedal}
        title={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_4_TITLE}
        description={TRANSLATIONS.MENTORING_WHY_CHOOSE_CARD_4_DESCRIPTION}
        iconColor={COLORS.explodingStar}
      />
    </div>
  </Section>
);
